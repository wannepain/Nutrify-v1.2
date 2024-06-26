// import { Outlet } from "react-router-dom";
// import axios from "axios";

// function AddRecipes() {
//     return(
//         <Outlet/>
//     )
// }

// export async function submitRecipe() {
//     const username = JSON.parse(localStorage.getItem("username_password"))
//     //gets hold of all the data for the recipe submission
//     const {recName, recDescription} = JSON.parse(localStorage.getItem("name_description"));
//     const recipeImg = JSON.parse(localStorage.getItem("recipe_img"));

//     const allergies = JSON.parse(localStorage.getItem("allergies"));
//     const calories = JSON.parse(localStorage.getItem("caloriesRecipe"));
//     const diet = JSON.parse(localStorage.getItem("dietRecipe"));

//     const ingredients = JSON.parse(localStorage.getItem("ingredientsRecipe"));
//     const meals = JSON.parse(localStorage.getItem("mealRecipe"));

//     const procedure = localStorage.getItem("procedure");
//     const courses =  JSON.parse(localStorage.getItem("courses"));


//     try {
//         const result = await axios.post("http://localhost:3000/add/recipe", {
//             username: username.username,
//             rec_name: recName,
//             rec_img: recipeImg.base64Data, 
//             ingredients: ingredients,
//             procedure: procedure,
//             allergies: allergies,
//             diet: diet,
//             calories: calories,
//             meal: meals,
//             course: courses,
//             description: recDescription
//     })
//          if (result.status ===200) {
//             localStorage.clear(); // change this code so that the username/password remain
//             localStorage.setItem("username_password", JSON.stringify({username: username, password:  null} ));
//             return 200;
//          } else {
//             return result.response.status;
//          }
//     } catch (error) {
//         console.log(error);
//         return error.response.status;
//     }
// }

// export default AddRecipes;

import { Outlet } from "react-router-dom";
import axios from "axios";

function AddRecipes() {
    return <Outlet />;
}

export async function submitRecipe() {
    const usernamePassword = JSON.parse(localStorage.getItem("username_password"));
    const jwtToken = localStorage.getItem("jwtToken");
    const { username, password } = usernamePassword;

    // Get all the data for the recipe submission
    const { recName, recDescription } = JSON.parse(localStorage.getItem("name_description"));
    const recipeImg = JSON.parse(localStorage.getItem("recipe_img"));
    const allergies = JSON.parse(localStorage.getItem("allergies"));
    const calories = JSON.parse(localStorage.getItem("caloriesRecipe"));
    const diet = JSON.parse(localStorage.getItem("dietRecipe"));
    const ingredients = JSON.parse(localStorage.getItem("ingredientsRecipe"));
    const meals = JSON.parse(localStorage.getItem("mealRecipe"));
    const procedure = localStorage.getItem("procedure");
    const courses = JSON.parse(localStorage.getItem("courses"));

    try {
        const result = await axios.post("http://localhost:3000/add/recipe", {
            username: username,
            rec_name: recName,
            rec_img: recipeImg.base64Data,
            ingredients: ingredients,
            procedure: procedure,
            allergies: allergies,
            diet: diet,
            calories: calories,
            meal: meals,
            course: courses,
            description: recDescription,
        });

        if (result.status === 200) {
            const preservedData = { username: username, password: password };
            localStorage.clear(); // Clear local storage
            localStorage.setItem("username_password", JSON.stringify(preservedData)); // Restore username and password
            localStorage.setItem("jwtToken", jwtToken);
            return 200;
        } else {
            return result.status;
        }
    } catch (error) {
        console.error(error);
        return error.response?.status || 500; // Return a default status code if error.response is undefined
    }
}

export default AddRecipes;
