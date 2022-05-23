import React from 'react';

function CohortList(props) {
  const { data, handleCohortList } = props;

  /**
   * filterCohort to filter the cohort code array
   * @param {Object[]} cohortArr - An array storing all cohort codes.
   * @returns {Object[]} - A filtered array of strings representing all cohort codes.
   */
  const filterCohort = (cohortArr) => {
    let obj = {};
    for (let i = 0; i < cohortArr.length; i++) {
      if (!obj.hasOwnProperty(cohortArr[i])) {
        obj[cohortArr[i]] = cohortArr[i];
      }
    }
    console.log('This is Object:', Object.keys(obj));
    console.log('This is type of Object:', typeof Object.keys(obj));
    return Object.keys(obj);
  };

  const displayCohort = (data, handleCohortList) => {
    const cohortArr = data.map((student) => {
      return student.cohort.cohortCode;
    });

    const filteredCohortArr = filterCohort(cohortArr);
    const sortedCohortArr = sortedCohort(filteredCohortArr);
    sortedCohortArr.unshift('All Students');
    return sortedCohortArr.map((cohortCode, index) => {
      return (
        <p key={index} onClick={() => handleCohortList(cohortCode)}>
          {cohortCode === 'All Students'
            ? 'All Students'
            : `${cohortCode.substring(0, cohortCode.length - 4)} 
					${cohortCode.substring(cohortCode.length - 4)}`}
        </p>
      );
    });
  };

  /**
   * sortedCohort to sort through the array of all cohort codes.
   * @param {Object[]} filteredCohortArr - An array of all cohort codes with no space in between the season name and year (ex: Winter2025).
   * @returns {Strings} - Sorted strings representing all cohort codes with space (ex: Winter 2025)
   */
  const sortedCohort = (filteredCohortArr) => {
    const seasons = ['Spring', 'Summer', 'Fall', 'Winter'];
    return filteredCohortArr.sort((cohortA, cohortB) => {
      const cohortAYear = Number(cohortA.substring(cohortA.length - 4));
      const cohortBYear = Number(cohortB.substring(cohortB.length - 4));
      const cohortASeason = cohortA.substring(0, cohortA.length - 4);
      const cohortBSeason = cohortB.substring(0, cohortB.length - 4);
      if (cohortAYear === cohortBYear) {
        return seasons.indexOf(cohortBSeason) - seasons.indexOf(cohortASeason);
      } else {
        console.log('this is cohort b year:', cohortBYear);
        return cohortBYear - cohortAYear;
      }
    });
  };
  return (
    <div className='cohort-list'>
      <h4>
        <strong>Choose a Class by Start Date</strong>
      </h4>
      <section className='cohort-code'>
        {displayCohort(data, handleCohortList)}
      </section>
    </div>
  );
}
export default CohortList;
