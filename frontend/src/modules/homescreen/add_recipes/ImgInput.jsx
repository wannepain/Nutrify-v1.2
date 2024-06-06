import { useState } from "react";
import classes from "./imginput.module.css";

function ImgInput(params) {
    const [addedImg, setAddedImg] = useState(null);

    function handleShowInput(event) {
        event.preventDefault();
        document.querySelector(`.${classes.imgInput}`).click();
    }

    function handleChange(event) {
        const file = event.target.files[0]; // Get the first selected file
        const reader = new FileReader();

        reader.onload = function(event) {
            const imageDataUrl = event.target.result; // Get the base64 encoded data URL
            props.savingFunction({file:file, imageDataUrl: imageDataUrl});
            setAddedImg(imageDataUrl); // Set the selected image as base64 encoded data
        };

        if (file) {
            reader.readAsDataURL(file); // Read the selected file as a data URL
        }
    }

    return(
        <div className={classes.imgInputDiv}>
            <img 
                src={addedImg !== null ? addedImg : "/add_recipe_icon.svg"} 
                alt="recipe image" onClick={handleShowInput}
                className={addedImg !== null? null : classes.svgAddImage}
            />
            {/* <button type="button" id="showFileInput" onClick={handleShowInput}></button> */}
            <input type="file" name="rec_img" className={classes.imgInput} onChange={handleChange}/>
        </div>
    )
}

export default ImgInput;