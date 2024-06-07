import { Link } from "react-router-dom";
import classes from "./addrecipe.module.css";
import { useState } from "react";

function AddRecipe3() {
    //ingredients, meals 
    const [ingredientsArray, setIngredientsArray] = useState([]);
    const [currentIngredient, setCurrentIngredient]= useState("");

    function handleChange(event) {
        const value = event.currentTarget.value;
        setCurrentIngredient(value)
    }

    function handleAdd() {
        setIngredientsArray((prevValue)=>{[...prevValue, currentIngredient]});
    }

    return(
        <div className={classes.motherDiv}>
            <Link to="/home/add/1" className={classes.returnLink}>Go back</Link>
            <div>
                <input type="text" name="ingredientInput" value={currentIngredient} onChange={handleChange}/>
                <button type="button" onClick={handleAdd}>Add</button>
            </div>
            <div>
                {ingredientsArray.map((currentValue)=>{
                    <button type="button" >{currentValue}</button>
                })}
            </div>
            <Link to="/home/add/3" className={classes.continueLink}>Continue</Link>
        </div>
        
    )
}

export default AddRecipe3;