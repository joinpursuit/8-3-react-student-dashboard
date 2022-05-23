import React from 'react';
import StudentInfo from './StudentInfo';

function StudentList(props) {
  const { students, cohortCode } = props;

  /**
   * displayStudentList to show the list of all students with detailed information.
   * @param {Object[]} students - An array of object with detailed info of all students.
   * @returns {String[]} - An array of strings with cohort code (ex: Winter 2025)
   * @returns {Object[]} - A new array of students objects based on their cohort code.
   */
  const displayStudentList = (students) => {
    const filteredStudentArr = students.filter((student) => {
      if (cohortCode === 'All Students') {
        return true;
      }
      return student.cohort.cohortCode === cohortCode;
    });
    return filteredStudentArr.map((student) => {
      return (
        <p key={student.id}>
          <StudentInfo student={student} />
        </p>
      );
    });
  };
  return (
    <div>
      <h2 className='all-students'>
        {cohortCode === 'All Students'
          ? 'All Students'
          : `${cohortCode.substring(0, cohortCode.length - 4)} 
					${cohortCode.substring(cohortCode.length - 4)}`}
      </h2>
      <p className='total'>
        Total Students:{displayStudentList(students).length}
      </p>
      <ul className='student-info'>{displayStudentList(students)}</ul>;
    </div>
  );
}

export default StudentList;
