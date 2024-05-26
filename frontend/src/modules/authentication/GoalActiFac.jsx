
import React, { useState, useEffect } from "react";
import classes from "./goalactifac.module.css";
import Dropdown from "../common/Dropdown";

function GoalActiFac(props) {
    const [goal, setGoal] = useState("");
    const [activityLvl, setActivityLvl] = useState("");

    useEffect(() => {
        props.obj({ goal: goal.toLocaleLowerCase(), activity: activityLvl.toLocaleLowerCase() })
    }, [goal, activityLvl]);

    return (
        <div className={classes.goalActiFacContainer}>
            <div className={classes.goalContainer}>
                <h3>What's your goal??</h3>
                <Dropdown text="Select..." options="Gain weight, Lose weight, Maintain weight" settingFunction={setGoal}/>
            </div>
            <div className={classes.actiFacContainer} >
                <h3>How active are you?</h3>
                <Dropdown text="Select..." options="Sedentary, Light, Moderate, Active, Very active" settingFunction={setActivityLvl} />
            </div>
        </div>
    );
}

export default GoalActiFac;
