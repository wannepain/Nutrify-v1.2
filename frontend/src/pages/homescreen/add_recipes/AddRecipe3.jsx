import { Link, useNavigate } from "react-router-dom";
import classes from "./addrecipe.module.css";
import { useState, useEffect } from "react";
import Select from "../../../modules/homescreen/add_recipes/Select";
import Question from "../../../modules/homescreen/add_recipes/Question";

function AddRecipe3() {
    const [ingredientsArray, setIngredientsArray] = useState([]);
    const [currentIngredient, setCurrentIngredient] = useState("");
    const optionsArray = ["Breakfast", "Lunch", "Dinner", "Snack"];
    const [selectedMeals, setSelectedMeals] = useState([]);
    const [error,setError] = useState("");

    const navigate = useNavigate()

    const questionTexts = {
        ingredients: {
            title: "Ingredients",
            text: "Enter all the ingredients used in this recipe, with the quantity for one portion."
        },
        meals: {
            title: "Meals",
            text: "Select all meals, where you think people would most enjoy your recipe"
        }
    };

    useEffect(() => {
        if (selectedMeals.length !== 0) {
            localStorage.setItem("mealRecipe", JSON.stringify(selectedMeals));
        }
    }, [selectedMeals]);

    useEffect(() => {
        if (ingredientsArray.length !== 0) {
            localStorage.setItem("ingredientsRecipe", JSON.stringify(ingredientsArray));
        }
    }, [ingredientsArray]);

    useEffect(() => {
        const savedIngredients = JSON.parse(localStorage.getItem("ingredientsRecipe"));
        if (savedIngredients.length !== 0) {
            setIngredientsArray(savedIngredients);
        }
        const savedMeals = JSON.parse(localStorage.getItem("mealRecipe"));
        if (savedMeals.length !== 0) {
            setSelectedMeals(savedMeals);
        }
    }, []);

    function handleChange(event) {
        const value = event.currentTarget.value;
        setCurrentIngredient(value);
    }

    function handleAdd() {
        if (currentIngredient.trim() === "") return;
        setIngredientsArray((prevValue) => [...prevValue, currentIngredient]);
        setCurrentIngredient(""); // Clear the input after adding the ingredient
    }

    function handleRemove(event) {
        const target = event.currentTarget.getAttribute("data-value");
        const newArray = ingredientsArray.filter((currentValue) => currentValue !== target);
        setIngredientsArray(newArray);
    }

    function handleContinue(event) {
        event.preventDefault();

        if (ingredientsArray.length === 0 || selectedMeals.length === 0) {
            if (ingredientsArray.length === 0) {
                setError("Provide ingredients used in the recipe");
            } else {
                setError("Select the most fitting meals");
            }
        } else {
            navigate("/home/add/3")
        }
    }

    return (
        <div className={classes.motherDiv}>
            <Link to="/home/add/1" className={classes.returnLink}>Go back</Link>
            <h1 className={classes.title}>Add Recipe</h1>
            <div>
                <label htmlFor="ingredientInput" className={classes.inlineLabel}>
                    Enter Ingredients (with quantities):
                    <Question title={questionTexts.ingredients.title} text={questionTexts.ingredients.text} />
                </label>
                <div className={classes.containerDiv}>
                    <input
                        type="text"
                        name="ingredientInput"
                        value={currentIngredient}
                        onChange={handleChange}
                        className={`${classes.textInput} ${classes.ingredientInput}`}
                    />
                    <button type="button" onClick={handleAdd} className={classes.addBtn}>Add</button>
                </div>
                <div className={classes.ingredientsContainer}>
                    {ingredientsArray.map((currentValue, index) => (
                        <button type="button" key={index} onClick={handleRemove} data-value={currentValue} className={classes.ingredientBtn}>
                            {currentValue}
                        </button>
                    ))}
                </div>
            </div>
            <div>
                <label htmlFor="selectMeals" className={classes.inlineLabel}>
                    Select fitting meals:
                    <Question title={questionTexts.meals.title} text={questionTexts.meals.text} />
                </label>
                <Select name="selectMeals" options={optionsArray} setSelected={setSelectedMeals} selected={selectedMeals}/>
            </div>
            {error !== "" && <p className={classes.error}>{error}</p>}
            <a className={classes.continueLink} onClick={handleContinue}>Continue</a>
        </div>
    );
}

export default AddRecipe3;
