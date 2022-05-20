import React from "react";

class StudentsByCohort extends React.Component {
  constructor(props) {
    super(props);

  }

  validateCohort = (filter) => {
    let cohort = '';
    if(filter !== '*') {
      const cohortList = new Set(
        (this.props.data).map(e => e.cohort['cohortCode'])
      ) 
      // >> Formating string
      cohort = [...cohortList].find(e => e === filter);
      cohort = `${cohort.slice(0, -4)}  ${cohort.slice(-4)}`
    } else {
      cohort = 'All Students';
    }

    return cohort;
  }

  render() {
    const totalStudents = (this.props.data).map(e => e.id);

    return(
      <section>
        <h2>{this.validateCohort(this.props.filter)}</h2>
        <p>Total students: {(totalStudents).length}</p>
      </section>
    )
  }
}

export default StudentsByCohort;