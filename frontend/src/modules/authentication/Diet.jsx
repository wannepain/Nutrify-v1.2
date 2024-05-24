import React, { useState, useEffect } from "react";
import classes from "./diet.module.css";
import Dropdown from "../common/Dropdown";

function Diet(props) {
    // const [selectedOption, setSelectedOption] = useState("");
    // const [wantToSelect, setWantToSelect] = useState(false);

    // useEffect(() => {
    //     props.obj({ diet: selectedOption.toLocaleLowerCase() });
    // }, [selectedOption]);

    // function handleClick() {
    //     setWantToSelect(!wantToSelect);
    // }

    // function handleSelect(option) {
    //     setSelectedOption(option);
    //     setWantToSelect(false);
    // }

    return (
        <div id="dietContainer" className="dropdownContainer">
            <h3>What diet are you following?</h3>
            {/* <div className="dropdown-container">
                <button type="button" className={classes.mainDietBtn} onClick={handleClick}>
                    {selectedOption === "" ? "Select diet..." : selectedOption}
                </button>
                {wantToSelect && (
                    <div className={`${classes.optionsContainer} ${classes.dietSelectContainer}`}>
                        <button type="button" className={classes.dietTopBtn} onClick={() => handleSelect("Vegan")}>
                            Vegan
                        </button>
                        <button type="button" className={classes.dietMiddleBtn} onClick={() => handleSelect("Vegetarian")}>
                            Vegetarian
                        </button>
                        <button type="button" className={classes.dietBottomBtn} onClick={() => handleSelect("Omnivorous")}>
                            Omnivorous
                        </button>
                    </div>
                )}
            </div> */}
            <Dropdown text="Select diet..." options="Vegan,Vegetarian,Omnivorous" obj={props.obj}/>
        </div>
    );
}

export default Diet;
