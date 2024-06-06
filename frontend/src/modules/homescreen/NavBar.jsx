import { useEffect, useState } from "react";
import classes from "./navbar.module.css";
import { Link, useLocation } from "react-router-dom";

function NavBar(props) {
    const location = useLocation()
    const [currentPage, setCurrentPage] = useState(""); 
    
    useEffect(() => {
      if (location.pathname === "/home") {
        setCurrentPage("home")
      } else {
        setCurrentPage("add")
      }
        
    }, [location])
    
    
    return (
        <div>
            <div className={`${classes.navbar} ${classes.hidden}`}>
                <ul className={classes.container}>
                    <li className={classes.imgContainer}>
                        <img src="/public/nutrify.svg" alt="nutrify" className={classes.nutrifyLogo} />
                    </li>
                    <li className={classes.linkContainer}>
                        <Link to="/home" className={`${currentPage === "home"? classes.currentLink: ""} ${currentPage === "home"? classes.disabled: ""}`}>Home</Link>
                        <Link to="add" className={`${currentPage === "add"? classes.currentLink: ""} ${currentPage === "add"? classes.disabled: ""}`}>Add Recipe</Link>
                    </li>
                </ul>
            </div>
            <footer className={classes.phoneNavBar}>
                <ul className={classes.phoneContainer}>
                    <li>
                        <Link to="/home" className={`${classes.iconBtn} ${currentPage === "home"? classes.disabled: ""}`}>
                            <img src="/home_icon.svg" alt="Home" className={currentPage === "home"? classes.currentIcon:""}/>
                        </Link>
                    </li>
                    <li>
                        <Link to="add" className={`${classes.iconBtn} ${currentPage === "add"? classes.disabled: ""}`}>
                            <img src="/add_recipe_icon.svg" alt="Add recipe" className={currentPage === "add"? classes.currentIcon:""}/>
                        </Link>
                    </li>
                </ul>
            </footer>
        </div>
    );
}

export default NavBar;
