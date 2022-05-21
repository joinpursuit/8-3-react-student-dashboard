import React from 'react';
import StudentInfo from './StudentInfo';

function StudentList(props) {
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
					<StudentInfo student={student} />
				</li>
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
			<p className='total'>Total:{displayStudentList(students).length}</p>
			<ul className='student-info'>{displayStudentList(students)}</ul>;
		</div>
	);
}

export default StudentList;
