import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import classes from "./authentication.module.css";
import { useEffect, useState } from "react";
import caretLeft from "./../../../public/caret-left.svg";

function SignUp1(props) {
    const [values, setValues] = useState({ username: "", password: "", passwordCheck: "" });
    const [error, setError] = useState("");
    const [show, setShow] = useState({ password: false, passwordCheck: false });
    const navigate = useNavigate();
    const location = useLocation();
    const showSrc = "./../../public/eye.svg";
    const hideSrc = "./../../public/eye-slash.svg";

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

    function handleShowPassword(event) {
        const { name } = event.target.dataset;
        setShow(prevShow => ({ ...prevShow, [name]: !prevShow[name] }));
    }

    return (
        <div className={classes.motherDiv}>
            <Link className={classes.logo} to="/"><h2>Nutrify</h2></Link>
            <h1 className={classes.title}>Log In or Sign up </h1>
            <form className={classes.form} onSubmit={handleContinue}>
                <div className={classes.inputContainer}>
                    <div className={classes.labelContainer}>
                        <label htmlFor="username" className={classes.h3}>Your username:</label>
                        <input
                            name='username'
                            className={`${classes.topInput} ${classes.input}`}
                            type="text"
                            placeholder="Username"
                            value={values.username}
                            onChange={handleChange}
                            autoComplete='username'
                        />
                    </div>
                    <div className={classes.labelContainer}>
                        <label htmlFor="password" className={classes.h3}>Your password:</label>
                        <input
                            name='password'
                            className={`${classes.middleInput} ${classes.input}`}
                            type={show.password ? "text" : "password"}
                            placeholder="Password"
                            value={values.password}
                            onChange={handleChange}
                            autoComplete='new-password'
                        />
                        <h3 className={classes.showPassword}>
                            <img 
                                src={show.password ? hideSrc : showSrc} 
                                data-name="password"
                                onClick={handleShowPassword}
                                alt="Show/Hide Password"
                            />
                        </h3>
                    </div>
                    <div className={classes.labelContainer}>
                        <label htmlFor="passwordCheck" className={classes.h3}>Your password again:</label>
                        <input
                            name='passwordCheck'
                            className={`${classes.bottomInput} ${classes.input}`}
                            type={show.passwordCheck ? "text" : "password"}
                            placeholder="Confirm Password"
                            value={values.passwordCheck}
                            onChange={handleChange}
                            autoComplete='new-password'
                        />
                        <h3 className={classes.showPassword}>
                            <img 
                                src={show.passwordCheck ? hideSrc : showSrc} 
                                data-name="passwordCheck"
                                onClick={handleShowPassword}
                                alt="Show/Hide Password"
                            />
                        </h3>
                    </div>
                </div>
                {error && <p className={classes.error}>{error}</p>}
                <button type="submit" className={classes.formBtn}>Continue</button>
            </form>
            <p className={classes.p}>By proceeding you agree to the <Link>terms of use</Link> and <Link>privacy policy</Link></p>
            <p className={classes.p}>Already have a Nutrify Account? <Link to={'/login'} className={classes.inlineLink}>Log in</Link></p>
        </div>
    );
}

export default SignUp1;
