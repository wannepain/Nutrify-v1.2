import axios from "axios";
import classes from "./welcome.module.css";
import Navbar from "../../modules/authentication/NavBar";
import {Link, useLoaderData, useNavigate} from "react-router-dom";

function Welcome(props) {
    const isTokenValid = useLoaderData();
    const navigate = useNavigate;
    return (
        <div className={classes.motherDiv}>
            <Navbar />
            <div className={classes.mainContainer}>
                <div className={classes.textContainer}>
                    <h1 className={classes.title}>Lorem ipsum dolor sit amet</h1>
                    <div className={classes.inlineTxtBtns}>
                        <p className={classes.mainTxt}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                        <div className={classes.btnsDiv}>
                            <Link className={classes.trailer}>Learn more</Link>
                            <Link className={classes.try}>Try for free</Link>
                        </div>
                    </div>
                </div>
                <div className={classes.imageContainer}>

                </div>
            </div>
            <div className={classes.advantagesContainer}>
                <div className={classes.mainAdvantageDiv}>
                    <h1 className={classes.mainAdvTitle}>Lorem ipsum dolor sit amet</h1>
                    <p className={classes.mainAdvText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className={classes.advantageDiv}>
                    <div className={classes.inlineAdvantageImgs}>
                        <img src="/placeholder_image.jpg" alt="Image" className={classes.advImg}/>
                        <img src="/placeholder_image.jpg" alt="Image" className={classes.advImg}/>
                        <img src="/placeholder_image.jpg" alt="Image" className={classes.advImg}/>
                        <img src="/placeholder_image.jpg" alt="Image" className={classes.advImg}/>
                        <img src="/placeholder_image.jpg" alt="Image" className={classes.advImg}/>
                    </div>
                    <h3 className={classes.advTitle}>Lorem ipsum dolor sit amet</h3>
                    <p className={classes.advText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
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