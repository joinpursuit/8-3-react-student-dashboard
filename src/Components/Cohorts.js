import React from "react";

  function Cohorts(props) {
    const { cohorts, getCohort } = props;

    let cohortsSorted = [];

    // >> Creating a new list with a cohort unique code-identifiers 
    const uniqueCohortList = new Set(
      (cohorts).map(e => e.cohort['cohortCode'])
    )
    const cohortList = ['*'].concat(Array.from(uniqueCohortList));
    cohortList.map((cohort) => cohortsSorted.push({['semester']: cohort.slice(0, -4), ['year']: cohort.slice(-4)}))
    
    // >> Sorting the cohort list
    cohortsSorted.sort((a, b) => {return a.year - b.year;});

    return(
      <section>
        <h2>Choose a class by Start Date</h2>
        <ul>
          {cohortsSorted.map((cohort, index) => {
            // >> Validating the cohort values
            if(cohort.year === '*') {
              return <li key={index} onClick={() => getCohort('*')}><i className="fa fa-university"></i>  All Students</li> 
            }
            else {
              return <li key={index} onClick={() => getCohort(`${cohort.semester}${cohort.year}`)}><i className="fa fa-university"></i>  {`${cohort.semester} ${cohort.year}`}</li>
            }
          })}
        </ul>
      </section>
    )
}

export default Cohorts;