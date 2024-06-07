import { Link } from "react-router-dom";
import classes from "./addrecipe.module.css";
import Allergies from "../../../modules/authentication/Allergies";
import Question from "../../../modules/homescreen/add_recipes/Question";
import Select from "../../../modules/homescreen/add_recipes/Select";
import { useState, useEffect } from "react";
import OutsideAlerter from "../../../utility_components/OutsideAlerter";

function AddRecipe2() {
    const [selectedOption, setSelectedOptions] = useState([])
    const [calories, setCalories] = useState("0");
    const [isOut, setIsOut] = useState(false);
    const [isSelected, setIsSelected] = useState(false);
    const optionsArray = [
        "Omnivorous", "Vegetarian", "Vegan"
    ]
    useEffect(() => {
        if (isOut) {
            setIsSelected(false)
        }
      
    }, [isOut])
    

    function handleChange(event) {
        const value = event.currentTarget.value;
        console.log(value);
        setCalories(value);
    }

    function handleClick(event) {
        setIsSelected(!isSelected);
    }
    return(
        <div className={classes.motherDiv}>
            <Link to=".."relative="route" className={classes.returnLink}>Go back</Link>
            <h1 className={classes.title}>Add Recipe </h1>
            <Allergies />
            <div className={classes.inputContainer}>
                <label htmlFor="calories" className={classes.inlineLabel}>Total Calories: <Question title="" text=""/></label>
                <OutsideAlerter setIsOut={setIsOut}>
                    <div className={classes.overlayDiv}>
                        <input 
                            type="text" 
                            name="" 
                            id="" 
                            className={`${classes.textInput} ${isSelected? classes.selectedInput: ""}`} 
                            value={calories + "cals"} 
                            readOnly
                        />
                        <input 
                            type="number" 
                            name="calories" 
                            className={classes.hiddenInput} 
                            min="0" onChange={handleChange} 
                            onClick={handleClick}
                        />
                    </div>
                </OutsideAlerter>
            </div>
            <Select options={optionsArray} setSelected={setSelectedOptions}/>
            <Link to="/home/add/2" className={classes.continueLink}>Continue</Link>
        </div>
        
    )
}

export default AddRecipe2;