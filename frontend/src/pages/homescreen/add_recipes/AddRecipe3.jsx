// import { Link } from "react-router-dom";
// import classes from "./addrecipe.module.css";
// import { useState } from "react";

// function AddRecipe3() {
//     //ingredients, meals 
//     const [ingredientsArray, setIngredientsArray] = useState([]);
//     const [currentIngredient, setCurrentIngredient]= useState("");

//     function handleChange(event) {
//         const value = event.currentTarget.value;
//         setCurrentIngredient(value)
//     }

//     function handleAdd() {
//         setIngredientsArray((prevValue)=>{[...prevValue, currentIngredient]});
//     }

//     return(
//         <div className={classes.motherDiv}>
//             <Link to="/home/add/1" className={classes.returnLink}>Go back</Link>
//             <div>
//                 <input type="text" name="ingredientInput" value={currentIngredient} onChange={handleChange}/>
//                 <button type="button" onClick={handleAdd}>Add</button>
//             </div>
//             <div>
//                 {ingredientsArray.map((currentValue, index)=>{
//                     <button type="button" key={index}>{currentValue}</button>
//                 })}
//             </div>
//             <Link to="/home/add/3" className={classes.continueLink}>Continue</Link>
//         </div>
        
//     )
// }

// export default AddRecipe3;

import { Link } from "react-router-dom";
import classes from "./addrecipe.module.css";
import { useState } from "react";
import Select from "../../../modules/homescreen/add_recipes/Select";

function AddRecipe3() {
    const [ingredientsArray, setIngredientsArray] = useState([]);
    const [currentIngredient, setCurrentIngredient] = useState("");
    const optionsArray = [
        "Breakfast", "Lunch", "Dinner", "Snack"
    ];
    const [selectedMeals, setSelectedMeals] = useState([]);

    function handleChange(event) {
        const value = event.currentTarget.value;
        setCurrentIngredient(value);
    }

    function handleAdd() {
        setIngredientsArray((prevValue) => [...prevValue, currentIngredient]);
        setCurrentIngredient(""); // Clear the input after adding the ingredient
    }
    function handleRemove(event) {
        const target = event.currentTarget.getAttribute("data-value");
        console.log(target);
        const newArray = ingredientsArray.filter((currentValue)=>{
        return currentValue !== target;
        });
        setIngredientsArray(newArray);
    }

    return (
        <div className={classes.motherDiv}>
            <Link to="/home/add/1" className={classes.returnLink}>Go back</Link>
            <div className={classes.containerDiv}>
                <input
                    type="text"
                    name="ingredientInput"
                    value={currentIngredient}
                    onChange={handleChange}
                    className={classes.textInput}
                />
                <button type="button" onClick={handleAdd}>Add</button>
            </div>
            <div className={classes.ingredientsContainer}>
                {ingredientsArray.map((currentValue, index) => (
                    <button type="button" key={index} onClick={handleRemove} data-value={currentValue}>{currentValue}</button>
                ))}
            </div>
            <Select options={optionsArray} setSelected={setSelectedMeals}/>
            <Link to="/home/add/3" className={classes.continueLink}>Continue</Link>
        </div>
    );
}

export default AddRecipe3;
