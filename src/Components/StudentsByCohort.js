import React from "react";
 
/**
 * validateCohort: given a student list and plus a student cohort code, generates a heading title with a respective count
 * @param {[]String} students -A student list.
 * @param {String} cohort -A cohort code identifier.
 * @returns update the students list by cohort
 */
const validateCohort = (students, filter) => {
  let cohort = '';
  // >> Validating the cohort code 
  if(filter !== '*') {
    const cohortList = new Set(
      (students).map(student => student.cohort['cohortCode'])
    ) 
    // >> Formating the cohort identifier in a human readable way
    cohort = [...cohortList].find(e => e === filter);
    cohort = `${cohort.slice(0, -4)}  ${cohort.slice(-4)}`
  } else {
    cohort = 'All Students';
  }
  return cohort;
}

function StudentsByCohort(props) {
  const { students, filter } = props;  
  
  const totalStudents = (students).map(student => student.id);

  return(
    <section className="list-heading">
      <h2>{validateCohort(students, filter)}</h2>
      <p>Total students: {(totalStudents).length}</p>
    </section>
  )
}

export default StudentsByCohort;