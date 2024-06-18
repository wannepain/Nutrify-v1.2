import { useState, useEffect } from 'react';
import axios from 'axios';
import {Link, useNavigate} from"react-router-dom";

import classes from "./authentication.module.css";

function LogIn(props) {
  const [values, setValues] = useState({ username: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false)
  const navigate = useNavigate();

  const showSrc = "./../../public/eye.svg";
  const hideSrc = "./../../public/eye-slash.svg";

  useEffect(() => {
    const savedValues = JSON.parse(localStorage.getItem("username_password"));
    if (savedValues) {
        setValues(savedValues);
    }
  }, []);
  
  function handleChange(event) {
    const { name, value } = event.target;
    setValues(prevState => ({ ...prevState, [name]: value }));
  }

  const handleLogin = async (event) => {
    event.preventDefault();
    const { username, password } = values;
    if (username === "" || password === "") {
      setError("Username and password mustn't be empty");
    } else {
      localStorage.setItem("username_password", JSON.stringify(values));
      try {
        // Perform login request to the backend using Axios
        const response = await axios.post('http://localhost:3000/login/local', {
          username: username,
          password: password
        });
        console.log(response);
        // Handle successful login, e.g., redirect to another page
        // or store authentication token in local storage
        if (response.status === 200) {
          const token = response.data.token;
          // Store the token in local storage
          localStorage.setItem('jwtToken', token);
          navigate("/home")
        }
      } catch (error) {
        console.error('Login error:', error);
        const err = error.response.status;
        if (err === 401) {
          setError("Incorrect password or username");
        } else {
          setError("Server error, please try again later");
        }
      }
    }
  };

  function handleShowPassword() {
    setShowPassword(!showPassword)
  }
  return (
    <div className={classes.motherDiv}>
      <Link className={classes.logo} to="/"><h2>Nutrify </h2></Link>
      <h1 className={classes.title}>Log In or Sign up </h1>
      <form className={classes.form}>
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
              className={`${classes.bottomInput} ${classes.input}`}
              type={showPassword ? "text":"password"}
              placeholder="Password"
              value={values.password}
              onChange={handleChange}
              autoComplete='current-password'
            />
              <h3 className={classes.showPassword}>
                <img 
                    src={showPassword ? hideSrc : showSrc} 
                    data-name="password"
                    onClick={handleShowPassword}
                    alt="Show/Hide Password"
                />
              </h3>
          </div>
        </div>
        {!error ? null : <p className={classes.error}>{error}</p>}
        <button className={classes.formBtn} onClick={handleLogin}>Login</button>
      </form>
      <p className={classes.p}>By proceeding you agree to the <Link>terms of use</Link> and <Link>privacy policy</Link></p>
      <p className={classes.p}>No Nutrify account? <Link to={'/signup'} className={classes.inlineLink}>Sign up</Link></p>
    </div>
  );
}

export default LogIn;
