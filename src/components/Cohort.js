
const cohortStuff = (cohortCode) => {
    if (cohortCode === "All Students") return "All Students";

    return `${cohortCode.substring(0, cohortCode.length -4)}
            ${cohortCode.substring(cohortCode.length -4)}`
};

function Cohort(props) {
    const {cohortCode, selectCohort} = props;

    return(
        <div className="cohort" onClick={()=> selectCohort(cohortCode)}>
            {cohortStuff(cohortCode)}
        </div>
    )
};

export default Cohort;