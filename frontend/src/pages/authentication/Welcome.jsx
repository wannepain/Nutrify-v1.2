import classes from "./welcome.module.css";
import {Link} from "react-router-dom";

function Welcome(props) {
    return(
        <div className={classes.body}>
            <div>
            <h1>Welcome to nutrify</h1>
            <div className={classes.containerInline}>
                <Link className={classes.btn} to="signup">Sign Up</Link>
                <Link className={classes.btn} to="login">Log in</Link>
            </div>
            </div>
        </div>
    )
}

export default Welcome;