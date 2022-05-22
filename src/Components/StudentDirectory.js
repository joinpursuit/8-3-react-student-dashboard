import React from "react";
import Student from "./Student";

/**
 * Populates web page with list of Students.
 * @param {*} props: info (Object[]), cohort (String)
 * @returns List of students of a given cohort.
 */
const StudentDirectory = (props) => {
	const { info, cohort } = props;
	return (
		<div className="student-directory">
			<div className="student-header">
				<h3>{cohort}</h3>
				<p>Total Students: {info.length}</p>
			</div>
			{info.map((student) => {
				return <Student key={student.id} studentInfo={student} />;
			})}
		</div>
	);
};

export default StudentDirectory;
