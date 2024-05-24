
import React, { useState, useEffect } from "react";
import dropdown from "./dropdown.module.css";
import classes from "./goalactifac.module.css";

function GoalActiFac(props) {
    const [selectedGoal, setSelectedGoal] = useState("");
    const [selectedActiFac, setSelectedActiFac] = useState("");
    const [wantToSelectGoal, setWantToSelectGoal] = useState(false);
    const [wantToSelectActivity, setWantToSelectActivity] = useState(false);
    const [selectedGoalShort, setSelectedGoalShort] = useState("");

    function handleClick(buttonType) {
        if (buttonType === "goalBtn") {
            setWantToSelectGoal(!wantToSelectGoal);
            setWantToSelectActivity(false); // Reset activity selection
        } else {
            setWantToSelectGoal(false); // Reset goal selection
            setWantToSelectActivity(!wantToSelectActivity);
        }
    }

    function handleSelect(option) {
        if (option === "Lose weight" || option === "Maintain weight" || option === "Gain weight (muscle)") {
            setSelectedGoal(option);
            setWantToSelectGoal(false);
            switch (option) {
                case "Lose weight":
                    setSelectedGoalShort("lose");
                    break;
                case "Maintain weight":
                    setSelectedGoalShort("maintain");
                    break;
                case "Gain weight (muscle)":
                    setSelectedGoalShort("gain");
                    break;
                default:
                    break;
            }
        } else {
            setSelectedActiFac(option);
            setWantToSelectActivity(false);
        }
    }

// Local variable to store the object to be passed to props.obj
const objToPass = { goal: selectedGoalShort, activity: selectedActiFac.toLocaleLowerCase() };

useEffect(() => {
    // Only call props.obj when both selectedGoal and selectedActiFac are not empty
    if (selectedGoal !== "" && selectedActiFac !== "") {
        props.obj(objToPass);
    }
}, [selectedGoal, selectedActiFac]);
    return (
        <div className={classes.goalActiFacContainer}>
            <div className={classes.goalContainer}>
                <h3>What's your goal??</h3>
                <div className="dropdown-container">
                    <button type="button" className={dropdown.mainBtn} name="goalBtn" onClick={() => handleClick("goalBtn")}>
                        {selectedGoal === "" ? "Select goal..." : selectedGoal}
                    </button>
                    {wantToSelectGoal && (
                        <div className={`${classes.goalActiFacContainer} optionsContainer`}>
                            <button type="button" className={dropdown.topBtn} name="lose" onClick={() => handleSelect("Lose weight")}>
                                Lose weight
                            </button>
                            <button type="button" className={dropdown.middleBtn} name="maintain" onClick={() => handleSelect("Maintain weight")}>
                                Maintain weight
                            </button>
                            <button type="button" className={dropdown.bottomBtn} name="gain" onClick={() => handleSelect("Gain weight (muscle)")}>
                                Gain weight (muscle)
                            </button>
                        </div>
                    )}
                </div>
            </div>
            <div className={classes.actiFacContainer} >
                <h3>How active are you?</h3>
                <div className="dropdown-container">
                    <button type="button" className={dropdown.mainBtn} name="activityBtn" onClick={() => handleClick("activityBtn")}>
                        {selectedActiFac === "" ? "Select activity level..." : selectedActiFac}
                    </button>
                    {wantToSelectActivity && (
                        <div id="activitySelectContainer" className="optionsContainer">
                            <button type="button" className={dropdown.topBtn} onClick={() => handleSelect("Sedentary")}>
                                Sedentary 
                            </button>
                            <button type="button" className={dropdown.middleBtn} onClick={() => handleSelect("Light")}>
                                Light 
                            </button>
                            <button type="button" className={dropdown.middleBtn} onClick={() => handleSelect("Moderate")}>
                                Moderate 
                            </button>
                            <button type="button" className={dropdown.middleBtn} onClick={() => handleSelect("Active")}>
                                Active 
                            </button>
                            <button type="button" className={dropdown.bottomBtn} onClick={() => handleSelect("Very active")}>
                                Very active 
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default GoalActiFac;
