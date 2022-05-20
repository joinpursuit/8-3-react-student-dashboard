import React from 'react';

const CohortList = ({ handleClick }) => {
	const eachCohort = [
		'All Students',
		'Winter 2026',
		'Fall 2026',
		'Summer 2026',
		'Spring 2026',
		'Winter 2025',
		'Fall 2025',
		'Summer 2025',
		'Spring 2025',
	];
};

const showCohorts = eachCohort.map((cohort) => {
	<div>
		<h3 id={cohort}> onClick={handleClick}</h3>
	</div>;

	return (
		<div>
			<h2>Choose a Class by Start Date</h2>
			<p>All Students</p>
			<section>{eachCohort}</section>
		</div>
	);
});

export default CohortList;
