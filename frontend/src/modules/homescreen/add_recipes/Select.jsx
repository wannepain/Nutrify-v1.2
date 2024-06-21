import { useState, useEffect } from "react";
import classes from "./select.module.css";

function Select(props) {
    const oneOption = props.onlyOption;
    const [selectedOptions, setSelectedOptions] = useState(props.selected || []);
    const arrayOptions = props.options;

    useEffect(() => {
        props.setSelected(selectedOptions);
    }, [selectedOptions, props.setSelected]);

    useEffect(() => {
        if (props.selected !== null && props.selected !== undefined) {
            setSelectedOptions(props.selected);
        }
    }, [props.selected]);

    function handleClick(event) {
        const option = event.target.dataset.value;
        if (oneOption) {
            setSelectedOptions([option]);
        } else {
            const isSelected = checkIfIsSelected(option);
            if (isSelected) {
                const newArray = selectedOptions.filter(selectedOption => selectedOption !== option);
                setSelectedOptions(newArray);
            } else {
                setSelectedOptions((prevData) => [...prevData, option]);
            }
        }
    }

    function checkIfIsSelected(currentValue) {
        const optionValue = currentValue.toLowerCase();
        return selectedOptions.includes(optionValue);
    }

    return (
        <div className={classes.container}>
            {arrayOptions.map((currentValue, index) => {
                const isSelected = checkIfIsSelected(currentValue.toLowerCase());
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
