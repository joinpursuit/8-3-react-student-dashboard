import React from "react";
import InstructorForm from "./InstructorForm";

export default class ShowMore extends React.Component {
  constructor() {
    super();
    this.state = {
      showMore: true,
    };
  }

  graduationCriteria = () => {
    this.setState({ showMore: !this.state.showMore });
  };

  resumeAuthenticator = (object) => {
    let icon = "❌";
    if (object.certifications.resume) {
      icon = "✅";
    }
    return icon;
  };
  linkedinAuthenticator = (object) => {
    let icon = "❌";
    if (object.certifications.linkedin) {
      icon = "✅";
    }
    return icon;
  };
  githubAuthenticator = (object) => {
    let icon = "❌";
    if (object.certifications.github) {
      icon = "✅";
    }
    return icon;
  };
  mockInterviewAuthenticator = (object) => {
    let icon = "❌";
    if (object.certifications.mockInterview) {
      icon = "✅";
    }
    return icon;
  };

  codewarsPercentageComparator(object) {
    let initialText = "Percent of Goal Achieved: ";
    let percentText = "%";
    let currentTotal = object.codewars.current.total;
    let goal = object.codewars.goal.total;
    let percentage = ((currentTotal / goal) * 100).toFixed(2);
    if (percentage > 100) {
      return (
        <p className="greaterThanOneHundred">
          {initialText + percentage + percentText}
        </p>
      );
    } else if (percentage >= 50 && percentage <= 100) {
      return (
        <p className="betweenFiftyAndHundred">
          {initialText + percentage + percentText}
        </p>
      );
    } else if (percentage < 50) {
      return (
        <p className="underFifty">{initialText + percentage + percentText}</p>
      );
    }
  }

  render() {
    const { semester } = this.props;

    return (
      <div>
        <button id="showMore" onClick={this.graduationCriteria}>
          {this.state.showMore ? "Show More..." : "Show Less..."}
        </button>
        <div
          style={{ visibility: this.state.showMore ? "hidden" : "visible" }}
          id="hiddenSection"
        >
          <div className="studentBio">
            <aside>
              <h4>Codewars</h4>
              <p>Current Total: {semester.codewars.current.total}</p>
              <p>Last Week: {semester.codewars.current.lastWeek}</p>
              <p>Goal: {semester.codewars.goal.total}</p>
              <div>{this.codewarsPercentageComparator(semester)}</div>
            </aside>
            <div>
              <h4>Scores</h4>
              <p>Assignments: {semester.cohort.scores.assignments * 100}%</p>
              <p>Projects: {semester.cohort.scores.projects * 100}%</p>
              <p>Assessments: {semester.cohort.scores.assessments * 100}%</p>
            </div>
            <div>
              <h4>Certifications</h4>
              <p>Resume: {this.resumeAuthenticator(semester)}</p>
              <p>LinkedIn: {this.linkedinAuthenticator(semester)}</p>
              <p>Mock Interview: {this.mockInterviewAuthenticator(semester)}</p>
              <p>Github: {this.githubAuthenticator(semester)}</p>
            </div>
          </div>
          <div className="formSection"></div>
          <InstructorForm semester={semester} />
        </div>
      </div>
    );
  }
}
