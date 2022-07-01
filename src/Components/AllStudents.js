import React from 'react';
import AStudent from './AStudent';
import './AllStudents.css';

function AllStudents(props) {
  const { students, cohortCode } = props;

  const displayStudentList = (students) => {
    const filteredStudentArr = students.filter((student) => {
      if (cohortCode === 'All Students') {
        return true;
      }
      return student.cohort.cohortCode === cohortCode;
    });
    return filteredStudentArr.map((student) => {
      return (
        <li className='AStudent' key={student.id}>
          <AStudent student={student} />
        </li>
      );
    });
  };
  return (
    <div className='class-roster'>
      <h1>
        {cohortCode === 'All Students'
          ? 'All Students'
          : `${cohortCode.substring(
              0,
              cohortCode.length - 4,
            )} ${cohortCode.substring(cohortCode.length - 4)}`}
        <p className='total'>
          Total:
          {' ' + displayStudentList(students).length}
          <ul className='student-panel'>{displayStudentList(students)}</ul>
        </p>
      </h1>
    </div>
  );
}

export default AllStudents;
