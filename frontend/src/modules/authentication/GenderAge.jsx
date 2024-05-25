import React, { useState, useEffect } from "react";
import classes from "./genderage.module.css";
import Dropdown from "../common/Dropdown";

function GenderAge(props) {
    const [gender, setGender] = useState("");
    const [age, setAge] = useState("");

    useEffect(()=>{
        props.obj({age: age, gender: gender});
    }, [age, gender])

    function handleChange(event) {
        setAge(event.target.value);
    }

    return (
        <div className={classes.genderAgeContainer}>
            <div className={classes.genderContainer}>
                <h3>What gender are you?</h3>
                <Dropdown text="Select gender ..." options="male, female" settingFunction={setGender} />
            </div>
            <div className={classes.ageContainer}>
                <label htmlFor="age">How old are you?</label>
                <input type="number" name="age" className={classes.userAge} placeholder="25" onChange={handleChange} value={age} />
            </div>
        </div>
    );
}

export default GenderAge;
