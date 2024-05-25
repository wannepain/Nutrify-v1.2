import React, { useState, useEffect } from "react";
import classes from "./diet.module.css";
import Dropdown from "../common/Dropdown";

function Diet(props) {
    const [obj, setObj] = useState("");

    useEffect(()=>{
        props.obj({diet: obj});
    }, [obj])

    return (
        <div id="dietContainer" className="dropdownContainer">
            <h3>What diet are you following?</h3>
            <Dropdown text="Select diet..." options="Vegan,Vegetarian,Omnivorous" settingFunction={setObj}/>
        </div>
    );
}

export default Diet;
