import { Link } from "react-router-dom";
import classes from "./addrecipe.module.css";

function AddRecipe3() {
    return(
        <div className={classes.motherDiv}>
            <Link to="/home/add/1" className={classes.returnLink}>Go back</Link>
            <h1>Hello from AddRecipe3</h1>
            <Link to="/home/add/3" className={classes.continueLink}>Continue</Link>
        </div>
        
    )
}

export default AddRecipe3;