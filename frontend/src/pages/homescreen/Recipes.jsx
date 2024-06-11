// src/pages/Recipes.js
import axios from 'axios';
import { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import RecipeDayCard from "./../../modules/homescreen/RecipeDayCard";

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
        console.log(result.data);
        return { weeklyRecipes: result.data.weekRecipes, result: result };
        
      } else {
        console.log(result);
        return false;
      }
    } catch (error) {
      console.log(error);
      return error;
    }
  } else{
    console.log("token does not exist");
    return false;
  }


  
}

// Main component to display recipes
function Recipes() {
  const data = useLoaderData();
  const recipes = data? data.weeklyRecipes : false;
  useEffect(() => {
    console.log(data);
  }, [data])
  
  let jsxToRender;
  
  if (!data) {
    return <h1>Loading...</h1>; // Loading state
  }
  if (recipes === undefined || !recipes) {
    jsxToRender=(
      <h1>RECIPES ARE {`${recipes}`}</h1>
    )
  } else{
    jsxToRender = (
      <>
        {recipes.map((recipe, index) => (
          <RecipeDayCard key={index} recipe={recipe} />
        ))}
      </>
      
    )
  }

  return (
    <div>
      <h1>Hello from Recipes</h1>
      {jsxToRender}
    </div>
  );
}
 export default Recipes;