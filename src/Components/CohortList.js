import React from 'react';

function CohortList(props) {
  const { data } = props;
  const startDates = data.map((student) => {
    //  return student.cohort.cohortCode;
    return student;
    //    console.log(student.cohort.cohortCode)
    // return [...new Set(startDates)];
  });
  console.log(startDates);
  const showCohorts = startDates.map((semester) => {
    return (
      <div>
        <h3
        className='cohort'
        onClick={() => props.customClickHandler(semester)}
        >
          {semester.cohort.cohortCode}
        </h3>
      </div>
    );
  });
  return (
    <div>
      <h2>Choose a Class by Start Date</h2>
      <p>All Students</p>
      <section>{showCohorts}</section>
    </div>
  );
}
export default CohortList;
