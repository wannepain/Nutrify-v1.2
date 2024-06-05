import classes from "./navbar.module.css";
import { Link } from "react-router-dom";

function NavBar(props) {
    return (
        <div>
            <div className={`${classes.navbar} ${classes.hidden}`}>
                <ul className={classes.container}>
                    <li className={classes.imgContainer}><img src="./../../../public/nutrify.svg" alt="nutrify" className={classes.nutrifyLogo}/></li>
                    <li className={classes.linkContainer}>
                        <Link to="/home">Home</Link>
                        <Link to="add">Add Recipe</Link>
                    </li>
                </ul>
            </div>
             <footer className={classes.phoneNavBar}>
                 <ul className={classes.phoneContainer}>
                     <li>
                         <Link to="/home" className={classes.iconBtn}>
                             <img src="/home_icon.svg" alt="Home" />
                         </Link>
                     </li>
                     <li>
                         <Link to="add" className={classes.iconBtn}>
                             <img src="/add_recipe_icon.svg" alt="Add recipe" />
                         </Link>
                     </li>
                 </ul>
             </footer>
         </div>
    );
}

export default NavBar;
