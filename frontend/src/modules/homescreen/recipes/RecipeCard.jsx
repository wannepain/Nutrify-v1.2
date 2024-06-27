import { useEffect } from "react";
import axios from "axios";

function RecipeCard(props) {
    const courseId = props.courseId;

    useEffect(() => {
        const recipeData = getRecipeData(courseId);
        async function getRecipeData(course) {
            if (course !== false) {
                try {
                    const result = axios.post("http://localhost:3000/getrecipe", {course});
                    console.log(result);
                } catch (error) {
                    console.log(error);
                }
            } 
        }
        
    }, [])
    

    

    
}

export default RecipeCard; 