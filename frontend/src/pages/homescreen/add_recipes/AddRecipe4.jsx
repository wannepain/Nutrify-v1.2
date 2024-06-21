// import { Link } from "react-router-dom";
// import classes from "./addrecipe.module.css";
// import Select from "../../../modules/homescreen/add_recipes/Select";
// import Question from "../../../modules/homescreen/add_recipes/Question";
// import {useEffect, useState} from "react";

// function AddRecipe4() {
//     // procedure, courses, handle submit
//     const [selectedCourses, setSelectedCourses] =  useState([]);
//     const [procedure, setProcedure] = useState("");

//     useEffect(() => {
//       if (procedure !== "") {
//         localStorage.setItem("procedure", procedure)
//       }
//     }, [procedure])

//     useEffect(() => {
//       if (selectedCourses!== null || selectedCourses.length !== 0) {
//         localStorage.setItem("courses", JSON.stringify(selectedCourses));
//       }
//     }, [selectedCourses])

//     useEffect(() => {
//         const savedCourse = JSON.parse(localStorage.getItem("course"));
//         const savedProcedure = localStorage.getItem("procedure");
//         if (savedCourse.length !== 0) {
//             setSelectedCourses(savedCourse);
//         }
//         if (savedProcedure !== null) {
//             setProcedure(savedProcedure)
//         }
//     }, [])
    
    
    


//     const optionsArray = [
//         "First course", "Main course", "Dessert"
//     ]
//     const questionTexts = {
//         procedure:{
//             title: "Procedure",
//             text:"Enter the 'How' of making your recipe. Make it simple and understandable"
//         }, 
//         courses:{
//             title:"Courses",
//             text:"Select one course that fits your recipe best."
//         }
//     }

//     function handleChange(event) {
//         const value = event.currentTarget.value;

//         setProcedure(value);
//     }

//     return (
//         <div className={classes.motherDiv}>
//             <Link to="/home/add/2" className={classes.returnLink}>Go back</Link>
//             <div className={classes.inputContainer}>
//                 <label htmlFor="procedure" className={classes.inlineLabel}>
//                     Procedure:
//                     <Question title={questionTexts.procedure.title} text={questionTexts.procedure.text}/>
//                 </label>
//                 <textarea name="procedure" className={classes.textarea} onChange={handleChange} value={procedure}></textarea>
//             </div>
//             <div>
//                 <label htmlFor="courses" className={classes.inlineLabel}>
//                     Select courses:
//                     <Question title={questionTexts.courses.title} text={questionTexts.courses.text}/>
//                 </label>
//                 <Select options={optionsArray} setSelected={setSelectedCourses} name="courses" onlyOption={true} selected={selectedCourses}/>
//             </div>
//             <button type="button" className={classes.continueLink}>Submit</button>
//         </div>
//     )
// } 

// export default AddRecipe4;

import { Link, useNavigate } from "react-router-dom";
import classes from "./addrecipe.module.css";
import Select from "../../../modules/homescreen/add_recipes/Select";
import Question from "../../../modules/homescreen/add_recipes/Question";
import { useEffect, useState } from "react";

function AddRecipe4(props) {
    const [selectedCourses, setSelectedCourses] = useState([]);
    const [procedure, setProcedure] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate()

    useEffect(() => {
        if (procedure !== "") {
            localStorage.setItem("procedure", procedure);
        }
    }, [procedure]);

    useEffect(() => {
        if (selectedCourses !== null && selectedCourses.length > 0) {
            localStorage.setItem("courses", JSON.stringify(selectedCourses));
        }
    }, [selectedCourses]);

    useEffect(() => {
        const savedCourses = JSON.parse(localStorage.getItem("courses"));
        const savedProcedure = localStorage.getItem("procedure");

        if (savedCourses && savedCourses.length > 0) {
            setSelectedCourses(savedCourses);
        }
        if (savedProcedure !== null) {
            setProcedure(savedProcedure);
        }
    }, []);

    const optionsArray = ["First course", "Main course", "Dessert"];

    const questionTexts = {
        procedure: {
            title: "Procedure",
            text: "Enter the 'How' of making your recipe. Make it simple and understandable"
        },
        courses: {
            title: "Courses",
            text: "Select one course that fits your recipe best."
        }
    };

    function handleChange(event) {
        const value = event.currentTarget.value;
        setProcedure(value);
    }

    async function handleSubmit(event) {
        event.preventDefault();
        if (selectedCourses.length === 0 || procedure === "") {
            if (procedure === "") {
                setError("Please fill in the procedure field");
            } else {
                setError("Please select the most fitting course");
            }
        } else {
            const result = await props.submit();
            console.log(result);
            if (result === 200) {
                navigate("/home");
            } else if (result === 409) {
                setError("Change the recipe's title, this one is already taken");
            } else {
                setError("Server error occurred, please try again later");
            }
        }
    }    

    return (
        <div className={classes.motherDiv}>
            <Link to="/home/add/2" className={classes.returnLink}>Go back</Link>
            <div className={classes.inputContainer}>
                <label htmlFor="procedure" className={classes.inlineLabel}>
                    Procedure:
                    <Question title={questionTexts.procedure.title} text={questionTexts.procedure.text} />
                </label>
                <textarea
                    name="procedure"
                    className={classes.textarea}
                    onChange={handleChange}
                    value={procedure}
                ></textarea>
            </div>
            <div>
                <label htmlFor="courses" className={classes.inlineLabel}>
                    Select courses:
                    <Question title={questionTexts.courses.title} text={questionTexts.courses.text} />
                </label>
                <Select
                    options={optionsArray}
                    setSelected={setSelectedCourses}
                    name="courses"
                    onlyOption={true}
                    selected={selectedCourses}
                />
            </div>
            {error !== "" && <p className={classes.error}>{error}</p>}
            <button type="button" className={classes.continueLink} onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default AddRecipe4;

