// src/pages/Recipes.js
import axios from 'axios';
import { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

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
  const weeklyRecipes = 
  useEffect(()=>{
    console.log(data);
  }, [])

  return (
    <div>
      <h1>Hello from Recipes</h1>
      {/* {jsxToRender} */}
    </div>
  );
}
 export default Recipes;