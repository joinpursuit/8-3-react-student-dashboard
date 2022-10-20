import Cohort from "./Cohort";
import "./CohortList.css";

/**
 * Go through the array of student objects filter out the repeated cohortCode
 * @param {[]Object} data - An array of student objects, each object contains info of the student
 * @returns An array of cohortCode, each cohortCode is unique
 */
const getCohortArray = (data) => {
  let cohortObj = {};
  for (let i = 0; i < data.length; i++) {
    const cohortCode = data[i].cohort.cohortCode;
    if (!cohortObj.hasOwnProperty(cohortCode)) {
      cohortObj[cohortCode] = cohortCode;
    }
  }

  return Object.keys(cohortObj);
};

/**
 *Sort the cohortCode in the descending order
 * @param {[]String} cohortArray -an array of cohortCodes
 * @returns sorted cohortCode array
 */
const sortCohortArray = (cohortArray) => {
  const season = ["Spring", "Summer", "Fall", "Winter"];

  const sortedCohortArray = cohortArray.sort((cohortA, cohortB) => {
    const yearOfCohortA = Number(cohortA.substring(cohortA.length - 4));
    const seasonOfCohortA = cohortA.substring(0, cohortA.length - 4);
    const yearOfCohortB = Number(cohortB.substring(cohortB.length - 4));
    const seasonOfCohortB = cohortB.substring(0, cohortB.length - 4);

    if (yearOfCohortA === yearOfCohortB) {
      return season.indexOf(seasonOfCohortB) - season.indexOf(seasonOfCohortA);
    } else {
      return yearOfCohortB - yearOfCohortA;
    }
  });

  sortedCohortArray.unshift("AllStudents");
  return sortedCohortArray;
};

//Display all cohortCodes
function CohortList(props) {
  const { data, selectCohortHandler } = props;
  const cohortArray = getCohortArray(data);
  const sortedCohortArray = sortCohortArray(cohortArray);

  const displayCohort = sortedCohortArray.map((cohortCode, index) => {
    return (
      <Cohort
        cohortCode={cohortCode}
        selectCohortHandler={selectCohortHandler}
        key={index}
      />
    );
  });

  return (
    <div className="cohortList">
      <h2>Choose a Class by Start Date</h2>
      {displayCohort}
    </div>
  );
}

export default CohortList;
