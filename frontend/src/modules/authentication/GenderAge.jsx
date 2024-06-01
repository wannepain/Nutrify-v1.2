// import React, { useState, useEffect } from "react";
// import classes from "./genderage.module.css";
// import Dropdown from "./../common/Dropdown";

// function GenderAge(props) {
//     const [gender, setGender] = useState(localStorage.getItem("gender"));
//     const [age, setAge] = useState("");
//     const genderOptions = ["male", "female"];

//     useEffect(()=>{
//         localStorage.setItem("gender", gender)
//         props.obj({age: age, gender: gender});
//     }, [age, gender])

//     function handleChange(event) {
//         setAge(event.target.value);
//     }

//     return (
//         <div className={classes.mainContainer}>
//             <div className={classes.genderContainer}>
//                 <h3>What gender are you?</h3>
//                 <Dropdown text="Select gender..." options="male, female" settingFunction={setGender} />
//             </div>
//             <div className={classes.ageContainer}>
//                 <label htmlFor="age" className={classes.h3}>How old are you?</label>
//                 <input type="number" name="age" className={classes.input} placeholder="25" onChange={handleChange} value={age} />
//             </div>
//         </div>
//     );
// }

// export default GenderAge;


import React, { useState, useEffect } from "react";
import classes from "./genderage.module.css";
import Dropdown from "./../common/Dropdown";

function GenderAge(props) {
    const [gender, setGender] = useState(localStorage.getItem("gender") || "");
    const [age, setAge] = useState(localStorage.getItem("age") || "");
    const genderOptions = ["male", "female"];

    useEffect(() => {
        localStorage.setItem("gender", gender);
        localStorage.setItem("age", age);
        props.obj({ age: age, gender: gender });
    }, [age, gender]);

    function handleChange(event) {
        setAge(event.target.value);
    }

    return (
        <div className={classes.mainContainer}>
            <div className={classes.genderContainer}>
                <h3>What gender are you?</h3>
                <Dropdown 
                    text="Select gender..." 
                    options={genderOptions} 
                    settingFunction={setGender} 
                    selectedOption={gender} // Added selectedOption prop
                />
            </div>
            <div className={classes.ageContainer}>
                <label htmlFor="age" className={classes.h3}>How old are you?</label>
                <input 
                    type="number" 
                    name="age" 
                    className={classes.input} 
                    placeholder="25" 
                    onChange={handleChange} 
                    value={age} 
                />
            </div>
        </div>
    );
}

export default GenderAge;
