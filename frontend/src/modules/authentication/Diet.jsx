import React, { useState, useEffect } from "react";
import classes from "./diet.module.css";
import Dropdown from "../common/Dropdown";

function Diet(props) {
    const [obj, setObj] = useState(localStorage.getItem("diet") || ""); // Initialize as null or another suitable value

    useEffect(() => {
        localStorage.setItem("diet", obj);
        props.obj({ diet: obj });
    }, [obj]);

    const dietOptions = ["Vegan", "Vegetarian", "Omnivorous"]; // Array of options

    return (
        <div id="dietContainer" className="dropdownContainer">
            <h3 className={classes.h3}>What diet are you following?</h3>
            <Dropdown text="Select diet..." options={dietOptions} settingFunction={setObj} selectedOption={obj} />
        </div>
    );
}

export default Diet;