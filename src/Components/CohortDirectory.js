import React from "react";

const dateFormatter = (str) => {
	let year = str.substring(str.length - 4, str.length); //str= Fall2026; year = 2026
	return `${str.substring(0, str.length - 4)} ${year}`; //ret val= Fall 2026
};
const CohortDirectory = (props) => {
	const { info, clicker } = props;
	let cohortList = [];
	info.forEach((item) => {
		if (!cohortList.includes(item.cohort.cohortCode)) {
			cohortList.push(item.cohort.cohortCode);
		}
	});
	//TODO: sort cohortList at some point after populating
	cohortList.unshift("All Students"); //put this to the front post sort

	return (
		<ul className="directory">
			<h4>Choose a Class by Start Date</h4>
			{cohortList.map((cohort) => {
				return (
					<li id={cohort} key={cohort} onClick={() => clicker(cohort)}>
						{dateFormatter(cohort)}
					</li>
				);
			})}
		</ul>
	);
};

export default CohortDirectory;
