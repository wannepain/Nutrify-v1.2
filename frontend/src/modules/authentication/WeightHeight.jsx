import React, { useState, useEffect } from "react";
import classes from "./weightheigth.module.css";

function WeightHeight(props) {
    const [obj, setObj] = useState({
        weight: localStorage.getItem("weight") || "",
        height: localStorage.getItem("height") || ""
    });

    useEffect(() => {
        localStorage.setItem("weight", obj.weight);
        localStorage.setItem("height", obj.height);
        props.obj(obj);
    }, [obj]);

    function handleChange(event) {
        const { name, value } = event.target;
        const updatedObj = { ...obj, [name]: value };
        setObj(updatedObj);
    }

    return (
        <div className={classes.mainContainer}>
            <div className={classes.weightContainer}>
                <label htmlFor="weight" className={classes.h3}>Your weight:</label>
                <input
                    type="number"
                    name="weight"
                    className={classes.input}
                    placeholder="75kg"
                    onChange={handleChange}
                    value={obj.weight}
                />
            </div>
            <div className={classes.heightContainer}>
                <label htmlFor="height" className={classes.h3}>Your height:</label>
                <input
                    type="number"
                    name="height"
                    className={classes.input}
                    placeholder="180cm"
                    onChange={handleChange}
                    value={obj.height}
                />
            </div>
        </div>
    );
}

export default WeightHeight;
