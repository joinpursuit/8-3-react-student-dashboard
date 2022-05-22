import React from "react";
import "./ShowMore.css";
import Form from "./Form";
class ShowMore extends React.Component {
  constructor() {
    super();
    this.state = {
      showMoreText: "Show More...",
      showMoreVisibility: true,
    };
  }

  handleClick = (event) => {
    if (event.target.textContent === "Show More...") {
      this.setState({
        showMoreText: "Show Less..",
        showMoreVisibility: !this.state.showMoreVisibility,
      });
    } else {
      this.setState({
        showMoreText: "Show More...",
        showMoreVisibility: !this.state.showMoreVisibility,
      });
    }
  };

  passFailImage = (check) => {
    return check ? (
      <img
        src="https://emojipedia-us.s3.amazonaws.com/source/skype/289/check-mark_2714-fe0f.png"
        alt="pass"
      />
    ) : (
      <img
        className="float-right"
        src="https://www.dictionary.com/e/wp-content/uploads/2018/05/cross-mark.png"
        alt="fail"
      />
    );
  };

  checkAssignment = (percent) => {
    if (percent >= 100) {
      return "green";
    } else if (percent >= 50 && percent < 100) {
      return "yellow";
    } else {
      return "red";
    }
  };

  render() {
    const { student, handleComments } = this.props;
    const { codewars, certifications, cohort } = student;
    const percentage = Math.round(
      (codewars.current.total / codewars.goal.total) * 100
    );
    return (
      <div>
        <p
          className="show-more"
          onClick={(event) => {
            this.handleClick(event);
          }}
        >
          {this.state.showMoreText}
        </p>
        <div
          className={
            this.state.showMoreVisibility ? "hidden" : "info-container"
          }
        >
          <div>
            <h3>CodeWars</h3>
            <p>Current Total: {codewars.current.total}</p>
            <p>Last Week: {codewars.current.lastWeek}</p>
            <p>Goal: {codewars.goal.total}</p>
            <p className={this.checkAssignment(percentage)}>
              Percentage of Goal Achieved: {percentage}%
            </p>
          </div>
          <div>
            <h3>Scores</h3>
            <p>Assignments: {cohort.scores.assignments * 100}%</p>
            <p>Projects: {cohort.scores.projects * 100}%</p>
            <p>Assessments: {cohort.scores.assessments * 100}%</p>
          </div>
          <div>
            <h3>Certifications</h3>
            <p>Resume: {this.passFailImage(certifications.resume)}</p>
            <p>LinkedIn: {this.passFailImage(certifications.linkedin)}</p>
            <p>Mock Interview: {this.passFailImage(certifications.github)}</p>
            <p>GitHub: {this.passFailImage(certifications.mockInterview)}</p>
          </div>
          <div className="form">
            <Form student={student} handleComments={() => handleComments} />
          </div>
        </div>
      </div>
    );
  }
}
export default ShowMore;
