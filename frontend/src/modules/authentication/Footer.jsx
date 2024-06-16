import { Link } from "react-router-dom";
import classes from "./footer.module.css";

function Footer() {
    return(
        <div className={classes.motherDiv}>
            <div className={classes.logoContainer}>
                {/* logo here: */}
                <img src="nutrify.svg" alt="Nutrify" className={classes.logo}/>
                {/* slogan here */}
                <h2 className={classes.slogan}>Lorem ipsum dolor sit amet</h2>
            </div>
            <div className={classes.inline}>
                <div className={classes.div}>
                    <h3 className={classes.divTitle}>Usefull:</h3>
                    <ul className={classes.ul}>
                        <li className={classes.li}>
                            <Link>Login</Link>
                        </li>
                        <li className={classes.li}>
                            <Link>Info</Link>
                        </li>
                        <li className={classes.li}>
                            <Link>Home</Link>
                        </li>
                    </ul>
                </div>
                <div className={classes.div}>
                    <h3 className={classes.divTitle}>Social:</h3>
                    <ul className={classes.ul}>
                        <li className={classes.li}>
                            <a href="instagram link">Instagram</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer;