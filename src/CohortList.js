import React from "react";
import Cohort from "./Cohort";
import data from './data/data.json';










function CohortList() {
  const cohortCode = data.map((student) => student.cohort.cohortCode);
  const deduped = new Set(cohortCode);
  const allCohorts = ['All Students', ...deduped];

  const displayCohorts = allCohorts.map((semester) => (
    <div key={semester}>
      <h3>{semester}</h3>
      <hr></hr>
    </div>
  ));
  return (
    <div className="semester-list">
      <h2>Choose a Class by Start Date </h2>
      <section>{displayCohorts}</section>
    </div>
  );
}



// const displayCohorts = startDates.map((semester) => {
//   return (
//     <h3> className = 'cohort' onClick={handleClick}
//     {semester}
//     </h3>
//   )
// });

//     // const displayCohorts = allCohorts.map((semester) => (
//     //   <div>
//     //     <h3 id={semester} onClick={handleClick}>
//     //       <a href="#">{semester}</a>
//     //     </h3>
//     //     <hr></hr>
//     //   </div>
//     // ));
//     return (
//         <div>
//             <h2>Choose a Class by Start Date </h2>
//             <section>{displayCohorts}</section>;
//         </div>
//     ) 
//   }
  
  export default CohortList;
