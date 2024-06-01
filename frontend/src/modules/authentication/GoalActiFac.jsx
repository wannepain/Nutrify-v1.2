
import React, { useState, useEffect } from "react";
import classes from "./goalactifac.module.css";
import Dropdown from "../common/Dropdown";

function GoalActiFac(props) {
    const [goal, setGoal] = useState(localStorage.getItem("goal") || "");
    const [activityLvl, setActivityLvl] = useState(localStorage.getItem("activityLvl") || "");
    const options = {
        goal: ["Gain weight", "Lose weight", "Maintain weight"],
        activity: ["Sedentary", "Light", "Moderate", "Active", "Very active"]
    } 

    useEffect(() => {
        localStorage.setItem("goal", goal);
        localStorage.setItem("activityLvl", activityLvl);
        props.obj({ goal: goal.toLocaleLowerCase(), activity: activityLvl.toLocaleLowerCase() })
    }, [goal, activityLvl]);

    return (
        <div className={classes.goalActiFacContainer}>
            <div className={classes.goalContainer}>
                <h3 className={classes.h3}>What's your goal??</h3>
                <Dropdown text="Select..." options={options.goal} settingFunction={setGoal} selectedOption={goal}/>
            </div>
            <div className={classes.actiFacContainer} >
                <h3 className={classes.h3}>How active are you?</h3>
                <Dropdown text="Select..." options={options.activity} settingFunction={setActivityLvl} selectedOption={activityLvl}/>
            </div>
        </div>
    );
}

export default GoalActiFac;
