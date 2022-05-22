import "./Cohort.css";

/**
 *  Add a space between the season and year of the CohortCode, Ex: "Winter2025"
 * becomes "Winter 2025"
 * @param {String} cohortCode - semster of the cohort
 * @returns cohort code with a space between season and year, "AllStudents"
 * will return "All Students"
 */
export const parseCohortCode = (cohortCode) => {
  if (cohortCode === "AllStudents") return "All Students";

  return `${cohortCode.substring(
    0,
    cohortCode.length - 4
  )} ${cohortCode.substring(cohortCode.length - 4)}`;
};

/*renders the cohort. Ex: Winter 2025 , when click on the cohort, StudentList
Component will only display students who are in the selected cohort */
function Cohort(props) {
  const { cohortCode, selectCohortHandler } = props;

  return (
    <div className="cohort" onClick={() => selectCohortHandler(cohortCode)}>
      {parseCohortCode(cohortCode)}
    </div>
  );
}

export default Cohort;
