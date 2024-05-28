// import React, { useState, useEffect }  from "react";
// import {createBrowserRouter} from "react-router-dom";
// import LogIn from "./modules/authentication/LogIn";
// import SignUp from "./modules/authentication/SignUp";
// import Welcome from "./pages/authentication/Welcome";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Welcome />,
//     children: [
//       { path: "signup", element: <SignUp /> },
//       { path: "login", element: <LogIn /> }
//     ]
//   }
// ]);



// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [signUp, setSignUp] = useState(false);
//   const [logIn, setLogIn] = useState(false);

//     useEffect(() => {
//         const token = localStorage.getItem('jwtToken');

//         if (token) {
//             const tokenParts = token.split('.');
            
//             // Check if the token has three parts
//             if (tokenParts.length === 3) {
//                 // Decode the payload to extract expiration time
//                 const payload = JSON.parse(atob(tokenParts[1]));
//                 const expirationTime = payload.exp * 1000; // Convert to milliseconds
    
//                 // Check if the token is expired
//                 if (expirationTime > Date.now()) {
//                     setIsLoggedIn(true)
//                 } else {
//                     console.log('Token has expired.');
//                 }
//             } else {
//                 console.log('Invalid token format.');
//             }
//         } else {
//             console.log('Token is not present.');
//         }
//     }, []); // Empty dependency array ensures this effect runs only once on mount
//   function handleProp() {
//     setIsLoggedIn(true);
//   }
  
//   // if (isLoggedIn){
//   //   return <div className="mainDiv">
//   //     <Homescreen />
//   //   </div>
//   // } else 
//   if(logIn){
//     return <div className={classes.body}>
//       <LogIn setLog={setIsLoggedIn} setLogIn={setLogIn}/>
//     </div>
//   } else if(signUp){
//     return <div className={classes.body}>
//       <SignUp setSignUp={setSignUp} setSign={setIsLoggedIn}/>
//     </div>
//   } else{
//     return (
//       <Welcome />
//     );

//   }
  
// }

// export default App;

// import React, { useState, useEffect } from "react";
// import { createBrowserRouter, RouterProvider, Outlet, Navigate } from "react-router-dom";
// import LogIn from "./modules/authentication/LogIn";
// import SignUp from "./modules/authentication/SignUp";
// import Welcome from "./pages/authentication/Welcome";
// //import Homescreen from "./components/Homescreen"; // Assuming you have a Homescreen component

// const AuthWrapper = ({ isLoggedIn }) => {
//   if (isLoggedIn) {
//     return <Homescreen />;
//   } else {
//     return <Navigate to="/" />;
//   }
// };

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Welcome />,
//     children: [
//       { path: "signup", element: <SignUp /> },
//       { path: "login", element: <LogIn /> }
//     ]
//   },
//   { path: "homescreen", element: <AuthWrapper /> }
// ]);

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     const token = localStorage.getItem('jwtToken');

//     if (token) {
//       const tokenParts = token.split('.');

//       if (tokenParts.length === 3) {
//         const payload = JSON.parse(atob(tokenParts[1]));
//         const expirationTime = payload.exp * 1000;

//         if (expirationTime > Date.now()) {
//           setIsLoggedIn(true);
//         } else {
//           console.log('Token has expired.');
//         }
//       } else {
//         console.log('Invalid token format.');
//       }
//     } else {
//       console.log('Token is not present.');
//     }
//   }, []);

//   return (
//     <RouterProvider router={router}>
//       <Outlet context={{ isLoggedIn, setIsLoggedIn }} />
//     </RouterProvider>
//   );
// }

// export default App;
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import AuthContainer from "./pages/authentication/AuthContainer";
import Welcome from "./pages/authentication/Welcome";
import SignUp from "./pages/authentication/SignUp";
import LogIn from "./pages/authentication/LogIn";
import SignUp1 from "./pages/authentication/SignUp1";
import SignUp2 from "./pages/authentication/SignUp2";

const router = createBrowserRouter([
  { //authentication
    path: "/",
    element: <AuthContainer />,
    //errorElement:  ,
    children:[
      {index: true, element: <Welcome />},
      {path: "signup", element: <SignUp />, children: [
        {index: true, element: <SignUp1 />}, 
        {path: "nutrition", element: <SignUp2 />}
      ]},
      {path: "login", element: <LogIn/>}
    ]
  }
  // {
  //   path: "/home",
  //   element
  // }
])

function App(props) {
  return (
    <RouterProvider router={router} />
  )
}

export default App;