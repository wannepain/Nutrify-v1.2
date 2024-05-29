// import styles from "./signup.module.css";
// import {Link, useLocation} from "react-router-dom";
// import {useEffect, useState} from "react";

// import Allergies from "./../../modules/authentication/Allergies";
// import Diet from "./../../modules/authentication/Diet";
// import WeightHeight from "./../../modules/authentication/WeightHeight";
// import GenderAge from "./../../modules/authentication/GenderAge";
// import GoalActiFac from "./../../modules/authentication/GoalActiFac"
// import classes from "./authentication.module.css"

// function SignUp2(props) {
//     const [error, setError] = useState(false);
//     const [finalObject, setFinalObject] = useState({});
//     const location = useLocation();
//     const { username, password } = location.state || {};

//     const caretLeft = "./../../../public/caret-left.svg"

//     // Save finalObject to localStorage whenever it changes
//     useEffect(() => {
//         function addObjLocal() {
//             localStorage.setItem("nutrition_object", JSON.stringify(finalObject));
//         }
//         addObjLocal();
//     }, [finalObject]);

//     // Retrieve the saved values from localStorage when the component mounts
//     useEffect(() => {
//         const savedValues = localStorage.getItem("nutrition_object");
//         if (savedValues) {
//             console.log(savedValues);
//            // setFinalObject(savedValues); // Set the state with retrieved data
//         }
//     }, []);

//     function addToObj(object) {
//         // Include username in the object obtained from child components
//         setFinalObject(prevFinalObject => ({ ...prevFinalObject, ...object}));
//     }
    
//     async function handleSignUp(event) {
//         event.preventDefault();
//         console.log(finalObject);
//         try {
//             const result = await axios.post("http://localhost:3000/signup",{username: username, password: password});
//             const result2 = await axios.post("http://localhost:3000/signup/nutrition", finalObject)
//             if (result.status === 200 && result2.status === 200) {
//                 // navigate to homepage
//             }
//             console.log(result.data.rows, result2.data,rows);
//         } catch (error) {
//             console.log(error);
//         }
        
//     }
//     return (
//         <div className={styles.div}>
//             {/* <h2 onClick={handleBackToFirstPart} className={classes.back}><img src="./../../public/caret-left.svg" alt="Back" className={classes.backIcon}/> Go back</h2> */}
//             <Link className={classes.back} to="..">
//                 <h2>
//                     <img src={caretLeft} alt="Back" className={classes.backIcon} /> Go back
//                 </h2>
//             </Link>
//             <form>
//                 <h1 className={classes.title}>Sign up</h1>
//                 <div className={styles.secondSignUpContainer}>
//                     <Allergies error={setError} obj={addToObj}/>
//                     <Diet obj={addToObj}/>
//                     <WeightHeight obj={addToObj}/>
//                     <GenderAge obj={addToObj}/>
//                     <GoalActiFac obj={addToObj}/>
//                 </div>
//                 <button onClick={handleSignUp}>Sign up</button>
//                 {!error ? null : <p className={classes.error}>{error}</p>}
//             </form>
//         </div>
//     )
// }

// export default SignUp2;

import styles from "./signup.module.css";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import Allergies from "./../../modules/authentication/Allergies";
import Diet from "./../../modules/authentication/Diet";
import WeightHeight from "./../../modules/authentication/WeightHeight";
import GenderAge from "./../../modules/authentication/GenderAge";
import GoalActiFac from "./../../modules/authentication/GoalActiFac";
import classes from "./authentication.module.css";

function SignUp2(props) {
    const [error, setError] = useState(false);
    const [finalObject, setFinalObject] = useState({});
    const location = useLocation();
    const { username, password } = location.state || {};

    const caretLeft = "./../../../public/caret-left.svg";

    console.log(finalObject);

    // Save finalObject to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem("nutrition_object", JSON.stringify(finalObject));
    }, [finalObject]);

    // Retrieve the saved values from localStorage when the component mounts
    useEffect(() => {
        const savedValues = JSON.parse(localStorage.getItem("nutrition_object"));
        if (savedValues) {
            setFinalObject(savedValues); // Set the state with retrieved data
        }
    }, []);

    function addToObj(object) {
        setFinalObject(prevFinalObject => ({ ...prevFinalObject, ...object }));
    }

    async function handleSignUp(event) {
        event.preventDefault();
        console.log(finalObject);
        try {
            const result = await axios.post("http://localhost:3000/signup", { username: username, password: password });
            const result2 = await axios.post("http://localhost:3000/signup/nutrition", finalObject);
            if (result.status === 200 && result2.status === 200) {
                // navigate to homepage
            }
            console.log(result.data.rows, result2.data.rows);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className={styles.div}>
            <Link className={classes.back} to={{ pathname: "..", state: { username: username, password: password } }}>
                <h2>
                    <img src={caretLeft} alt="Back" className={classes.backIcon} /> Go back
                </h2>
            </Link>
            <form>
                <h1 className={classes.title}>Sign up</h1>
                <div className={styles.secondSignUpContainer}>
                    <Allergies error={setError} obj={addToObj} />
                    <Diet obj={addToObj} />
                    <WeightHeight obj={addToObj} />
                    <GenderAge obj={addToObj} />
                    <GoalActiFac obj={addToObj} />
                </div>
                <button onClick={handleSignUp}>Sign up</button>
                {!error ? null : <p className={classes.error}>{error}</p>}
            </form>
        </div>
    );
}

export default SignUp2;
