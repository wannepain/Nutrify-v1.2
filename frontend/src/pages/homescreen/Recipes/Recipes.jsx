// import axios from 'axios';
// import { useEffect, useState } from 'react';
// import { useLoaderData } from 'react-router-dom';
// import RecipeDayCard from '../../../modules/homescreen/recipes/RecipeCardContainer';

// // Loader function to fetch weekly recipes
// export async function Loader() {
//   const token = localStorage.getItem("jwtToken");
//   if (token) {
//     console.log(token);

//     try {
//       const result = await axios.post('http://localhost:3000/weeklyRecipes', {}, {
//         headers: {
//           "authorization": token
//         }
//       });
//       if (result.status === 200) {
//         return { weeklyRecipes: result.data.weekRecipes, result: result };
//       // } else {
//         console.log(result);
//         return false;
//       }
//     } catch (error) {
//       console.log(error);
//       return error;
//     }
//   } else {
//     console.log("token does not exist");
//     return false;
//   }
// }

// // Main component to display recipes
// function Recipes() {
//   const data = useLoaderData();
//   const dayUncomplete = data.weeklyRecipes[0];
//   const [days, setDays] = useState({});

//   useEffect(() => {
//     const daysObject = {};
//     Object.keys(dayUncomplete).forEach((key) => {
//       if (key !== 'user_id') {
//         daysObject[key] = dayUncomplete[key];
//       }
//     });
//     setDays(daysObject);
//   }, [dayUncomplete]);

//   return (
//     <div>
//       {Object.keys(days).map((key) => {
//         const day = { [key]: days[key] };
//         return <RecipeDayCard key={key} day={day} currentDay={key}/>;
//       })}
//     </div>
//   );
// }

// export default Recipes;



import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import RecipeDayCard from '../../../modules/homescreen/recipes/RecipeCardContainer';
import LogOutUser from '../../../utility_components/LogOutFunction';

// Loader function to fetch weekly recipes
export async function Loader() {
  const token = localStorage.getItem("jwtToken");
  if (token) {
    console.log(token);
    try {
      const result = await axios.post('http://localhost:3000/weeklyRecipes', {}, {
        headers: {
          "authorization": token
        }
      });
      if (result.status === 200) {
        console.log(result);
        return { weeklyRecipes: result.data.weekRecipes };
      } else {
        console.error('Failed to fetch weekly recipes:', result);
        return { error: true };
      }
    } catch (error) {
      console.error('Error fetching weekly recipes:', error);
      return { error: true };
    }
  } else {
    console.log("Token does not exist");
    return { error: true , message: "No token"};
  }
}

// Main component to display recipes
function Recipes() {
  const navigate = useNavigate()
  const data = useLoaderData();
  const [days, setDays] = useState({});

  useEffect(() => {
    if (data.error === true && data.message === "No token") {
      LogOutUser(navigate)
    }
    if (data && !data.error && data.weeklyRecipes && data.weeklyRecipes.length > 0) {
      const dayUncomplete = data.weeklyRecipes[0];
      const daysObject = {};
      Object.keys(dayUncomplete).forEach((key) => {
        if (key !== 'user_id') {
          daysObject[key] = dayUncomplete[key];
        }
      });
      setDays(daysObject);
    }
  }, [data]);

  if (data.error) {
    return <div>Error loading recipes. Please try again later.</div>;
  }

  if (!data.weeklyRecipes || data.weeklyRecipes.length === 0) {
    return <div>No recipes available.</div>;
  }

  return (
    <div>
      {Object.keys(days).map((key) => {
        const day = { [key]: days[key] };
        return <RecipeDayCard key={key} day={day} currentDay={key} />;
      })}
    </div>
  );
}

export default Recipes;
