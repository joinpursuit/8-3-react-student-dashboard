import React from 'react';
import studentData from './data.json';

const StudentList = (props) => {
	const studentArr = [
		prefferedName,
		middleName.splice(0),
		surname,
		username,
		dob,
	];

	return studentArr.map((student) => {
		return (
			<>
				<h4>All Students</h4>
				<p>Total Students:</p>
			</>
		);
	});
};

export default StudentList;
