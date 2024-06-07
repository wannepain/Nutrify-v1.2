import { Link } from "react-router-dom";
import classes from "./addrecipe.module.css";

function AddRecipe4() {
    // procedure, courses, handle submit
    return(
        <div className={classes.motherDiv}>
            <Link to="/home/add/2" className={classes.returnLink}>Go back</Link>
            <h1>Hello from AddRecipe4</h1>
        </div>
        
    )
}

export default AddRecipe4;