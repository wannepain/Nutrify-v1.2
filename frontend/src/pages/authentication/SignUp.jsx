// import {useState } from "react";
// import axios from "axios";
// import Allergies from "./Allergies";
// import Diet from "./Diet";
// import WeightHeight from "./WeightHeight";
// import GenderAge from "./GenderAge";
// import GoalActiFac from "./GoalActiFac"
// import classes from "./authentication.module.css"
// import styles from "./signup.module.css"

// function SignUp(props) {
    // const [isFirstPartDone, setIsFirstPartDone] = useState(false);
    // const [values, setValues] = useState({ username: "", password: "", passwordCheck: "" });
    // const [error, setError] = useState(false);
    // const [finalObject, setFinalObject] = useState({});

    // function handleChange(event) {
    //     const { name, value } = event.target;
    //     setValues(prevState => ({ ...prevState, [name]: value }));
    // }

    // async function handleContinue(event) {
    //     setError("")
    //     event.preventDefault();
    //     const { username, password, passwordCheck } = values;
    //     try {
    //         const result = await axios.post("http://localhost:3000/check", {"username": username});
    //         if (result.data.status === 200) {
    //             console.log(result);
    //             setError("Username already exists")
    //         } else if (username === "" || password === "" || passwordCheck === "") {
    //             setError("All fields must be filled");
    //         }else if(password !== passwordCheck) {
    //             setError("Passwords don't match");
    //         } else{
    //             setError("")
    //             setIsFirstPartDone(true);
    //         }
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
    // function handleReturn(event) {
    //     event.preventDefault()
    //     props.setSignUp(false)
    //   }
    // function handleBackToFirstPart(event) {
    //     setIsFirstPartDone(false)
    // }
    // function addToObj(object) {
    //     // Include username in the object obtained from child components
    //     const updatedObject = { ...object };
    //     setFinalObject(prevFinalObject => ({ ...prevFinalObject, ...object}));
    // }
    
    // async function handleSignUp(event) {
    //     event.preventDefault();
    //     console.log(finalObject);
    //     try {
    //         const result = await axios.post("http://localhost:3000/signup",{username: username, password: password});
    //         const result2 = await axios.post("http://localhost:3000/signup/nutrition", finalObject)
    //         if (result.status === 200 && result2.status === 200) {
    //             props.setSign(true);
    //         }
    //         console.log(result.data.rows, result2.data,rows);
    //     } catch (error) {
    //         console.log(error);
    //     }
        
    // }
//     if (isFirstPartDone) {
//         return (
            // <div className={styles.div}>
            //     <h2 onClick={handleBackToFirstPart} className={classes.back}><img src="./../../public/caret-left.svg" alt="Back" className={classes.backIcon}/> Go back</h2>
            //     <form>
            //         <h1 className={classes.title}>Sign up</h1>
            //         <div className={styles.secondSignUpContainer}>
            //             <input type="hidden" value={values.username} name="username"/>
            //             <Allergies error={setError} obj={addToObj}/>
            //             <Diet obj={addToObj}/>
            //             <WeightHeight obj={addToObj}/>
            //             <GenderAge obj={addToObj}/>
            //             <GoalActiFac obj={addToObj}/>
            //         </div>
            //         <button className={styles.btn} onClick={handleSignUp}>Sign up</button>
            //         {!error ? null : <p className={classes.error}>{error}</p>}
            //     </form>
            // </div>
//         );
//     } else {

//         return (
            // <div>
            //     <h2 onClick={handleReturn} className={classes.back}><img src="./../../public/caret-left.svg" alt="Back" className={classes.backIcon}/> Go back</h2>
            //     <form className={classes.form}>
            //         <h1 className={classes.h1}>Sign up</h1>
            //         <div className={classes.inputContainer}>
            //             <input
            //                 name='username'
            //                 className={`${classes.topInput} ${classes.input}`}
            //                 type="text"
            //                 placeholder="Username"
            //                 value={values.username}
            //                 onChange={handleChange}
            //                 autoComplete='username'
            //             />
            //             <input
            //                 name='password'
            //                 className={`${classes.middleInput} ${classes.input}`}
            //                 type="password"
            //                 placeholder="Password"
            //                 value={values.password}
            //                 onChange={handleChange}
            //                 autoComplete='new-password'
            //             />
            //             <input
            //                 name='passwordCheck'
            //                 className={`${classes.bottomInput} ${classes.input}`}
            //                 type="password"
            //                 placeholder="Confirm Password"
            //                 value={values.passwordCheck}
            //                 onChange={handleChange}
            //                 autoComplete='new-password'
            //             />
            //         </div>
            //         {!error ? null : <p className={classes.error}>{error}</p>}
            //         <button onClick={handleContinue} className={classes.formBtn}>Continue</button>
            //     </form>
            // </div>
//         );
//     }
// }

// export default SignUp;

import { Outlet } from "react-router-dom";

function SignUp(props) {
    return <Outlet />
}

export default SignUp;