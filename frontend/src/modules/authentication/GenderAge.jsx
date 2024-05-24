import React, { useState, useEffect } from "react";
import classes from "./genderage.module.css";
import dropdown from "./dropdown.module.css";

function GenderAge(props) {
    const [selectedOption, setSelectedOption] = useState("");
    const [wantToSelect, setWantToSelect] = useState(false);
    const [currentAge, setCurrentAge] = useState(null);

    useEffect(() => {
        if (selectedOption !== "" && currentAge !== null) {
            props.obj({ age: currentAge, gender: selectedOption === "Female" ? "f" : "m" });
        }
    }, [selectedOption, currentAge]);

    function handleClick() {
        setWantToSelect(!wantToSelect);
    }

    function handleSelect(option) {
        setSelectedOption(option);
        setWantToSelect(false);
    }

    function handleChange(event) {
        setCurrentAge(event.target.value);
        if (selectedOption !== "" && event.target.value !== "") {
            props.obj({ age: event.target.value, gender: selectedOption === "Female" ? "f" : "m" });
        }
    }

    return (
        <div className={classes.genderAgeContainer}>
            <div className={classes.genderContainer}>
                <h3>What gender are you?</h3>
                <div>
                    <button type="button" className={dropdown.mainBtn} onClick={handleClick}>
                        {selectedOption === "" ? "Select gender..." : selectedOption}
                    </button>
                    {wantToSelect && (
                        <div className={dropdown.optionsContainer}>
                            <button type="button" className={dropdown.topBtn} onClick={() => handleSelect("Male")}>
                                Male
                            </button>
                            <button type="button" className={dropdown.bottomBtn} onClick={() => handleSelect("Female")}>
                                Female
                            </button>
                        </div>
                    )}
                </div>
            </div>
            <div className={classes.ageContainer}>
                <label htmlFor="age">How old are you?</label>
                <input type="number" name="age" className={classes.userAge} placeholder="25" onChange={handleChange} value={currentAge} />
            </div>
        </div>
    );
}

export default GenderAge;
