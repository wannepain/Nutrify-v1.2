import { Link } from "react-router-dom";
import classes from "./addrecipe.module.css";
import Select from "../../../modules/homescreen/add_recipes/Select";
import Question from "../../../modules/homescreen/add_recipes/Question";
import { useState } from "react";

function AddRecipe4() {
    // procedure, courses, handle submit
    const [selectedCourses, setSelectedCourses] =  useState([]);

    const optionsArray = [
        "First course", "Main course", "Dessert"
    ]
    const questionTexts = {
        procedure:{
            title: "Procedure",
            text:"Enter the 'How' of making your recipe. Make it simple and understandable"
        }, 
        courses:{
            title:"Courses",
            text:"Select one course that fits your recipe best."
        }
    }

    return (
        <div className={classes.motherDiv}>
            <Link to="/home/add/2" className={classes.returnLink}>Go back</Link>
            <div className={classes.inputContainer}>
                <label htmlFor="procedure" className={classes.inlineLabel}>
                    Procedure:
                    <Question title={questionTexts.procedure.title} text={questionTexts.procedure.text}/>
                </label>
                <textarea name="procedure" className={classes.textarea}></textarea>
            </div>
            <div>
                <label htmlFor="courses" className={classes.inlineLabel}>
                    Select courses:
                    <Question title={questionTexts.courses.title} text={questionTexts.courses.text}/>
                </label>
                <Select options={optionsArray} setSelected={setSelectedCourses} name="courses" onlyOption={true}/>
            </div>
            <button type="button" className={classes.continueLink}>Submit</button>
        </div>
    )
} 

export default AddRecipe4;
