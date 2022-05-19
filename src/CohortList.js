import React from "react";
import Cohort from "./Cohort";
import './CohortList.css'



function CohortList({ handleClick }) {
    const allCohorts = [
      'All Students',
      'Winter 2026',
      'Fall 2026',
      'Summer 2026',
      'Spring 2026',
      'Winter 2025',
      'Fall 2025',
      'Summer 2025',
      'Spring 2025',
    ];
  
    const displayCohorts = allCohorts.map((semester) => (
      <div>
        <h3 id={semester} onClick={handleClick}>
          <a href="#">{semester}</a>
        </h3>
        <hr></hr>
      </div>
    ));
    return (
        <div>
            <h2>Choose a Class by Start Date </h2>
            <section>{displayCohorts}</section>;
        </div>
    ) 
  }
  
  export default CohortList;

  /*
  TODOS
create a clickable list of cohort codes
  */
