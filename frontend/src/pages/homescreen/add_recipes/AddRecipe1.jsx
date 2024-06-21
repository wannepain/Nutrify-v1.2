// import { useNavigate } from "react-router-dom";
// import ImgInput from "../../../modules/homescreen/add_recipes/ImgInput";
// import { useEffect, useState } from "react";
// import classes from "./addrecipe.module.css";
// import Question from "../../../modules/homescreen/add_recipes/Question";

// function AddRecipe1() {
//     const [inputValues, setInputValues] = useState({
//         recName: "",
//         recDescription: ""
//     });
//     const [error, setError] = useState("");

//     const navigate = useNavigate()
//     useEffect(() => {
//         const savedValues = JSON.parse(localStorage.getItem("name_description"));
//         if (savedValues !== null) {
//             setInputValues(savedValues);
//             console.log("current value has been changed");
//         }
//     }, []);

//     useEffect(() => {
//         if (inputValues.recDescription !== "" || inputValues.recName !=="") {
//             localStorage.setItem("name_description", JSON.stringify(inputValues));
//             console.log("saved value has been changed");
//         }
//     }, [inputValues]);

//     function handleInputChange(event) {
//         const { name, value } = event.currentTarget;
//         setInputValues(prev => ({ ...prev, [name]: value }));
//     }

//     function imgSavingFunction(data) {
//         localStorage.setItem("recipe_img", JSON.stringify(data));
//     }

//     function handleContinue(event) {
//         event.preventDefault();

//         const imgData = JSON.parse(localStorage.getItem("recipe_img"));
        
//         if (inputValues.recDescription !== "" || inputValues.recName !=="" || imgData !== null) {
//             navigate("1");
//         } else {
//             setError("All fiels must be filled");
//         }
//     }

//     return (
//         <div className={classes.motherDiv}>
//             <h1 className={classes.title}>Add Recipe</h1>
//             <div>
//                 <label className={classes.inlineLabel}>Recipe Image:</label>
//                 <ImgInput savingFunction={imgSavingFunction} />
//             </div>
//             <div className={classes.inputContainer}>
//                 <label htmlFor="recName" className={classes.inlineLabel}>
//                     Recipe Name:
//                     <Question
//                         title="Name of the recipe"
//                         text="This is how users will find your recipe. Try to make it unique."
//                     />
//                 </label>
//                 <input
//                     type="text"
//                     name="recName"
//                     className={classes.textInput}
//                     placeholder="Pizza Margherita"
//                     onChange={handleInputChange}
//                     value={inputValues.recName}
//                 />
//             </div>
//             <div className={classes.inputContainer}>
//                 <label htmlFor="recDescription" className={classes.inlineLabel}>
//                     Recipe Description:
//                     <Question
//                         title="Description of the recipe"
//                         text="A short, pleasant description of your recipe."
//                     />
//                 </label>
//                 <input
//                     type="text"
//                     name="recDescription"
//                     className={classes.textInput}
//                     placeholder="Delicious Italian pizza"
//                     onChange={handleInputChange}
//                     value={inputValues.recDescription}
//                 />
//             </div>

//             {/* <Link to="1" className={classes.continueLink}>Continue</Link> */}
//             <a onClick={handleContinue} className={classes.continueLink}>Continue</a>
//             {error && <p className={classes.error}>{error}</p>}
//         </div>
//     );
// }

// export default AddRecipe1;


import { useNavigate } from "react-router-dom";
import ImgInput from "../../../modules/homescreen/add_recipes/ImgInput";
import { useEffect, useState } from "react";
import classes from "./addrecipe.module.css";
import Question from "../../../modules/homescreen/add_recipes/Question";

function AddRecipe1() {
    const [inputValues, setInputValues] = useState({
        recName: "",
        recDescription: ""
    });
    const [error, setError] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        const savedValues = JSON.parse(localStorage.getItem("name_description"));
        if (savedValues !== null) {
            setInputValues(savedValues);
            console.log("current value has been changed");
        }
    }, []);

    useEffect(() => {
        if (inputValues.recDescription !== "" || inputValues.recName !== "") {
            localStorage.setItem("name_description", JSON.stringify(inputValues));
            console.log("saved value has been changed");
        }
    }, [inputValues]);

    function handleInputChange(event) {
        const { name, value } = event.currentTarget;
        setInputValues(prev => ({ ...prev, [name]: value }));
    }

    function imgSavingFunction(data) {
        localStorage.setItem("recipe_img", JSON.stringify(data));
    }

    function handleContinue(event) {
        event.preventDefault();

        const imgData = JSON.parse(localStorage.getItem("recipe_img"));
        
        if (inputValues.recDescription !== "" && inputValues.recName !== "" && imgData !== null) {
            navigate("/home/add/1");  // Correct path for navigation
        } else {
            setError("All fields must be filled");
        }
    }

    return (
        <div className={classes.motherDiv}>
            <h1 className={classes.title}>Add Recipe</h1>
            <div>
                <label className={classes.inlineLabel}>Recipe Image:</label>
                <ImgInput savingFunction={imgSavingFunction} />
            </div>
            <div className={classes.inputContainer}>
                <label htmlFor="recName" className={classes.inlineLabel}>
                    Recipe Name:
                    <Question
                        title="Name of the recipe"
                        text="This is how users will find your recipe. Try to make it unique."
                    />
                </label>
                <input
                    type="text"
                    name="recName"
                    className={classes.textInput}
                    placeholder="Pizza Margherita"
                    onChange={handleInputChange}
                    value={inputValues.recName}
                />
            </div>
            <div className={classes.inputContainer}>
                <label htmlFor="recDescription" className={classes.inlineLabel}>
                    Recipe Description:
                    <Question
                        title="Description of the recipe"
                        text="A short, pleasant description of your recipe."
                    />
                </label>
                <input
                    type="text"
                    name="recDescription"
                    className={classes.textInput}
                    placeholder="Delicious Italian pizza"
                    onChange={handleInputChange}
                    value={inputValues.recDescription}
                />
            </div>

            <button onClick={handleContinue} className={classes.continueLink}>Continue</button>
            {error && <p className={classes.error}>{error}</p>}
        </div>
    );
}

export default AddRecipe1;
