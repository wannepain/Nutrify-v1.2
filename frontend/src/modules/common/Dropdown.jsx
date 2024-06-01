import classes from "./dropdown.module.css";
import React, { useState, useEffect } from "react";
import OutsideAlerter from "../../utility_components/OutsideAlerter";

function Dropdown(props) {
    const [wantToSelect, setWantToSelect] = useState(false);
    const [clickedOutside, setIsClickedOutside] = useState(false)

    function handleClick() {
        setWantToSelect(!wantToSelect);
    }

    function handleSelect(option) {
        props.settingFunction(option); // Pass the selected option directly
        setWantToSelect(false);
    }

    return (
        <OutsideAlerter setIsOut={setIsClickedOutside}>
            <div className={classes.dropDownContainer}>
                <button type="button" className={classes.mainBtn} onClick={handleClick}>
                    {props.selectedOption === "" ? props.text : props.selectedOption} {/* Use props.selectedOption */}
                </button>
                {wantToSelect && !clickedOutside &&(
                    <div className={classes.optionsContainer}>
                        {props.options.map((option, index) => ( // Use props.options directly
                            <button key={index} type="button" className={classes.middleBtn} onClick={() => handleSelect(option)}>
                                {option}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </OutsideAlerter>
    );
}

export default Dropdown;
