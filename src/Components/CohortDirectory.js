import React from "react";

const dateFormatter = (str) => {
	let year = str.substring(str.length - 4, str.length);
	return `${str.substring(0, str.length - 4)} ${year}`;
};
const CohortDirectory = (props) => {
	const { info } = props;
	let cohortList = [];
	info.forEach((item) => {
		if (!cohortList.includes(dateFormatter(item.cohort.cohortCode))) {
			cohortList.push(dateFormatter(item.cohort.cohortCode));
		}
	});
	//TODO: sort cohortList at some point after populating
	cohortList.unshift("All Students"); //put this to the front post sort

	return (
		<ul className="directory">
			<h4>All Students</h4>
			{cohortList.map((cohort) => {
				return (
					<li id={cohort} key={cohort} onClick={() => console.log(cohort)}>
						{cohort}
					</li>
				);
			})}
		</ul>
	);
};

export default CohortDirectory;
