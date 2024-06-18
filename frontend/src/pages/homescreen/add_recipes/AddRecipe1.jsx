// import { Link, json } from "react-router-dom";
// import ImgInput from "../../../modules/homescreen/add_recipes/ImgInput";
// import { useEffect, useState } from "react";
// import classes from "./addrecipe.module.css";
// import Question from "../../../modules/homescreen/add_recipes/Question";



// function AddRecipe1() {
//     const [inputValues, setInputValues] = useState({recName: null, recDescription:  null});

//     useEffect(() => {
//         const savedValues = JSON.parse(localStorage.getItem("name_description"));
//         console.log(savedValues);
//         if (savedValues) {
//             setInputValues(savedValues);
//         }
//     }, [])
    

//     useEffect(() => {
//         const {recName, recDescription} = inputValues;
//         if (recName !== null && recDescription !== null) {
            
//             localStorage.setItem("name_description",  JSON.stringify(inputValues));
//         }
//     }, [inputValues])
    
    
//     function handleInputChange(event) {
//         const changed = event.currentTarget.name;
//         const value = event.currentTarget.value;
//         setInputValues((prev)=>({...prev, [changed]: value}));
//     }

//     function imgSavingFunction(data) {
//         localStorage.setItem("recipe_img", JSON.stringify(data));
//     }

//     return(
//         <div className={classes.motherDiv}> 
//             <h1 className={classes.title}>Add Recipe</h1>
//             <div>
//                 <label  className={classes.inlineLabel}>Recipe Image:</label>
//                 <ImgInput savingFunction={imgSavingFunction}/>
//             </div>
//             <div className={classes.inputContainer}>
//                 <label htmlFor="recName" className={classes.inlineLabel}>
//                     Recipe Name: 
//                     <Question 
//                         title="Name of the recipe" 
//                         text="This is how the users will be able to find your recipe, try to make it as unique as possible"
//                     />
//                 </label>
//                 <input type="text" name="recName" className={classes.textInput} placeholder="Pizza Margherita" onChange={handleInputChange} value={inputValues.recName}/>
//             </div>
//             <div className={classes.inputContainer}>
//                 <label htmlFor="recDescription" className={classes.inlineLabel}>
//                     Recipe Description: 
//                     <Question 
//                         title="Description of the recipe"
//                         text="Should be one short sentence, that describes your recipe. Make it sound nice and pleasant"
//                         />
//                     </label>
//                 <input type="text" name="recDescription" className={classes.textInput} placeholder="delicious Italian pizza" value={inputValues.recDescription}/>
//             </div>
            
//             <Link to="1" className={classes.continueLink}>Continue</Link>
//         </div>
        
//     )
// }

// export default AddRecipe1;



import { Link } from "react-router-dom";
import ImgInput from "../../../modules/homescreen/add_recipes/ImgInput";
import { useEffect, useState } from "react";
import classes from "./addrecipe.module.css";
import Question from "../../../modules/homescreen/add_recipes/Question";

function AddRecipe1() {
    const [inputValues, setInputValues] = useState({
        recName: "",
        recDescription: ""
    });

    useEffect(() => {
        const savedValues = JSON.parse(localStorage.getItem("name_description"));
        if (savedValues) {
            setInputValues(savedValues);
            console.log("current value has been changed");
        }
    }, []);

    useEffect(() => {
        if (inputValues.recDescription === "" || inputValues.recName ==="") {
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

            <Link to="1" className={classes.continueLink}>Continue</Link>
        </div>
    );
}

export default AddRecipe1;
