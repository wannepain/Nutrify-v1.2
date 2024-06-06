import { Link } from "react-router-dom";

function AddRecipe2() {
    return(
        <div>
            <Link to=".."relative="route">Go back</Link>
            <h1>Hello from AddRecipe2</h1>
            <Link to="/home/add/2">Continue</Link>
        </div>
        
    )
}

export default AddRecipe2;