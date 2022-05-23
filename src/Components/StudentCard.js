import React from "react";
import "./StudentCard.css";

class StudentCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formattedDOb: formaDOB(this.props.birthday),
      gradReqs: this.props.gradReqs,
      assessments: this.props.assessments,
      codewars: this.props.codewars,
    };
  }

  handleMouseOver() {}

  render() {
    const passedReqs = Object.values(this.state.gradReqs).includes(false);
    const passedCodewars = this.state.codewars.current.total > 600;

    let goalPerc = turnToPercent(
      this.state.codewars.current.total / this.state.codewars.goal.total
    );

    return (
      <div className="student-card">
        <img id="pic" src={this.props.pic} alt="Profile" width="100px" />
        <div id="student-profile">
          <p>
            <strong>{this.props.name}</strong>
          </p>
          <p>{this.props.email}</p>
          <p>
            <span className="green-text">Birthday: </span>
            {this.state.formattedDOb}
          </p>
          <br></br>
          <p className="green-text underline">Show More...</p>
        </div>
        <div id="grad-message">
          {!passedReqs && passedCodewars ? "On Track to Graduate" : ""}
        </div>
        <section className="show-more-container">
          <div id="codewars-div">
            <h4>CodeWars:</h4>
            <p>
              <span className="green-text">Current Total:</span>{" "}
              {this.state.codewars.current.total}
            </p>
            <p>
              <span className="green-text">Last Week:</span>{" "}
              {this.state.codewars.current.lastWeek}
            </p>
            <p>
              <span className="green-text">Goal:</span>{" "}
              {this.state.codewars.goal.total}
            </p>
            <p>
              <span className="green-text">Percent of Goal Achieved:</span>{" "}
              {goalPerc}%
            </p>
          </div>
          <div id="scores-div">
            <h4>Scores:</h4>
            <p>
              <span className="green-text">Assigments:</span>{" "}
              {turnToPercent(this.state.assessments.assignments)}%
            </p>
            <p>
              <span className="green-text">Projects:</span>{" "}
              {turnToPercent(this.state.assessments.projects)}%
            </p>
            <p>
              <span className="green-text">Assessments:</span>{" "}
              {turnToPercent(this.state.assessments.assessments)}%
            </p>
          </div>
          <div id="certs-div">
            <h4>Certifications:</h4>
            <p>
              <span className="green-text">Resume</span>:{" "}
              {this.state.gradReqs.resume ? "✅" : "❌"}
            </p>
            <p>
              <span className="green-text">Linked-In:</span>{" "}
              {this.state.gradReqs.linkedin ? "✅" : "❌"}
            </p>
            <p>
              <span className="green-text">Mock Interview:</span>{" "}
              {this.state.gradReqs.mockInterview ? "✅" : "❌"}
            </p>
            <p>
              <span className="green-text">Git-Hub:</span>{" "}
              {this.state.gradReqs.github ? "✅" : "❌"}
            </p>
          </div>
        </section>
      </div>
    );
  }
}

// Helper Functions

/**
 * formaDOB coverts an inputed string representing a date in "dd/mm/yyyy" format and returns a string with "Month Day, Year" format
 * @param {string} rawDate
 * @returns {string}
 */
function formaDOB(rawDate) {
  let formattedDate = rawDate.split("/");

  switch (formattedDate[0]) {
    case "1":
      return `January ${formattedDate[1]}, ${formattedDate[2]}`;
    case "2":
      return `February ${formattedDate[1]}, ${formattedDate[2]}`;
    case "3":
      return `March ${formattedDate[1]}, ${formattedDate[2]}`;
    case "4":
      return `April ${formattedDate[1]}, ${formattedDate[2]}`;
    case "5":
      return `May ${formattedDate[1]}, ${formattedDate[2]}`;
    case "6":
      return `June ${formattedDate[1]}, ${formattedDate[2]}`;
    case "7":
      return `July ${formattedDate[1]}, ${formattedDate[2]}`;
    case "8":
      return `August ${formattedDate[1]}, ${formattedDate[2]}`;
    case "9":
      return `September ${formattedDate[1]}, ${formattedDate[2]}`;
    case "10":
      return `October ${formattedDate[1]}, ${formattedDate[2]}`;
    case "11":
      return `November ${formattedDate[1]}, ${formattedDate[2]}`;
    case "12":
      return `December ${formattedDate[1]}, ${formattedDate[2]}`;
  }

  return formattedDate;
}

function turnToPercent(num) {
  let res = num * 100;
  return res.toFixed(0);
}

export default StudentCard;
