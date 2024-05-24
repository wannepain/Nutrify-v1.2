import React, { useState } from "react";
import classes from "./weightheigth.module.css"
//frontend\src\modules\authentication\weightheigth.module.css
function WeightHeight(props) {
    const [obj, setObj] = useState({weight: null, height: null});
    
    function handleChange(event) {
        const { name, value } = event.target;
        const updatedObj = { ...obj, [name]: value };
        setObj(updatedObj);
        props.obj(updatedObj);
    }
    
    return (
        <div className={classes.weightHeightContainer}>
            <div className={classes.weightContainer}>
                <label htmlFor="weight">What's your current weight?</label>
                <input type="number" name="weight" id="dietWeight" placeholder="75kg" onChange={handleChange}/>
            </div>
            <div className={classes.heightContainer}>
                <label htmlFor="height">How tall are you?</label>
                <input type="number" name="height" id="dietHeight" placeholder="180cm" onChange={handleChange}/>
            </div>
        </div>
    )
}

export default WeightHeight;