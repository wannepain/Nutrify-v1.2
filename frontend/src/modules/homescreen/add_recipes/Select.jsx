import { useState, useEffect } from "react";
import classes from "./select.module.css";

function Select(props) {
    const [selectedOptions, setSelectedOptions] = useState([]);
    const arrayOptions = props.options;
    
    useEffect(() => {
      props.setSelected(selectedOptions)
    }, [selectedOptions])
    
    

    function handleClick(event) {
        const option = event.target.dataset.value;
        const isSelected = checkIfIsSelected(option);
        if (isSelected) {
            const newArray = selectedOptions.filter((selectedOption)=>{
                return selectedOption !== option
            });
            setSelectedOptions(newArray);
        } else {
            setSelectedOptions((prevData) => [...prevData, option]);
        }
    }

    function checkIfIsSelected(currentValue) {
        const optionValue = currentValue.toLowerCase();
        return selectedOptions.includes(optionValue);
    }

    return (
        <div className={classes.container}>
            {arrayOptions.map((currentValue, index) => {
                const isSelected = checkIfIsSelected(currentValue);

                return (
                    <button
                        type="button"
                        key={index}
                        className={`${classes.option} ${isSelected ? classes.selected : ''}`}
                        data-value={currentValue.toLowerCase()}
                        onClick={handleClick}
                    >
                        {currentValue}
                    </button>
                );
            })}
        </div>
    );
}

export default Select;
