import { Outlet } from "react-router-dom";
import NavBar from "./../../modules/homescreen/NavBar";

function Homescreen(props) {
    return (
        <div>
            <NavBar/>
            <Outlet/>
        </div>
    )
}

export default Homescreen;