import "./CohortList.scss";

const CohortList = (props) => {
  const getCohorts = () => {
    const { studentData } = props;

    let cohortArr = [];

    studentData.map((student) => {
      let getCohorts = student.cohort.cohortCode;

      if (!cohortArr.includes(getCohorts)) {
        cohortArr.push(getCohorts);
      }

      return cohortArr;
    });

    return renderCohortList(cohortArr);
  };

  const renderCohortList = (cohortArr) => {
    const { changeCohortCode } = props;

    const springArr = [];
    const summerArr = [];
    const fallArr = [];
    const winterArr = [];
    let cohortOrderArr = [];

    for (const cohort of cohortArr) {
      if (cohort.toLowerCase().includes("spring")) {
        springArr.push(cohort);
      } else if (cohort.toLowerCase().includes("summer")) {
        summerArr.push(cohort);
      } else if (cohort.toLowerCase().includes("fall")) {
        fallArr.push(cohort);
      } else if (cohort.toLowerCase().includes("winter")) {
        winterArr.push(cohort);
      }
    }

    cohortOrderArr = springArr.concat(summerArr, fallArr, winterArr);

    const seasons = ["Spring", "Summer", "Fall", "Winter"];
    const regexp = /(.+)(\d{4})/;

    let cohortdescendingOrder = cohortOrderArr
      .map((el) => {
        const [season, year] = regexp.exec(el).slice(1);
        return [season, year, seasons.indexOf(season[0])];
      })
      .sort((firstEle, secondEle) => {
        return secondEle[1] - firstEle[1] || 0;
      })
      .map((el) => el[0] + el[1]);

    let keyNum = 0;

    const cohortList = cohortdescendingOrder.map((cohorts) => {
      let readable = cohorts.split(/(\d+)/).join(" ");

      return (
        <li
          key={keyNum++}
          className="cohortCodes"
          onClick={() => changeCohortCode(cohorts)}
        >
          {readable}
        </li>
      );
    });

    return cohortList;
  };

  return (
    <section className="CohortSection">
      <h1>Choose a Class by Start Date</h1>
      <ul className="cohortList">
        <li
          id="allStudentsCohort"
          className="cohortCodes"
          onClick={() => props.changeCohortCode("All Students")}
        >
          All Students
        </li>
        {getCohorts()}
      </ul>
    </section>
  );
};

export default CohortList;
