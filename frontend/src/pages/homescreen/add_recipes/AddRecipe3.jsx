import { Link } from "react-router-dom";

function AddRecipe3() {
    return(
        <div>
            <Link to="/home/add/1">Go back</Link>
            <h1>Hello from AddRecipe3</h1>
            <Link to="/home/add/3">Continue</Link>
        </div>
        
    )
}

export default AddRecipe3;