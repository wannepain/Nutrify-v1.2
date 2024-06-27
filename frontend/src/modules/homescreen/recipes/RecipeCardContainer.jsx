// import { useEffect } from "react";
// import RecipeCard from "./RecipeCard";

// function RecipeDayCard(props) {
//   const day = props.currentDay
//   const data = props.day
//     // useEffect(() => {
//     //   Object.keys(data[day]).forEach((currentCourse)=>{
//     //     const result = handleCourse(data[day][currentCourse]);
//     //     console.log(result);
//     //   })
//     // }, [props.day])
    

//     function handleCourse(breakfastObj) { // change the logic, so that it actially makes sense 
//       if (breakfastObj.first === null && breakfastObj.main === null && breakfastObj.dessert === null) {
//         return {[breakfastObj]:false};
//       } else if (breakfastObj.first === null || breakfastObj.dessert === null) {
//         return {[breakfastObj]:breakfastObj.main};
//       } else {
//         return {[breakfastObj]:breakfastObj};
//       }
//     }

//     return(
//       <>
//         {Object.keys(data[day]).forEach((currentCourse)=>{
//           const result = handleCourse(data[day][currentCourse]);
//           return <RecipeCard courseId={result} />
//           })
//         }
//       </>
//     )
// } 

// export default RecipeDayCard;


import React, { useEffect } from "react";
import RecipeCard from "./RecipeCard";

function RecipeDayCard(props) {
  const day = props.currentDay;
  const data = props.day;

  // Uncomment and fix the useEffect if needed
  useEffect(() => {
    Object.keys(data[day]).forEach((currentCourse) => {
      const result = handleCourse(data[day][currentCourse]);
      console.log(result);
    });
  }, [props.day]);

  function handleCourse(courseObj) {
    if (courseObj.first === null && courseObj.main === null && courseObj.dessert === null) {
      return { course: false };
    } else if (courseObj.first === null || courseObj.dessert === null) {
      return { course: courseObj.main };
    } else {
      return { course: courseObj };
    }
  }

  return (
    <>
      {Object.keys(data[day]).map((currentCourse) => {
        const result = handleCourse(data[day][currentCourse]);
        return <RecipeCard key={currentCourse} courseId={result.course} />;
      })}
    </>
  );
}

export default RecipeDayCard;
