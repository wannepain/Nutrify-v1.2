import { Link } from "react-router-dom";
import classes from "./addrecipe.module.css";

function AddRecipe2() {
    return(
        <div className={classes.motherDiv}>
            <Link to=".."relative="route" className={classes.returnLink}>Go back</Link>
            <h1>Hello from AddRecipe2</h1>
            <Link to="/home/add/2" className={classes.continueLink}>Continue</Link>
        </div>
        
    )
}

export default AddRecipe2;