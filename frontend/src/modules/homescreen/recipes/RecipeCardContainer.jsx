import { useEffect } from "react";

function RecipeDayCard(props) {
  const day = props.currentDay
  const data = props.day
    useEffect(() => {
      Object.keys(data[day]).forEach((currentCourse)=>{
        const result = handleCourse(data[day][currentCourse]);
        console.log(result);
      })
    }, [props.day])
    

    function handleCourse(breakfastObj) { // change the logic, so that it actially makes sense 
      if (breakfastObj.first === null && breakfastObj.main === null && breakfastObj.dessert === null) {
        return {[breakfastObj]:false};
      } else if (breakfastObj.first === null || breakfastObj.dessert === null) {
        return {[breakfastObj]:breakfastObj.main};
      } else {
        return {[breakfastObj]:breakfastObj};
      }
    }

    return(
        <h1>hello</h1>
    )
} 

export default RecipeDayCard;