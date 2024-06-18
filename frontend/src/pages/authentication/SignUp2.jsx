// // import styles from "./signup.module.css";
// // import { Link, useLocation, useNavigate } from "react-router-dom";
// // import {useState } from "react";
// // import axios from "axios";

// // import Allergies from "./../../modules/authentication/Allergies";
// // import Diet from "./../../modules/authentication/Diet";
// // import WeightHeight from "./../../modules/authentication/WeightHeight";
// // import GenderAge from "./../../modules/authentication/GenderAge";
// // import GoalActiFac from "./../../modules/authentication/GoalActiFac";
// // import classes from "./authentication.module.css";

// // function SignUp2(props) {
// //     const [error, setError] = useState(false);
// //     const [finalObject, setFinalObject] = useState({});
// //     const location = useLocation();
// //     const navigate = useNavigate();
// //     const { username, password } = location.state || {};

// //     const caretLeft = "./../../../public/caret-left.svg";

// //     function addToObj(object) {
// //         setFinalObject(prevFinalObject => ({ ...prevFinalObject, ...object }));
// //     }

// //     async function handleSignUp(event) {
// //         event.preventDefault();
// //         console.log(finalObject);
        
// //         const axiosObj = { ...finalObject, username: username };
// //         console.log(axiosObj);
        
// //         try {
// //             const result = await axios.post("http://localhost:3000/signup", { username: username, password: password });
// //             console.log(result);
            
// //             const result2 = await axios.post("http://localhost:3000/signup/nutrition", axiosObj);
// //             console.log(result2);
        
// //             localStorage.removeItem("signUpValues");
// //             localStorage.clear();
// //             navigate("/home");
// //         } catch (error) {
// //             console.error("Error during sign up:", error);
// //         }
// //     }

// //     return (
// //         <div className={styles.div}>
// //             <Link className={classes.back} to="..">
// //                 <h2>
// //                     <img src={caretLeft} alt="Back" className={classes.backIcon} /> Go back
// //                 </h2>
// //             </Link>
// //             <form>
// //                 <h1 className={classes.title}>Sign up</h1>
// //                 <div className={styles.secondSignUpContainer}>
// //                     <Allergies error={setError} obj={addToObj}/>
// //                     <Diet obj={addToObj} />
// //                     <WeightHeight obj={addToObj} />
// //                     <GenderAge obj={addToObj} />
// //                     <GoalActiFac obj={addToObj} />
// //                 </div>
// //                 <button onClick={handleSignUp} className={styles.btn}>Sign up</button>
// //                 {!error ? null : <p className={classes.error}>{error}</p>}
// //             </form>
// //         </div>
// //     );
// // }

// // export default SignUp2;

// import styles from "./signup.module.css";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { useState } from "react";
// import axios from "axios";

// import Allergies from "./../../modules/authentication/Allergies";
// import Diet from "./../../modules/authentication/Diet";
// import WeightHeight from "./../../modules/authentication/WeightHeight";
// import GenderAge from "./../../modules/authentication/GenderAge";
// import GoalActiFac from "./../../modules/authentication/GoalActiFac";
// import classes from "./authentication.module.css";

// function SignUp2(props) {
//     const [error, setError] = useState(false);
//     const [finalObject, setFinalObject] = useState({});
//     const location = useLocation();
//     const navigate = useNavigate();
//     const { username, password } = location.state || {};

//     const caretLeft = "./../../../public/caret-left.svg";

//     function addToObj(object) {
//         setFinalObject(prevFinalObject => ({ ...prevFinalObject, ...object }));
//     }

//     async function handleSignUp(event) {
//         event.preventDefault();  
//         const axiosObj = { ...finalObject, username: username };
//         console.log(axiosObj);
        

//         let result1;
//         let result2;
//         try {
//             result1 = await axios.post("http://localhost:3000/signup", { username: username, password: password });
//             if (result1.status === 200) {
//                 try {
//                     result2 = await axios.post("http://localhost:3000/signup/nutrition", axiosObj);
//                     const token = result1.data.token;
//                     console.log(token);
//                     if (result2.status === 200) {
//                         localStorage.removeItem("signUpValues");
//                         localStorage.clear();
//                         localStorage.setItem("jwtToken", token)
//                         navigate("/home");
//                     } else {
//                         console.error("Sign up failed with statuses:", result1.status, result2.status);
//                     }
//                 } catch (error) {
//                     console.log(error);
//                 }
//             } else {
//                 console.log(result1.status);
//             }
//             console.log(result1);
//         } catch (error) {
//             console.log(error);
//         }
//     }

//     return (
//         <div className={styles.div}>
//             <Link className={classes.logo} to="/"><h2>Nutrify</h2></Link>
//             <Link className={classes.back} to="..">
//                 <h2>
//                     <img src={caretLeft} alt="Back" className={classes.backIcon} /> Go back
//                 </h2>
//             </Link>
//             <form>
//                 <div className={styles.secondSignUpContainer}>
//                     <Allergies error={setError} obj={addToObj}/>
//                     <Diet obj={addToObj} />
//                     <WeightHeight obj={addToObj} />
//                     <GenderAge obj={addToObj} />
//                     <GoalActiFac obj={addToObj} />
//                 </div>
//                 <button onClick={handleSignUp} className={styles.btn}>Sign up</button>
//                 {!error ? null : <p className={classes.error}>{error}</p>}
//             </form>
//         </div>
//     );
// }

// export default SignUp2;
import styles from "./signup.module.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

import Allergies from "./../../modules/authentication/Allergies";
import Diet from "./../../modules/authentication/Diet";
import WeightHeight from "./../../modules/authentication/WeightHeight";
import GenderAge from "./../../modules/authentication/GenderAge";
import GoalActiFac from "./../../modules/authentication/GoalActiFac";
import classes from "./authentication.module.css";

function SignUp2(props) {
    const [error, setError] = useState("");
    const [finalObject, setFinalObject] = useState({});
    const location = useLocation();
    const navigate = useNavigate();
    const { username, password } = location.state || {};

    const caretLeft = "./../../../public/caret-left.svg";

    function addToObj(object) {
        setFinalObject(prevFinalObject => ({ ...prevFinalObject, ...object }));
    }

    async function handleSignUp(event) {
        event.preventDefault();
        const axiosObj = { ...finalObject, username: username };
        console.log(axiosObj);

        try {
            const result1 = await axios.post("http://localhost:3000/signup", { username: username, password: password });
            if (result1.status === 200) {
                try {
                    const result2 = await axios.post("http://localhost:3000/signup/nutrition", axiosObj);
                    if (result2.status === 200) {
                        const token = result1.data.token;
                        localStorage.removeItem("signUpValues");
                        localStorage.clear();
                        localStorage.setItem("jwtToken", token);
                        navigate("/home");
                    } else {
                        setError("Nutrition signup failed. Please try again.");
                        setError("Signup failed. Please check your details and try again.");
                        try {
                            const result = axios.post("http://localhost:3000/delete_user", {username: username})
                        } catch (error) {
                            console.log(error);
                        }
                    }
                } catch (error) {
                    console.error("Nutrition signup error:", error);
                    setError("An error occurred during the nutrition signup. Please try again.");
                    setError("Signup failed. Please check your details and try again.");
                    try {
                        const result = axios.post("http://localhost:3000/delete_user", {username: username})
                    } catch (error) {
                        console.log(error);
                    }
                }
            } else {
                setError("Signup failed. Please check your details and try again.");
                try {
                    const result = axios.post("http://localhost:3000/delete_user", {username: username})
                } catch (error) {
                    console.log(error);
                }
                
            }
        } catch (error) {
            console.error("Signup error:", error);
            setError("An error occurred during signup. Please try again.");
        }
    }

    return (
        <div className={styles.div}>
            <Link className={classes.logo} to="/"><h2>Nutrify</h2></Link>
            <Link className={classes.back} to="..">
                <h2>
                    <img src={caretLeft} alt="Back" className={classes.backIcon} /> Go back
                </h2>
            </Link>
            <form>
                <div className={styles.secondSignUpContainer}>
                    <Allergies error={setError} obj={addToObj}/>
                    <Diet obj={addToObj} />
                    <WeightHeight obj={addToObj} />
                    <GenderAge obj={addToObj} />
                    <GoalActiFac obj={addToObj} />
                </div>
                <button onClick={handleSignUp} className={styles.btn}>Sign up</button>
                {error && <p className={classes.error}>{error}</p>}
            </form>
        </div>
    );
}

export default SignUp2;
