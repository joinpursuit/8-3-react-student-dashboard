import React from "react";
import Student from "./Student";

const StudentDirectory = (props) => {
	const { info, cohort } = props;
	return (
		<div>
			<h3>{cohort}</h3>
			{info.map((student) => {
				return <Student key={student.id} studentInfo={student} />;
			})}
		</div>
	);
};

export default StudentDirectory;
