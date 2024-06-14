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
            <div className={classes.main}>
                <h1 className={classes.mainHeading}>Welcome to nutrify</h1>
                <div className={classes.sideBySideDiv}>

                    <div className={classes.infoContainer}>
                        <h1 className={classes.heading}>Lorem ipsum dolor sit amet</h1>
                        <p className={classes.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Proin sagittis nisl rhoncus mattis rhoncus urna. Sed blandit libero volutpat sed cras ornare arcu. Vitae proin sagittis nisl rhoncus mattis rhoncus urna. Duis tristique sollicitudin nibh sit amet commodo nulla facilisi. Ipsum consequat nisl vel pretium lectus. Tristique senectus et netus et malesuada fames ac. Faucibus purus in massa tempor nec feugiat nisl. Dui faucibus in ornare quam viverra orci sagittis. Leo a diam sollicitudin tempor id eu nisl. Etiam erat velit scelerisque in dictum non consectetur. Sagittis nisl rhoncus mattis rhoncus. Tortor at risus viverra adipiscing at in tellus integer. Neque gravida in fermentum et sollicitudin. Massa id neque aliquam vestibulum morbi blandit cursus. Lobortis elementum nibh tellus molestie nunc non blandit. Nulla pharetra diam sit amet nisl suscipit. Massa sed elementum tempus egestas sed sed risus.</p>
                    </div>
                    <div className={classes.sign}>
                        <h1 className={classes.heading}>Lorem ipsum dolor sit amet</h1>
                        <div className={classes.containerInline}>
                            <Link className={classes.btn} to="signup">Sign Up</Link>
                            <Link className={classes.btn} to="login">Log in</Link>
                        </div>
                    </div>

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