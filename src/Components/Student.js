import React from "react";
import ShowMore from "./ShowMore";

const Student = (props) => {
	const { studentInfo } = props;
	const nameFormatter = (studentname) => {
		return `${studentname.preferredName} ${studentname.middleName[0]}. ${studentname.surname}`;
	};
	let onTrackToGraduate = "";
	if (
		studentInfo.certifications.resume &&
		studentInfo.certifications.linkedin &&
		studentInfo.certifications.github &&
		studentInfo.certifications.mockInterview
	) {
		onTrackToGraduate = "On Track to Graduate";
	}
	return (
		<div className="student" id={studentInfo.id}>
			<div>
				<img
					src={studentInfo.profilePhoto}
					alt={studentInfo.id}
					className="student-photo"
				/>
				<br />
				<h4>{nameFormatter(studentInfo.names)}</h4>
				<p className="email-address">{studentInfo.username} </p>
				<p>DOB: {studentInfo.dob}</p>
				<ShowMore studentInfo={studentInfo} key={studentInfo.id} />
			</div>
			<div className="on-track">
				<p>{onTrackToGraduate}</p>
			</div>
		</div>
	);
};

export default Student;
