import React from "react";

const Student = (props) => {
	const { studentInfo } = props;
	const nameFormatter = (studentname) => {
		return `${studentname.preferredName} ${studentname.middleName[0]}. ${studentname.surname}`;
	};
	return (
		<div id={studentInfo.id}>
			<h3>{nameFormatter(studentInfo.names)}</h3>
            
		</div>
	);
};

export default Student;
