import {Outlet} from "react-router-dom";
import { useLoaderData, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

function AuthContainer(props) {
    const {username, isValid} = useLoaderData();
    const navigate = useNavigate();

    useEffect(() => {
      if (isValid) {
        localStorage.setItem("username_password", {username: username});
        navigate("/home");
      }
    }, [isValid])
    

    return <Outlet />
}

export default AuthContainer;

export async function Loader() { //check if token is still valid, if it is, log in automatically
    const token = localStorage.getItem("jwtToken");
    const data  = await getUsername(token);
    return data;
}

async function getUsername(token) {
    let username = null;
    let isValid = false;

    try {
        const result = await axios.post("http://localhost:3000/check/token", null, {
            headers: { "authorization": token }
        });
        if (result.status === 200) {
            const result2 = await axios.post("http://localhost:3000/getUsername", { id: result.data.id }); // Assuming the ID comes from the result of the first request
            if (result2.status === 200) {
                isValid = true;
                username = result2.data.username;
            }
        }
    } catch (error) {
        throw error;
    }

    return { username: username, isValid: isValid};
}