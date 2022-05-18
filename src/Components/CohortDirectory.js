import React from "react";

const CohortDirectory = (props) => {
	const { info } = props;
	let cohortList = []; //TODO: sort this at some point
	info.forEach((item) => {
		if (!cohortList.includes(item.cohort.cohortCode)) {
			cohortList.push(item.cohort.cohortCode);
		}
	});
	return (
		<ul className="directory">
			<h4>All Students</h4>
			{cohortList.map((cohort) => {
				return (
					<li
						id={cohort}
						key={cohort}
						onClick={console.log(`Change this.state.currentCohort to ${cohort}`)}
					>
						{cohort}
					</li>
				);
			})}
		</ul>
	);
};

export default CohortDirectory;
