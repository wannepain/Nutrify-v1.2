import { useEffect } from "react";

function RecipeDayCard(props) {
    useEffect(() => {
      console.log(props.recipes);
    }, [props.recipes])
    
    return(
        <h1>Hello from recipedaycard</h1>
    )
} 

export default RecipeDayCard;