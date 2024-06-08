import { Link } from "react-router-dom";
import ImgInput from "../../../modules/homescreen/add_recipes/ImgInput";
import { useState } from "react";
import classes from "./addrecipe.module.css";
import Question from "../../../modules/homescreen/add_recipes/Question";



function AddRecipe1() {
    const [recipeImg, setRecipeImg] = useState(null);
    

    return(
        <div className={classes.motherDiv}> 
            <h1 className={classes.title}>Add Recipe</h1>
            <div>
                <label  className={classes.inlineLabel}>Recipe Image:</label>
                <ImgInput savingFunction={setRecipeImg}/>
            </div>
            <div className={classes.inputContainer}>
                <label htmlFor="recName" className={classes.inlineLabel}>
                    Recipe Name: 
                    <Question 
                        title="Name of the recipe" 
                        text="This is how the users will be able to find your recipe, try to make it as unique as possible"
                    />
                </label>
                <input type="text" name="recName" className={classes.textInput} placeholder="Pizza Margherita"/>
            </div>
            <div className={classes.inputContainer}>
                <label htmlFor="recDescription" className={classes.inlineLabel}>
                    Recipe Description: 
                    <Question 
                        title="Description of the recipe"
                        text="Should be one short sentence, that describes your recipe. Make it sound nice and pleasant"
                        />
                    </label>
                <input type="text" name="recDesciption" className={classes.textInput} placeholder="delicious Italian pizza"/>
            </div>
            
            <Link to="1" className={classes.continueLink}>Continue</Link>
        </div>
        
    )
}

export default AddRecipe1;