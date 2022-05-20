import React from "react";
import ShowMore from "./ShowMore";

const Student = (props) => {
	const { studentInfo } = props;
	const nameFormatter = (studentname) => {
		return `${studentname.preferredName} ${studentname.middleName[0]}. ${studentname.surname}`;
	};
	return (
		<div className="student" id={studentInfo.id}>
			<img src={studentInfo.profilePhoto} alt={studentInfo.id} className="student-photo" />
			<br />
			<h4>{nameFormatter(studentInfo.names)}</h4>
			<p className="email-address">{studentInfo.username} </p>
			<p>DOB: {studentInfo.dob}</p>
			<ShowMore />
		</div>
	);
};

export default Student;
