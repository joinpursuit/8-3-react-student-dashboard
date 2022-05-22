import React from "react";
/**
 *  Formats a cohort code (i.e. Winter2025) to human readable text
 * @param {String} str - Cohort date to be formatted to human readable
 * @returns {String} Formatted cohort date
 */
const dateFormatter = (str) => {
	let year = str.substring(str.length - 4, str.length); //str= Fall2026; year = 2026
	return `${str.substring(0, str.length - 4)} ${year}`; //ret val= Fall 2026
};

// const sortCohorts = (order, cohorts) => {
// 	let winter = "12/1/";
// 	let summer = "6/1/";
// 	let fall = "9/1/";
// 	let spring = "3/1";
// 	let dateList= []
// 	if (order === "ascending") {
// 		dateList=cohorts.map((cohort) => {
// 			 // make Date objects? are those easily sortable?
// 		});
// 	} else if (order === "descending") {
// 	}
// };

/**
 *  Creates the CohortDirectory Component in App.js.
 * @param {JSX} props  -> info (student array); clicker: event handler to change current cohort
 * @returns List of cohorts in human readable format. Also sortable.
 */
const CohortDirectory = (props) => {
	const { info, clicker } = props;
	let cohortList = [];
	info.forEach((item) => {
		if (!cohortList.includes(dateFormatter(item.cohort.cohortCode))) {
			cohortList.push(dateFormatter(item.cohort.cohortCode));
		}
	});
	//TODO: sort cohortList at some point after populating
	cohortList = cohortList.sort();
	cohortList = cohortList.sort(function (a, b) {
		return a.substring(a.length - 4, a.length) - b.substring(b.length - 4, b.length);
	});
	cohortList.unshift("All Students"); //put this to the front post sort

	return (
		<ul className="directory">
			<h4>Choose a Class by Start Date</h4>
			<br />
			{cohortList.map((cohort) => {
				return (
					<li id={cohort} key={cohort} onClick={() => clicker(cohort)}>
						{cohort}
					</li>
				);
			})}
		</ul>
	);
};

export default CohortDirectory;
export { dateFormatter };
