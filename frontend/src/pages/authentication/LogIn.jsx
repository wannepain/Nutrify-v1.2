import { useState, useEffect } from 'react';
import axios from 'axios';
import {Link, useNavigate} from"react-router-dom";

import classes from "./authentication.module.css";

function LogIn(props) {
  const [values, setValues] = useState({ username: "", password: "" });
  const [error, setError] = useState(false)
  const navigate = useNavigate();

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
  return (
    <div>
      <Link className={classes.back} to="/"><h2><img src="./../../public/caret-left.svg" alt="Back" className={classes.backIcon}/> Go back</h2></Link>
      <h1>Log In</h1>
      <form className={classes.form}>
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
            className={`${classes.bottomInput} ${classes.input}`}
            type="password"
            placeholder="Password"
            value={values.password}
            onChange={handleChange}
            autoComplete='current-password'
          />
        </div>
        {!error ? null : <p className={classes.error}>{error}</p>}
        <button className={classes.formBtn} onClick={handleLogin}>Login</button>
      </form>
    </div>
  );
}

export default LogIn;
