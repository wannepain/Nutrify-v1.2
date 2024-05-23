import React, { useState, useEffect }  from "react";
import LogIn from "./modules/authentication/LogIn";
import SignUp from "./modules/authentication/SignUp";
import classes from "./App.module.css";

function App() {
  // const [token, setToken] = useState(null);
  // const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [signUp, setSignUp] = useState(false);
  const [logIn, setLogIn] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('jwtToken');

        if (token) {
            const tokenParts = token.split('.');
            
            // Check if the token has three parts
            if (tokenParts.length === 3) {
                // Decode the payload to extract expiration time
                const payload = JSON.parse(atob(tokenParts[1]));
                const expirationTime = payload.exp * 1000; // Convert to milliseconds
    
                // Check if the token is expired
                if (expirationTime > Date.now()) {
                    setIsLoggedIn(true)
                } else {
                    console.log('Token has expired.');
                }
            } else {
                console.log('Invalid token format.');
            }
        } else {
            console.log('Token is not present.');
        }
    }, []); // Empty dependency array ensures this effect runs only once on mount
  function handleProp() {
    setIsLoggedIn(true);
  }
  
  // if (isLoggedIn){
  //   return <div className="mainDiv">
  //     <Homescreen />
  //   </div>
  // } else 
  if(logIn){
    return <div className={classes.body}>
      <LogIn setLog={setIsLoggedIn} setLogIn={setLogIn}/>
    </div>
  } else if(signUp){
    return <div className={classes.body}>
      <SignUp setSignUp={setSignUp} setSign={setIsLoggedIn}/>
    </div>
  } else{
    return (
      <div className={classes.body}>
        <div>
          <h1>Welcome to nutrify</h1>
          <div className={classes.containerInline}>
            <button onClick={()=>setLogIn(true)} className={classes.btn} handleProp={handleProp}>Log in</button>
            <button onClick={()=>setSignUp(true)} className={classes.btn} auth={handleProp}>Sign up</button>
          </div>
        </div>
      </div>
    );

  }
  
}

export default App;
