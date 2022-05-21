import React from 'react';
import StudentInfo from './StudentInfo';

function StudentList(props) {
	const { students, cohortCode } = props;

	const displayStudentList = (students) => {
		const filteredStudentArr = students.filter((student) => {
            if (cohortCode === 'All Students') {
                return true
            }
			return student.cohort.cohortCode === cohortCode;
		});
		return filteredStudentArr.map((student) => {
			return (
				<li key={student.id}>
					<StudentInfo student={student} />
				</li>
			);
		});
	};
	return <ul className='student-info'>{displayStudentList(students)}</ul>;
}

export default StudentList;
