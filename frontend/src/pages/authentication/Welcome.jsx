import axios from "axios";
import classes from "./welcome.module.css";
import Navbar from "../../modules/authentication/NavBar";
import {Link, useLoaderData, useNavigate} from "react-router-dom";
import Footer from "../../modules/authentication/Footer";

function Welcome(props) {
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
                    {/* Insert promotional video */}
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
            <Footer />
        </div>
    )
}

export default Welcome;
