// import React, { useState, useEffect } from "react";
// import classes from "./diet.module.css";
// import Dropdown from "../common/Dropdown";

// function Diet(props) {
//     const [obj, setObj] = useState("");

//     useEffect(()=>{
//         const savedItem = localStorage.getItem("diet");
//         if(savedItem){
//             console.log(savedItem);
//             setObj(savedItem);
//         }
//     }, [])

//     useEffect(()=>{
//         localStorage.setItem("diet", obj);
//         props.obj({diet: obj});
//     }, [obj])


//     return (
//         <div id="dietContainer" className="dropdownContainer">
//             <h3>What diet are you following?</h3>
//             <Dropdown text="Select diet..." options="Vegan,Vegetarian,Omnivorous" settingFunction={setObj} selectedOption={obj}/>
//         </div>
//     );
// }

// export default Diet;

import React, { useState, useEffect } from "react";
import classes from "./diet.module.css";
import Dropdown from "../common/Dropdown";

function Diet(props) {
    const [obj, setObj] = useState(localStorage.getItem("diet")); // Initialize as null or another suitable value

    // useEffect(() => {
    //     if (savedItem) {
    //         console.log(savedItem);
    //         setObj(savedItem);
    //     }
    // }, []);

    useEffect(() => {
        localStorage.setItem("diet", obj);
        props.obj({ diet: obj });
    }, [obj]);

    const dietOptions = ["Vegan", "Vegetarian", "Omnivorous"]; // Array of options

    return (
        <div id="dietContainer" className="dropdownContainer">
            <h3>What diet are you following?</h3>
            <Dropdown text="Select diet..." options={dietOptions} settingFunction={setObj} selectedOption={obj} />
        </div>
    );
}

export default Diet;