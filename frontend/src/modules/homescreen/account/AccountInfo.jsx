// import React, { useState } from 'react';
// import axios from 'axios';
// import { useLoaderData } from 'react-router-dom';
// import classes from './accountinfo.module.css';
// import Question from './../add_recipes/Question';
// import Allergies from './../../authentication/Allergies';
// import Select from './../add_recipes/Select';

// function AccountInfo() {
//     const [changeValues, setChangeValues] = useState(null);
//     const [selectedOption, setSelectedOption] = useState(null);
//     const data = useLoaderData();
    
//     if (!data || !data.length) {
//         return <div>No user data available.</div>;
//     }
    
//     const { allergies, diet, current_weight, height, goal, gender, age, acti_fac } = data[0];
    
//     const questionText = {
//         actiFac: {
//             title: "Activity Factor",
//             text: "This roughly represents how active you are. You could also call it your 'Activity level'."
//         }
//     };

//     function handleClick(event) {
//         const inputType = event.currentTarget.dataset.value;
//         const target = event.currentTarget.name;
//         console.log(target);
//         let jsxDependant;
//         switch (inputType) {
//             case "allergen":
//                 jsxDependant = <Allergies />;
//                 break;
//             case "select":
//                 let opitionsArray;
//                 switch (target) {
//                     case "diet":
//                         opitionsArray = ["Omnivorous", "Vegetarian", "Vegan"];
//                         break;
//                     case "goal":
//                         opitionsArray = ["Gain weight", "Maintain weigh", "Lose weight"];
//                         break;

//                     case "actiFac":
//                         opitionsArray = ["Sedentary", "Light", "Moderate", "Active", "Very active"];
//                         break;

//                     default:
//                         break;
//                 }
//                 jsxDependant = <Select options={opitionsArray} onlyOption={true} setSelected={setSelectedOption}/>;
//                 break;
//             case "number":
//                 jsxDependant = <input type="number" name="numberInput" className={classes.numberInput} />;
//                 break;
//             default:
//                 jsxDependant = null;
//                 break;
//         }
//         const jsxToRender = (
//             <div>
//                 <h2 className={classes.title}>Change user information</h2>
//                 <div>
//                     {jsxDependant}
//                 </div>
//                 <div>
//                     <button type="button">Save</button>
//                     <button type="button">Cancel</button>
//                 </div>
//             </div>
//         );
//         setChangeValues(jsxToRender);
//     }

//     return (
//         <div className={classes.containerDiv}>
//             <div className={classes.inline}>
//                 <div className={classes.valueContainer}>
//                     <label htmlFor="allergies_container" className={classes.inlineLabel}>Allergies:</label>
//                     <ul name="allergies_container" className={classes.allergiesContainer}>
//                         {allergies.map((currentValue) => (
//                             <li key={currentValue + "_allergen"} className={classes.value} data-value="allergen" onClick={handleClick}>
//                                 {currentValue}
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//                 <div className={classes.valueContainer}>
//                     <label htmlFor="diet" className={classes.inlineLabel}>Diet:</label>
//                     <h2 name="diet" className={classes.value} data-value="select" onClick={handleClick}>{diet}</h2>
//                 </div>
//             </div>
//             <div className={classes.inline}>
//                 <div className={classes.valueContainer}>
//                     <label htmlFor="weight" className={classes.inlineLabel}>Current weight:</label>
//                     <h2 name="weight" className={classes.value} data-value="number" onClick={handleClick}>{current_weight}</h2>
//                 </div>
//                 <div className={classes.valueContainer}>
//                     <label htmlFor="height" className={classes.inlineLabel}>Height:</label>
//                     <h2 name="height" className={classes.value} data-value="number" onClick={handleClick}>{height}</h2>
//                 </div>
//             </div>
//             <div className={classes.inline}>
//                 <div className={classes.valueContainer}>
//                     <label htmlFor="goal" className={classes.inlineLabel}>Your goal:</label>
//                     <h2 name="goal" className={classes.value} data-value="select" onClick={handleClick}>{goal}</h2>
//                 </div>
//                 <div className={classes.valueContainer}>
//                     <label htmlFor="gender" className={classes.inlineLabel}>Gender:</label>
//                     <h2 name="gender" className={classes.value} data-value="select" onClick={handleClick}>{gender}</h2>
//                 </div>
//             </div>
//             <div className={classes.inline}>
//                 <div className={classes.valueContainer}>
//                     <label htmlFor="age" className={classes.inlineLabel}>Age:</label>
//                     <h2 name="age" className={classes.value} data-value="number" onClick={handleClick}>{age}</h2>
//                 </div>
//                 <div className={classes.valueContainer}>
//                     <label htmlFor="actiFac" className={classes.inlineLabel}>Your activity factor:
//                         <Question title={questionText.actiFac.title} text={questionText.actiFac.text} />
//                     </label>
//                     <h2 name="actiFac" className={classes.value} data-value="select" onClick={handleClick}>{acti_fac}</h2>
//                 </div>
//             </div>
//             {changeValues}
//         </div>
//     );
// }

// async function Loader() {
//     const username_password = JSON.parse(localStorage.getItem("username_password"));
//     if (!username_password || !username_password.username) {
//         console.error("Username not found in local storage");
//         return null;
//     }
//     try {
//         const response = await axios.post("http://localhost:3000/get/userData", { username: username_password.username });
//         return response.data;
//     } catch (error) {
//         console.error(error);
//         return null;
//     }
// }

// export { AccountInfo, Loader };

import React, { useState } from 'react';
import axios from 'axios';
import { useLoaderData } from 'react-router-dom';
import classes from './accountinfo.module.css';
import Question from './../add_recipes/Question';
import Allergies from './../../authentication/Allergies';
import Select from './../add_recipes/Select';

function AccountInfo() {
    const [changeValues, setChangeValues] = useState(null);
    const [selectedOption, setSelectedOption] = useState(null);
    const data = useLoaderData();
    
    if (!data || !data.length) {
        return <div>No user data available.</div>;
    }
    
    const { allergies, diet, current_weight, height, goal, gender, age, acti_fac } = data[0];
    
    const questionText = {
        actiFac: {
            title: "Activity Factor",
            text: "This roughly represents how active you are. You could also call it your 'Activity level'."
        }
    };

    function handleClick(event) {
        const inputType = event.currentTarget.dataset.value;
        const target = event.currentTarget.getAttribute('name');
        let jsxDependant;
        switch (inputType) {
            case "allergen":
                jsxDependant = <Allergies />;
                break;
            case "select":
                let optionsArray;
                switch (target) {
                    case "diet":
                        optionsArray = ["Omnivorous", "Vegetarian", "Vegan"];
                        break;
                    case "goal":
                        optionsArray = ["Gain weight", "Maintain weight", "Lose weight"];
                        break;
                    case "gender":
                        optionsArray = ["Male", "Female"];
                        break;
                    case "actiFac":
                        optionsArray = ["Sedentary", "Light", "Moderate", "Active", "Very active"];
                        break;
                    default:
                        break;
                }
                jsxDependant = <Select options={optionsArray} onlyOption={true} setSelected={setSelectedOption} />;
                break;
            case "number":
                jsxDependant = <input type="number" name="numberInput" className={classes.numberInput} />;
                break;
            default:
                jsxDependant = null;
                break;
        }
        const jsxToRender = (
            <div className={classes.overlayDiv}>
                <h2 className={classes.title}>Change user information</h2>
                <div>
                    {jsxDependant}
                </div>
                <div>
                    <button type="button" onClick={handleSave}>Save</button>
                    <button type="button" onClick={handleCancel}>Cancel</button>
                </div>
            </div>
        );
        setChangeValues(jsxToRender);
    }

    function handleSave() {
        // Implement save functionality
        console.log('Save clicked, selected value:', selectedOption);
        setChangeValues(null);
    }

    function handleCancel() {
        // Cancel changes
        setChangeValues(null);
    }

    return (
        <div className={classes.containerDiv}>
            <div className={classes.inline}>
                <div className={classes.valueContainer}>
                    <label htmlFor="allergies_container" className={classes.inlineLabel}>Allergies:</label>
                    <ul name="allergies_container" className={classes.allergiesContainer}>
                        {allergies.map((currentValue) => (
                            <li key={currentValue + "_allergen"} className={classes.value} data-value="allergen" onClick={handleClick}>
                                {currentValue}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={classes.valueContainer}>
                    <label htmlFor="diet" className={classes.inlineLabel}>Diet:</label>
                    <h2 name="diet" className={classes.value} data-value="select" onClick={handleClick}>{diet}</h2>
                </div>
            </div>
            <div className={classes.inline}>
                <div className={classes.valueContainer}>
                    <label htmlFor="weight" className={classes.inlineLabel}>Current weight:</label>
                    <h2 name="weight" className={classes.value} data-value="number" onClick={handleClick}>{current_weight}</h2>
                </div>
                <div className={classes.valueContainer}>
                    <label htmlFor="height" className={classes.inlineLabel}>Height:</label>
                    <h2 name="height" className={classes.value} data-value="number" onClick={handleClick}>{height}</h2>
                </div>
            </div>
            <div className={classes.inline}>
                <div className={classes.valueContainer}>
                    <label htmlFor="goal" className={classes.inlineLabel}>Your goal:</label>
                    <h2 name="goal" className={classes.value} data-value="select" onClick={handleClick}>{goal}</h2>
                </div>
                <div className={classes.valueContainer}>
                    <label htmlFor="gender" className={classes.inlineLabel}>Gender:</label>
                    <h2 name="gender" className={classes.value} data-value="select" onClick={handleClick}>{gender}</h2>
                </div>
            </div>
            <div className={classes.inline}>
                <div className={classes.valueContainer}>
                    <label htmlFor="age" className={classes.inlineLabel}>Age:</label>
                    <h2 name="age" className={classes.value} data-value="number" onClick={handleClick}>{age}</h2>
                </div>
                <div className={classes.valueContainer}>
                    <label htmlFor="actiFac" className={classes.inlineLabel}>Your activity factor:
                        <Question title={questionText.actiFac.title} text={questionText.actiFac.text} />
                    </label>
                    <h2 name="actiFac" className={classes.value} data-value="select" onClick={handleClick}>{acti_fac}</h2>
                </div>
            </div>
            {changeValues}
        </div>
    );
}

async function Loader() {
    const username_password = JSON.parse(localStorage.getItem("username_password"));
    if (!username_password || !username_password.username) {
        console.error("Username not found in local storage");
        return null;
    }
    try {
        const response = await axios.post("http://localhost:3000/get/userData", { username: username_password.username });
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export { AccountInfo, Loader };
