import React from "react";
import Student from "./Student";
// import dateFormatter from "./CohortDirectory";

const StudentDirectory = (props) => {
	const { info, cohort } = props;
	let currentStudentList = info;
	// if (cohort !== "All Students") {
	// 	currentStudentList = info.filter((student) => {
	// 		return dateFormatter(student.cohort.cohortCode) === cohort;
	// 	});
	// }
	return (
		<div>
			<h3>{cohort}</h3>
			<p>Total Students: {currentStudentList.length}</p>
			{currentStudentList.map((student) => {
				return <Student key={student.id} studentInfo={student} />;
			})}
		</div>
	);
};

export default StudentDirectory;
