import React from 'react';

function CohortList(props) {
	const { data, handleClick } = props;
	// console.log(handleClick);

	const startDates = data.map((student) => {
		return student.cohort.cohortCode;
	});

	const filterCohort = (cohortArr) => {
		// console.log(cohortArr)
		let obj = {};
		for (let i = 0; i < cohortArr.length; i++) {
			if (!obj.hasOwnProperty(cohortArr[i])) {
				obj[cohortArr[i]] = cohortArr[i];
			}
		}
		// console.log(obj);
		return Object.keys(obj);
	};

	const displayCohort = (data, handleClick) => {
		const cohortArr = data.map((student) => {
			return student.cohort.cohortCode;
		});

		const filteredCohortArr = filterCohort(cohortArr);
		const sortedCohortArr = sortedCohort(filteredCohortArr);
		sortedCohortArr.unshift('All Students');
		return sortedCohortArr.map((cohortCode, index) => {
			return (
				<li key={index} onClick={() => handleClick(cohortCode)}>
					{cohortCode === 'All Students'
						? 'All Students'
						: `${cohortCode.substring(0, cohortCode.length - 4)} 
					${cohortCode.substring(cohortCode.length - 4)}`}
				</li>
			);
		});
	};
	const sortedCohort = (filteredCohortArr) => {
		const season = ['Spring', 'Summer', 'Fall', 'Winter'];
		return filteredCohortArr.sort((cohortA, cohortB) => {
			const cohortAYear = Number(cohortA.substring(cohortA.length - 4));
			const cohortBYear = Number(cohortB.substring(cohortB.length - 4));
			const cohortASeason = cohortA.substring(0, cohortA.length - 4);
			const cohortBSeason = cohortB.substring(0, cohortB.length - 4);
			if (cohortAYear === cohortBYear) {
				return season.indexOf(cohortBSeason) - season.indexOf(cohortASeason);
			} else {
				return cohortBYear - cohortAYear;
			}
		});
	};
	return (
		<div>
			<h2>Choose a Class by Start Date</h2>

			<section>{displayCohort(data, handleClick)}</section>
		</div>
	);
}
export default CohortList;
