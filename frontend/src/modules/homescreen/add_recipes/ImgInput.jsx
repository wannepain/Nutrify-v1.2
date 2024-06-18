import { useEffect, useState } from "react";
import classes from "./imginput.module.css";

function ImgInput(props) {
    const [addedImg, setAddedImg] = useState(null);

    useEffect(() => {
        const savedImg = JSON.parse(localStorage.getItem("recipe_img"));
        const imgBase64 = savedImg.base64Data;
        if (imgBase64) {
            setAddedImg(imgBase64)
        }
    }, [])
    

    function handleShowInput(event) {
        event.preventDefault();
        document.querySelector(`.${classes.imgInput}`).click();
    }

    function handleChange(event) {
        const file = event.target.files[0]; // Get the first selected file
        const reader = new FileReader();

        reader.onload = function(event) {
            const binaryData = event.target.result; // Get the binary data
            const base64Data = btoa(
                new Uint8Array(binaryData).reduce((data, byte) => data + String.fromCharCode(byte), '')
            );
            props.savingFunction({ file: file, binaryData: binaryData, base64Data: base64Data });
            setAddedImg(base64Data); // Set the selected image as base64 encoded data URL for display
        };

        if (file) {
            reader.readAsArrayBuffer(file); // Read the selected file as binary data
        }
    }

    return (
        <div className={classes.imgInputDiv}>
            {addedImg === null && (
                <h1 className={classes.title} onClick={handleShowInput}>
                    Add Image
                </h1>
            )}
            {addedImg !== null && (
                <img
                    src={`data:image/jpeg;base64,${addedImg}`}
                    alt="recipe image"
                    onClick={handleShowInput}
                />
            )}
            <input
                type="file"
                name="rec_img"
                className={classes.imgInput}
                onChange={handleChange}
                style={{ display: 'none' }} // Hide the file input element
            />
        </div>
    );
}

export default ImgInput;
