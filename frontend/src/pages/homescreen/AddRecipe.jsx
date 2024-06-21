import { Outlet } from "react-router-dom";
import axios from "axios";

function AddRecipes() {
    return(
        <Outlet/>
    )
}

export async function submitRecipe() {
    const username = JSON.parse(localStorage.getItem("username_password"))
    //gets hold of all the data for the recipe submission
    const {recName, recDescription} = JSON.parse(localStorage.getItem("name_description"));
    const recipeImg = JSON.parse(localStorage.getItem("recipe_img"));

    const allergies = JSON.parse(localStorage.getItem("allergies"));
    const calories = JSON.parse(localStorage.getItem("caloriesRecipe"));
    const diet = JSON.parse(localStorage.getItem("dietRecipe"));

    const ingredients = JSON.parse(localStorage.getItem("ingredientsRecipe"));
    const meals = JSON.parse(localStorage.getItem("mealRecipe"));

    const procedure = localStorage.getItem("procedure");
    const courses =  JSON.parse(localStorage.getItem("courses"));


    try {
        const result = await axios.post("http://localhost:3000/add/recipe", {
            username: username.username,
            rec_name: recName,
            rec_img: recipeImg.base64Data, 
            ingredients: ingredients,
            procedure: procedure,
            allergies: allergies,
            diet: diet,
            calories: calories,
            meal: meals,
            course: courses,
            description: recDescription
    })
         if (result.status ===200) {
            clearLocalStorage();
            return 200;
         } else {
            return result.response.status;
         }
    } catch (error) {
        console.log(error);
        return error.response.status;
    }

    function clearLocalStorage() {
        localStorage.removeItem("name_description");
        localStorage.removeItem("recipe_img");
        localStorage.removeItem("allergies");
        localStorage.removeItem("caloriesRecipe");
        localStorage.removeItem("dietRecipe");
        localStorage.removeItem("ingredientsRecipe");
        localStorage.removeItem("mealRecipe");
        localStorage.removeItem("procedure");
        localStorage.removeItem("courses")
    }
}

export default AddRecipes;