import { useNavigate, Link} from "react-router-dom";
import classes from "./addrecipe.module.css";
import Allergies from "../../../modules/authentication/Allergies";
import Question from "../../../modules/homescreen/add_recipes/Question";
import Select from "../../../modules/homescreen/add_recipes/Select";
import { useState, useEffect } from "react";
import OutsideAlerter from "../../../utility_components/OutsideAlerter";

function AddRecipe2() {
    const [selectedOption, setSelectedOptions] = useState(null)
    const [allergies, setAllergies] =  useState(null);
    const [calories, setCalories] = useState("0");
    const [isOut, setIsOut] = useState(false);
    const [isSelected, setIsSelected] = useState(false);
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const optionsArray = [
        "Omnivorous", "Vegetarian", "Vegan"
    ]
    useEffect(() => {
        if (isOut) {
            setIsSelected(false)
        }
      
    }, [isOut])

    useEffect(()=>{ // sets allergies 
        if (allergies !== null) {
            localStorage.setItem("allergiesRecipe", JSON.stringify(allergies));
        }
    },[allergies]);

    useEffect(()=>{ //sets diet
        if (selectedOption !== null) {
            localStorage.setItem("dietRecipe", JSON.stringify(selectedOption));
        }
    }, [selectedOption]);

    useEffect(()=>{ //sets calories 
        if (calories !== "0") {
           localStorage.setItem("caloriesRecipe", JSON.stringify(calories));
        }
    }, [calories])


    //set values on load, if they were saved

    useEffect(() => {
        const savedAllergies = JSON.parse(localStorage.getItem("allergiesRecipe"));
        if (savedAllergies !== null) {
            setAllergies(savedAllergies);
        }
        const savedDiet = JSON.parse(localStorage.getItem("dietRecipe"));
        if (savedDiet !== null) {
            setSelectedOptions(savedDiet);
        }
        const savedCalories = JSON.parse(localStorage.getItem("caloriesRecipe"));
        if (savedCalories !== null) {
            setCalories(savedCalories);
        }
    }, []);
    

    function handleChange(event) {
        const value = event.currentTarget.value;
        console.log(value);
        setCalories(value);
    }

    function handleClick(event) {
        setIsSelected(!isSelected);
    }

    function handleContinue(event) {
        event.preventDefault();
        console.log(selectedOption);

        if (calories === "0" || selectedOption.length === 0 ) {
            if (calories === "0") {
                setError("Calories must be filled");
            } else {
                setError("At least one diet should be selected");
            }
        } else {
            navigate("/home/add/2");
        }
    }

    return(
        <div className={classes.motherDiv}>
            <Link to=".."relative="route" className={classes.returnLink}>
                <img src="/caret-left.svg" alt="" />
                Go back
            </Link>
            <h1 className={classes.title}>Add Recipe </h1>
            <Allergies obj={setAllergies}/>
            <div className={classes.inputContainer}>
                <label htmlFor="calories" className={classes.inlineLabel}>Total Calories: 
                    <Question 
                        title="Calories" 
                        text="Add up how many calories all the ingredients have and divide it by the servings. That's how you get calories per serving"/>
                </label>
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
            <div>
                <label className={classes.inlineLabel}>Select all fiting diets: 
                <Question
                    title="Diets"
                    text="Omnivorous is a diet, where you can eat anything. Vegetarian is a diet where you cannot eat meat and vegetarian is a diet where you cannot eat any animal products"
                />
                </label>
                <Select options={optionsArray} setSelected={setSelectedOptions} selected={selectedOption}/>
            </div>
            {error !== "" && <p className={classes.error}>{error}</p>}
            <a className={classes.continueLink} onClick={handleContinue}>Continue</a>
        </div>
        
    )
}

export default AddRecipe2;
