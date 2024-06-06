import { useState } from "react";
import classes from "./question.module.css";
import OutsideAlerter from "../../../utility_components/OutsideAlerter";


function Question(props) {
    const [isOn, setIsOn] = useState(false);

    function handleClick() {
        setIsOn(!isOn);
    }
    return(
        
            <div className={classes.questionContainer}>
                <p className={classes.questionMark} onClick={handleClick}>?</p>
                {isOn && 
                    <div className={classes.background} onClick={handleClick}>
                        <div className={classes.dataContainer}>
                            <h3 className={classes.title}>{props.title?props.title:""}</h3>
                            <p className={classes.text}>{props.text?props.text:""}</p>
                        </div>
                    </div>}
            </div>
    )
}

export default Question;