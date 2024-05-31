// import classes from "./dropdown.module.css";
// import { useEffect, useState } from "react";

// function Dropdown(props) {
//     const [selectedOption, setSelectedOption] = useState("");
//     const [wantToSelect, setWantToSelect] = useState(false);
//     const [options, setOptions] = useState([]);

//     useEffect(() => {
//         props.settingFunction(selectedOption.toLocaleLowerCase())
//         // props.obj({ diet: selectedOption.toLocaleLowerCase() });
//     }, [selectedOption]);

//     useEffect(()=>{
//         if (props.selectedOption) {
//             console.log(props.selectedOption);
//             setSelectedOption(props.selectedOption);
//         };
//     }, []);

//     useEffect(() => {
//         const optionsArray = props.options.split(",");
//         setOptions(optionsArray);
//     }, [props.options]);

//     function handleClick() {
//         setWantToSelect(!wantToSelect);
//     }

//     function handleSelect(option) {
//         setSelectedOption(option);
//         setWantToSelect(false);
//     }

//     return (
//         <div className={classes.dropDownContainer}>
//             <button type="button" className={classes.mainBtn} onClick={handleClick}>
//                 {selectedOption === "" ? props.text : selectedOption}
//             </button>
//             {wantToSelect && (
//                 <div className={classes.optionsContainer}>
//                     {options.map((option, index) => (
//                         <button key={index} type="button" className={classes.middleBtn} onClick={() => handleSelect(option)}>
//                             {option}
//                         </button>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// }

// export default Dropdown;


import classes from "./dropdown.module.css";
import React, { useState, useEffect } from "react";

function Dropdown(props) {
    const [wantToSelect, setWantToSelect] = useState(false);

    function handleClick() {
        setWantToSelect(!wantToSelect);
    }

    function handleSelect(option) {
        props.settingFunction(option); // Pass the selected option directly
        setWantToSelect(false);
    }

    return (
        <div className={classes.dropDownContainer}>
            <button type="button" className={classes.mainBtn} onClick={handleClick}>
                {props.selectedOption === "" ? props.text : props.selectedOption} {/* Use props.selectedOption */}
            </button>
            {wantToSelect && (
                <div className={classes.optionsContainer}>
                    {props.options.map((option, index) => ( // Use props.options directly
                        <button key={index} type="button" className={classes.middleBtn} onClick={() => handleSelect(option)}>
                            {option}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Dropdown;
