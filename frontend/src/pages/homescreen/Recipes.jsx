// src/pages/Recipes.js
import axios from 'axios';
import { useLoaderData } from 'react-router-dom';

// Loader function to fetch weekly recipes
async function Loader() {
  try {
    const result = await axios.post('http://localhost:3000/weeklyRecipes');
    if (result.status !== 200) {
      throw new Error('Failed to fetch weekly recipes');
    } else {
      return result.data.weeklyRecipes; // Correctly access the data
    }
  } catch (error) {
    console.log(error);
    throw error; // Re-throw the error to be caught by React Router
  }
}

// Main component to display recipes
function Recipes() {
  const data = useLoaderData();
  
  console.log(data);
  
  if (!data) {
    return <h1>Loading...</h1>; // Loading state
  }

  return (
    <div>
      <h1>Hello from Recipes</h1>
      {data.map((recipe, index) => (
        <RecipeDayCard key={index} recipe={recipe} />
      ))}
    </div>
  );
}

// Assuming RecipeDayCard is a component that you want to use to display each day's recipe
function RecipeDayCard({ recipe }) {
  return (
    <div>
      <h2>{recipe.day}</h2>
      <p>{recipe.name}</p>
      {/* Other recipe details */}
    </div>
  );
}

export { Recipes as default, Loader };
