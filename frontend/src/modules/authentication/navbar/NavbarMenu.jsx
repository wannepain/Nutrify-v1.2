import { useState } from "react";
import classes from "./NavbarMenu.module.css";
import { Link } from "react-router-dom";

function NavbarMenu(props) {
    const [isOpen, setIsOpen] = useState(false);
    const [currentImg, setCurrentImg] = useState("menu_icon.svg");

    function handleMenuClick() {
        if (!isOpen) {
            setIsOpen(!isOpen);
            setCurrentImg("close_icon.svg");
        } else {
            setIsOpen(!isOpen);
            setCurrentImg("menu_icon.svg");
        }
    }

    function handleClick() {
        
    }
    
    return (
        <>
            <div className={classes.motherDiv}>
                <button onClick={handleMenuClick} className={classes.mainBtn}><img src={currentImg} alt="open" /></button>
                <div className={isOpen? classes.dropdown: classes.hiden}>
                    <a href="" onClick={handleClick}>Features</a>
                    <a href="" onClick={handleClick}>Contact</a>

                    <Link className={classes.signup}>Sign up</Link>
                    <Link className={classes.login}>Log in</Link>
                </div>
            </div>
        </>
    )
}

export default NavbarMenu;