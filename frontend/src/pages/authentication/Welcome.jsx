import axios from "axios";
import classes from "./welcome.module.css";
import {Link, useLoaderData, useNavigate} from "react-router-dom";

function Welcome(props) {
    const isTokenValid = useLoaderData();
    const navigate = useNavigate;
    if (isTokenValid) {
        navigate("/home")
    } else{
        console.log(isTokenValid);
    }

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

export async function isTokenValid() {
    const token = localStorage.getItem("jwtToken");

    if (!token) {
        console.error("No token found");
        return false;
    }

    try {
        const result = await axios.post("http://localhost:3000/check/token", null, {
            headers: {
                "authorization": token
            }
        });

        if (result.status === 200) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.error("Error validating token:", error);
        return false;
    }
}