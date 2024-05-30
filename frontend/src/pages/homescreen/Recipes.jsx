import axios from "axios";
import { useState } from "react";


function Recipes(props) {
    const [weeklyRecipes, setWeeklyRecipes] = useState(null);
    //Request data for weekly recipes 
    //distribute the recipes for each day to the <RecipeDayCard/>

    return (
        <h1>Hello from Recipes</h1>
    )
}

async function Loader() {
    try {
        const result = await axios.post("http://localhost:3000/weeklyRecipes")
        if (result.data.status !== 200) {   
            // handle error
        } else {
            // success
            console.log(result);
            return result.weeklyRecipes;
        }
    } catch (error) {
        console.log(error);
    }
}

export default Recipes;

export {Loader}; 

