import { Outlet, useLocation } from "react-router-dom";
import NavBar from "./../../modules/homescreen/NavBar";
import classes from "./homescreen.module.css";

function Homescreen(props) {
    const location = useLocation(); 
    const isAddPage = location.pathname === "/home/add" || location.pathname === "/home/add/1" || location.pathname === "/home/add/2" || location.pathname === "/home/add/3";
    
    const divStyle = isAddPage ?  classes.motherDiv: "";

    return (
        <div className={divStyle}>
            <NavBar/>
            <Outlet/>
        </div>
    )
}

export default Homescreen;
