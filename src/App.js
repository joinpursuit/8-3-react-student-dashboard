import react from "react";
import CohortList from "./Components/CohortList.js";
import StudentList from "./Components/StudentList.js";
import "./App.css";

const data = require("./data/data.json").slice();

class App extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
      cohort: "All Students",
      dynamicData: data.slice(),
      cohortsArray: createCohortsObj(data),
    };
  }

  handleClick(e) {
    let cohortCode = e.target.innerText.replaceAll(" ", "");
    this.setState({
      dynamicData: data.filter((element) => {
        return element.cohort.cohortCode.includes(cohortCode);
      }),
      cohort: e.target.innerText,
    });
    console.log(this.state);
  }

  handleClick2() {
    this.setState({
      cohort: "All Students",
      dynamicData: data.slice(),
    });
  }

  render() {
    return (
      <div>
        <h1 className="header">Student Dashboard</h1>
        <main className="main">
          <CohortList
            handleClick={() => this.handleClick2()}
            cohortsArray={this.state.cohortsArray.map((element, i) => {
              return (
                <button onClick={(e) => this.handleClick(e)} key={i}>
                  {element}
                </button>
              );
            })}
          />
          <StudentList
            selectedCohort={this.state.cohort}
            dataLength={this.state.dynamicData.length}
            data={this.state.dynamicData}
          />
        </main>
      </div>
    );
  }
}

// Helper Functions

/**
 * createCohortsObj takes an array of objects, specifically meant to take in the data.json object, and returns an array of cohorts that correspond to the specific entering class of students within the original array
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
    .sort((a, b) => {
      if (a.includes("2026") && b.includes("2025")) {
        return -1;
      }
    });
}

export default App;
