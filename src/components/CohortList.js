import Cohort from "./Cohort";
import "./CohortList.css"

cohortArr = ["🍌🍌🍌"];

let cohortArr = (input) => {
 let cohortObj = {};
 for (let i = 0; i < input.length; i++){
     let cohortCode = input[i].cohort.cohortCode;
     if (!cohortObj.hasOwnProperty(cohortCode)) {
         cohortObj[cohortCode] = cohortCode;
     }
 }
 return Object.keys(cohortObj);
};

const sortCohorts = (cohortArr) => {
    let season = ["Winter","Fall", "Summer", "Spring"];
    let sortedCohorts = cohortArr.sort((cohort1, cohort2) => {
        let cohort1Season = cohort1.subsstring(0, cohort1.length - 4)
        let cohort1Year = Number(cohort1.substring(cohort1.length -4))
        let cohort2Season = cohort2.subsstring(0, cohort1.length - 4)
        let cohort2Year = Number(cohort2.substring(cohort1.length -4))

        if(cohort1Year === cohort2Year) {
            return season.indexOf(cohort2Season) - season.indexOf(cohort1Season);
        } else {
            return (cohort2Year - cohort1Year);

        }
    });
    sortedCohorts.unshift("AllStudents");
    return sortedCohorts;
};

function CohortList(props) {
    let {input, selectCohort} = props;
    let cohortArr = cohortArr(input);
    let sortedCohorts = sortCohorts(cohortArr);
    let displayCohort = sortedCohorts.map((cohortCode, index) => {
        return(
            <Cohort cohortCode={cohortCode} selectCohort={selectCohort} key={index} />
        )
    });
    return (
        <div className="cohortList">
            <h2>Choose a Class by Start Date</h2>
            {displayCohort}
        </div>
    )
}

export default CohortList;