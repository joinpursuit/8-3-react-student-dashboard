import React from 'react';
import AStudent from './AStudent';

function AllStudents({ pursuitStudents }) {
  const studentPanels = pursuitStudents.map((student) => (
    <li key={student.id}>
      <AStudent student={student} />
    </li>
  ));
  return <ul className='allstudents'>{studentPanels}</ul>;
}
export default AllStudents;
