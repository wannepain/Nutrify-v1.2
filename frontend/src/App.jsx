import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AuthContainer from "./pages/authentication/AuthContainer";
import LogIn from "./pages/authentication/LogIn";
import SignUp from "./pages/authentication/SignUp";
import SignUp1 from "./pages/authentication/SignUp1";
import SignUp2 from "./pages/authentication/SignUp2";
import Welcome from "./pages/authentication/Welcome";
import AddRecipes from "./pages/homescreen/AddRecipe";
import Homescreen from './pages/homescreen/Homescreen';
import Recipes from "./pages/homescreen/Recipes";

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
  },
  { //homescreen
    path: "/home",
    element: <Homescreen />,
    children:[
      {index: true, element: <Recipes />},
      {path:"add", element: <AddRecipes />}
    ]
  }
])

function App(props) {
  return (
    <RouterProvider router={router} />
  )
}

export default App;