import React from "react";

const Student = (props) => {
	const { studentInfo } = props;
	const nameFormatter = (studentname) => {
		return `${studentname.preferredName} ${studentname.middleName[0]}. ${studentname.surname}`;
	};
	return (
		<div className="student" id={studentInfo.id}>
			<img src={studentInfo.profilePhoto} alt={studentInfo.id} className="student-photo"/>
			<br />
			<h4>{nameFormatter(studentInfo.names)}</h4>
			<p>{studentInfo.dob}</p>
		</div>
	);
};

export default Student;
