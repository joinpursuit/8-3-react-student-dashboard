import React from "react";


class Cohorts extends React.Component {
  constructor(props) {
    super(props);
    
  }


  render() {
    // >> Getting the cohorts data 
    // >> The cohorts are organized by date, either in ascending or descending order. "All Students" should remain at the top.
    let cohortList = [];
    //let newArray2 = ['All': 'Students'];
    
    const filteredList = new Set(
      (this.props.data).map(e => e.cohort['cohortCode'])
    )
    const cohortList2 = ['*'].concat(Array.from(filteredList));
    cohortList2.map((cohort, index) => {
      // >> Creating a new array with objects {semester: value, year: value}
      cohortList.push({['semester']: cohort.slice(0, -4), ['year']: cohort.slice(-4)});
    })

    cohortList.sort((a, b) => {return a.year - b.year;});

    return(
      <section>
        <h2>Choose a class by Start Date</h2>
        <ul>
          {/* {cohortList.map((cohort) => {
            if(cohort === '*') {
              return <li onClick={() => this.props.getCohort('*')}>All Students</li> 
            }
            else {
              return <li onClick={() => this.props.getCohort(cohort)}>{`${cohort.slice(0, -4)} ${cohort.slice(-4)}`}</li>
            }
          })} */}
          
          {cohortList.map((cohort, index) => {
            if(cohort.year === '*') {
              return <li key={index} onClick={() => this.props.getCohort('*')}><i class="fa fa-university" aria-hidden="true"></i>  All Students</li> 
            }
            else {
              return <li key={index} onClick={() => this.props.getCohort(`${cohort.semester}${cohort.year}`)}><i class="fa fa-university" aria-hidden="true"></i>  {`${cohort.semester} ${cohort.year}`}</li>
            }
          })}
        </ul>
      </section>
    )
  }
}

export default Cohorts;