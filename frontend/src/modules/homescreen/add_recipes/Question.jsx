import { useState } from "react";
import classes from "./question.module.css";


function Question(props) {
    const [isOn, setIsOn] = useState(false);

    return(
        <div className={classes.questionContainer}>
            <p className={classes.questionMark} onMouseEnter={()=>setIsOn(true)} onMouseLeave={()=>{setIsOn(false)} }>?</p>
            {isOn && 
            <div className={classes.dataContainer} onMouseEnter={()=>setIsOn(true)} onMouseLeave={()=>{setIsOn(false)} }>
                <h3>{props.title?props.title:""}</h3>
                <p>{props.text?props.text:""}</p>
            </div>}
        </div>
    )
}

export default Question;