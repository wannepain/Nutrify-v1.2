import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";
import NavbarMenu from "./navbar/NavbarMenu";


function Navbar() {
    function handleClick(event) {
        event.preventDefault()
    }
    
    return(
        <>
            <div className={classes.blurredBackground}></div>
            <div className={classes.motherDiv}>
                <div className={classes.mobile}>
                    <h3 className={classes.phoneNavTitle}>Nutrify</h3>
                    <NavbarMenu/>
                </div>
                <div className={classes.pc}>
                    <div className={classes.iconContainer}>
                        {/* Icon content */}
                        <Link className={classes.logo}>Nutrify</Link>
                    </div>
                    <div className={classes.optionsContainer}>
                        {/* Navigation options */}
                        <a href="" onClick={handleClick}>Features</a>
                        <a href="" onClick={handleClick}>Contact</a>
                    </div>
                    <div className={classes.authContainer}>
                        <Link to="signup" className={classes.navBtns}>Sign up</Link>
                        <Link to="login" className={classes.navBtnl}>Login</Link>
                    </div>
                </div>
            </div>
            <div className={classes.marginDiv}></div>
        </>
    )
}

export default Navbar;
