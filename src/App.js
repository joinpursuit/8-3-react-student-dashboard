import react from "react";
import CohortList from "./Components/CohortList.js";
import StudentList from "./Components/StudentList.js";
import "./App.css";

const rawData = require("./data/data.json");

class App extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
      copyOfData: rawData.slice(),
      numberOfStudents: rawData.legnth,
      cohortsArray: createCohortsObj(rawData),
    };
  }

  render() {
    return (
      <div>
        <h1 className="header">Student Dashboard</h1>
        <main className="main">
          <CohortList />
          <StudentList data={this.state.numberOfStudents} />
        </main>
      </div>
    );
  }
}

// Helper Functions
/**
 * createCohortsObj takes an array of objects and
 * @param {[Objects]} data
 * @returns {[Strings]}
 */
function createCohortsObj(data) {
  let cohortsArray = [];

  data.forEach((element) => {
    let cohortCode = element.cohort.cohortCode;
    if (!cohortsArray.includes(cohortCode)) {
      cohortsArray.push(cohortCode);
    }
  });

  return cohortsArray
    .map((element) => {
      let splitPoint = element.indexOf("2");
      return element.slice(0, splitPoint) + " " + element.slice(splitPoint);
    })
    .sort();
}

export default App;
