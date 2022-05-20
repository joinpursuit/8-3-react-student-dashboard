import React from "react";


class Cohorts extends React.Component {
  constructor(props) {
    super(props);
    
    
  }

  // getCohort = (cohort) => {
  //   console.log(cohort)

  // }

  render() {
    const filteredList = new Set(
      (this.props.data).map(e => e.cohort['cohortCode'])
    )
    const cohortList = ['*'].concat(Array.from(filteredList));

    return(
      <section>
        <h2>Choose a class by Start Date</h2>
        <ul>
          {cohortList.map((cohort) => {
            if(cohort === '*') {
              return <li onClick={() => this.props.getCohort('*')}>All Students</li> 
            }
            else {
              return <li onClick={() => this.props.getCohort(cohort)}>{`${cohort.slice(0, -4)} ${cohort.slice(-4)}`}</li>
            }
          })}
          
        </ul>
      </section>
    )
  }
}

export default Cohorts;