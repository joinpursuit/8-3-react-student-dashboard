import React from 'react';
import AStudent from './AStudent';

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
        <li key={student.id}>
          <AStudent student={student} />
        </li>
      );
    });
  };
  return (
    <div className='class-roster'>
      <p className='total'>Total:{displayStudentList(students).length}</p>
      <ul className='student-panel'>{displayStudentList(students)}</ul>;
    </div>
  );
}

export default AllStudents;
