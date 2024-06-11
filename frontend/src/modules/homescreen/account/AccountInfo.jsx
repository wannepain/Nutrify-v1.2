import React, { useState } from 'react';
import axios from 'axios';
import { useLoaderData } from 'react-router-dom';
import classes from './accountinfo.module.css';
import Question from './../add_recipes/Question';
import Allergies from "./../../authentication/Allergies";

function AccountInfo() {
    const [changeValues, setChangeValues] = useState(null);
    const data = useLoaderData();
    if (!data || !data.length) {
        return <div>No user data available.</div>;
    }
    const { allergies, diet, current_weight, height, goal, gender, age, acti_fac } = data[0];
    const questionText={
        actiFac:{
            title: "Activity Factor",
            text:"This roughfly represents how active you are. You could also call it your 'Activity level'"
        }
    }

    function handleClick(event) {
        const inputType = event.currentTarget.dataset.value;
        let jsxDependant;
        switch (inputType) {
            case "allergen":
                jsxDependant=(
                    <Allergies />
                )
                break;
            case "select":
                jsxDependant
                break;
            case "number":

                break;
            default:
                break;
        }
        let jsxToRender = (
            <div>
                <h2 className={classes.title}>Change user information</h2>
                <div>
                    {jsxDependant}
                </div>
                <div>
                    <button type="button">Save</button>
                    <button type="button">Cancel</button>
                </div>
            </div>
        )

        
    }

    return (
        <div className={classes.containerDiv}>
            <div className={classes.inline}>
                <div className={classes.valueContainer}>
                    <label htmlFor="allergies_container" className={classes.inlineLabel}>Allergies:</label>
                    <ul name="allergies_container" className={classes.allergiesContainer}>
                        {allergies.map((currentValue) => (
                            <li key={currentValue + "_allergen"} className={classes.value}  data-value="allergen" onClick={handleClick}>
                                {currentValue}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={classes.valueContainer}>
                    <label htmlFor="diet" className={classes.inlineLabel}>Diet:</label>
                    <h2 name="diet" className={classes.value} data-value="select"  onClick={handleClick}>{diet}</h2>
                </div>
            </div>
            <div className={classes.inline}>
                <div className={classes.valueContainer}>
                    <label htmlFor="weight" className={classes.inlineLabel}>Current weight:</label>
                    <h2 name="weight" className={classes.value} data-value="number"  onClick={handleClick}>{current_weight}</h2>
                </div>
                <div className={classes.valueContainer}>
                    <label htmlFor="height" className={classes.inlineLabel}>Height:</label>
                    <h2 name="height" className={classes.value} data-value="number" onClick={handleClick}>{height}</h2>
                </div>
            </div>
            <div className={classes.inline}>
                <div className={classes.valueContainer}>
                    <label htmlFor="goal" className={classes.inlineLabel}>Your goal:</label>
                    <h2 name="goal" className={classes.value}  data-value="select" onClick={handleClick}>{goal}</h2>
                </div>
                <div className={classes.valueContainer}>
                    <label htmlFor="gender" className={classes.inlineLabel}>Gender:</label>
                    <h2 name="gender" className={classes.value}  data-value="select" onClick={handleClick}>{gender}</h2>
                </div>
            </div>
            <div className={classes.inline}>
                <div className={classes.valueContainer}>
                    <label htmlFor="age" className={classes.inlineLabel}>Age:</label>
                    <h2 name="age" className={classes.value} data-value="number" onClick={handleClick}>{age}</h2>
                </div>
                <div className={classes.valueContainer}>
                    <label htmlFor="actiFac" className={classes.inlineLabel}>Your activity factor:
                        <Question title={questionText.actiFac.title} text={questionText.actiFac.text}/>
                    </label>
                    <h2 name="actiFac" className={classes.value} data-value="select" onClick={handleClick}>{acti_fac}</h2>
                </div>
            </div>
            {changeValues !== null && changeValues}
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
