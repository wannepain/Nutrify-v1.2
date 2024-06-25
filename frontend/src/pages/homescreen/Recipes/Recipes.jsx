// // src/pages/Recipes.js
// import axios from 'axios';
// import { useEffect } from 'react';
// import { useLoaderData } from 'react-router-dom';
// import RecipeDayCard from '../../../modules/homescreen/recipes/RecipeCardContainer';

// // Loader function to fetch weekly recipes
// export async function Loader() {
//   const token = localStorage.getItem("jwtToken");
//   if (token) {
//     console.log(token);

//     try {
//       const result = await axios.post('http://localhost:3000/weeklyRecipes', {}, {
//           headers: {
//             "authorization": token
//           }
//         });
//       if (result.status === 200) {
//         return { weeklyRecipes: result.data.weekRecipes, result: result };
        
//       } else {
//         console.log(result);
//         return false;
//       }
//     } catch (error) {
//       console.log(error);
//       return error;
//     }
//   } else{
//     console.log("token does not exist");
//     return false;
//   }


  
// }

// // Main component to display recipes
// function Recipes() {
//   const data = useLoaderData();
//   const dayUncomplete = data.weeklyRecipes[0];
//   const days = [];


//   useEffect(()=>{
//     Object.keys(dayUncomplete).forEach((key) => {
//       if (key !== 'user_id') {
//         days[key] = dayUncomplete[key];
//       }
//     });
//   }, [])

//   return (
//     <div>
//       <h1>hello</h1>
//       {/* {Object.keys(days).map((key) => {
//         const day = { [key]: days[key] };
//         return <RecipeDayCard key={key} day={day} />;
//       })} */}
//       {Object.keys(days).forEach((key)=>{
//         console.log(key);
//       })}
//     </div>
//   );
// }
//  export default Recipes;

// src/pages/Recipes.js
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import RecipeDayCard from '../../../modules/homescreen/recipes/RecipeCardContainer';

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
        return { weeklyRecipes: result.data.weekRecipes, result: result };
      } else {
        console.log(result);
        return false;
      }
    } catch (error) {
      console.log(error);
      return error;
    }
  } else {
    console.log("token does not exist");
    return false;
  }
}

// Main component to display recipes
function Recipes() {
  const data = useLoaderData();
  const dayUncomplete = data.weeklyRecipes[0];
  const [days, setDays] = useState({});

  useEffect(() => {
    const daysObject = {};
    Object.keys(dayUncomplete).forEach((key) => {
      if (key !== 'user_id') {
        daysObject[key] = dayUncomplete[key];
      }
    });
    setDays(daysObject);
  }, [dayUncomplete]);

  return (
    <div>
      {Object.keys(days).map((key) => {
        const day = { [key]: days[key] };
        return <RecipeDayCard key={key} day={day} currentDay={key}/>;
      })}
    </div>
  );
}

export default Recipes;
