import React from 'react';
import StudentInfo from './StudentInfo'

function StudentList({ students }) {
	const studentList = students.map((student) => (
		<li key={student.id}>
			<StudentInfo student={student} />
		</li>
    ));
	return <ul className='student-dashboard'>{studentList}</ul>;
}

export default StudentList;
