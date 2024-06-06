import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AuthContainer from "./pages/authentication/AuthContainer";
import LogIn from "./pages/authentication/LogIn";
import SignUp from "./pages/authentication/SignUp";
import SignUp1 from "./pages/authentication/SignUp1";
import SignUp2 from "./pages/authentication/SignUp2";
import Welcome,{isTokenValid}from "./pages/authentication/Welcome";
import AddRecipes from "./pages/homescreen/AddRecipe";
import Homescreen from './pages/homescreen/Homescreen';
import Recipes, {Loader} from "./pages/homescreen/Recipes";
import AddRecipe1 from "./pages/homescreen/add_recipes/AddRecipe1";
import AddRecipe2 from "./pages/homescreen/add_recipes/AddRecipe2";
import AddRecipe3 from "./pages/homescreen/add_recipes/AddRecipe3";
import AddRecipe4 from "./pages/homescreen/add_recipes/AddRecipe4"

const router = createBrowserRouter([
  { //authentication
    path: "/",
    element: <AuthContainer />,
    //errorElement:  ,
    children:[
      {index: true, element: <Welcome />, loader: isTokenValid},
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
      {index: true, element: <Recipes />, loader: Loader},
      {path:"add", element: <AddRecipes />, children:[
        {index: true, element: <AddRecipe1/>},
        {path: "1", element: <AddRecipe2 />},
        {path:"2", element: <AddRecipe3 />},
        {path:"3", element: <AddRecipe4 />}
      ]}
    ]
  }
])

function App(props) {
  return (
    <RouterProvider router={router} />
  )
}

export default App;