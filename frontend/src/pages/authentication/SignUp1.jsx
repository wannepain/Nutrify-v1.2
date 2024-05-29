import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import classes from "./authentication.module.css";
import { useEffect, useState } from "react";
import caretLeft from "./../../../public/caret-left.svg";

function SignUp1(props) {
    const [values, setValues] = useState({ username: "", password: "", passwordCheck: "" });
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const savedValues = JSON.parse(localStorage.getItem("signupValues"));
        if (savedValues) {
            setValues(savedValues);
        }
    }, []);

    function handleChange(event) {
        const { name, value } = event.target;
        setValues(prevState => ({ ...prevState, [name]: value }));
    }

    async function handleContinue(event) {
        event.preventDefault();
        setError("");
        const { username, password, passwordCheck } = values;
        if (username === "" || password === "" || passwordCheck === "") {
            setError("All fields must be filled");
        } else if (password !== passwordCheck) {
            setError("Passwords don't match");
        } else {
            try {
                const result = await axios.post("http://localhost:3000/check", { "username": username });
                if (result.data.status === 200) {
                    setError("Username already exists");
                } else {
                    localStorage.setItem("signupValues", JSON.stringify(values));
                    navigate("nutrition", { state: { ...values } });
                }
            } catch (error) {
                setError("An error occurred. Please try again.");
            }
        }
    }

    return (
        <div>
            <Link className={classes.back} to="/"><h2><img src={caretLeft} alt="Back" className={classes.backIcon} /> Go back</h2></Link>
            <form className={classes.form} onSubmit={handleContinue}>
                <h1 className={classes.h1}>Sign up</h1>
                <div className={classes.inputContainer}>
                    <input
                        name='username'
                        className={`${classes.topInput} ${classes.input}`}
                        type="text"
                        placeholder="Username"
                        value={values.username}
                        onChange={handleChange}
                        autoComplete='username'
                    />
                    <input
                        name='password'
                        className={`${classes.middleInput} ${classes.input}`}
                        type="password"
                        placeholder="Password"
                        value={values.password}
                        onChange={handleChange}
                        autoComplete='new-password'
                    />
                    <input
                        name='passwordCheck'
                        className={`${classes.bottomInput} ${classes.input}`}
                        type="password"
                        placeholder="Confirm Password"
                        value={values.passwordCheck}
                        onChange={handleChange}
                        autoComplete='new-password'
                    />
                </div>
                {error && <p className={classes.error}>{error}</p>}
                <button type="submit" className={classes.formBtn}>Continue</button>
            </form>
        </div>
    );
}

export default SignUp1;
