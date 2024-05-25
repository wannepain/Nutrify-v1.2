import classes from "./dropdown.module.css";
import { useEffect, useState } from "react";

function Dropdown(props) {
    const [selectedOption, setSelectedOption] = useState("");
    const [wantToSelect, setWantToSelect] = useState(false);
    const [options, setOptions] = useState([]);

    useEffect(() => {
        props.settingFunction(selectedOption.toLocaleLowerCase())
        // props.obj({ diet: selectedOption.toLocaleLowerCase() });
    }, [selectedOption]);
    
    useEffect(() => {
        const optionsArray = props.options.split(",");
        setOptions(optionsArray);
    }, [props.options]);

    function handleClick() {
        setWantToSelect(!wantToSelect);
    }

    function handleSelect(option) {
        setSelectedOption(option);
        setWantToSelect(false);
    }

    return (
        <div className={classes.dropDownContainer}>
            <button type="button" className={classes.mainBtn} onClick={handleClick}>
                {selectedOption === "" ? props.text : selectedOption}
            </button>
            {wantToSelect && (
                <div className={classes.optionsContainer}>
                    {options.map((option, index) => (
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
