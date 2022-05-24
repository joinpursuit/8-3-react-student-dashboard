import React from "react";

class Cohorts extends React.Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    // >> Getting the cohorts data 
    // >> The cohorts are organized by date, either in ascending or descending order. "All Students" should remain at the top.
    let cohortListSorted = [];
    
    const filteredList = new Set(
      (this.props.cohorts).map(e => e.cohort['cohortCode'])
    )
    const cohortList = ['*'].concat(Array.from(filteredList));
    cohortList.map((cohort) => {
      // >> Creating a new array with objects {semester: value, year: value}
      cohortListSorted.push({['semester']: cohort.slice(0, -4), ['year']: cohort.slice(-4)});
    })

    cohortListSorted.sort((a, b) => {return a.year - b.year;});

    return(
      <section>
        <h2>Choose a class by Start Date</h2>
        <ul>
          {cohortListSorted.map((cohort, index) => {
            if(cohort.year === '*') {
              return <li key={index} onClick={() => this.props.getCohort('*')}><i className="fa fa-university"></i>  All Students</li> 
            }
            else {
              return <li key={index} onClick={() => this.props.getCohort(`${cohort.semester}${cohort.year}`)}><i className="fa fa-university"></i>  {`${cohort.semester} ${cohort.year}`}</li>
            }
          })}
        </ul>
      </section>
    )
  }
}

export default Cohorts;