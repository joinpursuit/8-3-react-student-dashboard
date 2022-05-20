import "./CohortList.scss";

const CohortList = (props) => {
  const renderCohortList = () => {
    const { studentData, changeCohortCode } = props;

    let cohortArr = [];

    studentData.map((student) => {
      let getCohorts = student.cohort.cohortCode;

      if (!cohortArr.includes(getCohorts)) {
        cohortArr.push(getCohorts);
      }

      return cohortArr;
    });

    let keyNum = 0;

    const cohortList = cohortArr.map((cohorts) => {
      let seasonArr = [];

      let test = cohorts.toLowerCase();

      // console.log(test);
      // if (cohorts.includes("Winter")) {
      //   console.log("yes");
      // }
      // switch (cohorts) {
      //   case cohorts.includes()
      // }

      return (
        <li
          key={keyNum++}
          className="cohortCodes"
          onClick={() => changeCohortCode(cohorts)}
        >
          {cohorts}
        </li>
      );
    });

    return (
      <ul className="cohortList">
        <p
          id="allStudentsCohort"
          onClick={() => changeCohortCode("All Students")}
        >
          All Students
        </p>
        {cohortList}
      </ul>
    );
  };

  return (
    <section className="CohortSection">
      <h1>Choose a Class by Start Date</h1>
      {renderCohortList()}
    </section>
  );
};

export default CohortList;
