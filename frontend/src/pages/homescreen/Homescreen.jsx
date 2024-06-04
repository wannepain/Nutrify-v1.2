import { Outlet } from "react-router-dom";
import NavBar from "./../../modules/homescreen/NavBar";

function Homescreen(props) {
    return (
        <div>
            <NavBar/>
            <h1>Hello from homescreen</h1>
            {/* <Outlet/> */}
        </div>
    )
}

export default Homescreen;