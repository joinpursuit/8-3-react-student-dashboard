import React, { Component } from "react";
import "./showMore.css";

export default class ShowMore extends Component {
  constructor() {
    super();
    this.state = {
      showMore: true,
    };
  }
  requirements = (event) => {
    this.setState({ showMore: !this.state.showMore });
    event.preventDefault();
  };
  resume = (object) => {
    let icon = "❌";
    if (object.certifications.resume) {
      icon = "✅";
    }
    return icon;
  };
  linkedin = (object) => {
    let icon = "❌";
    if (object.certifications.github) {
      icon = "✅";
    }
    return icon;
  };
  interview = (object) => {
    let icon = "❌";
    if (object.certifications.mockInterview) {
      icon = "✅";
    }
    return icon;
  };
  github = (object) => {
    let icon = "❌";
    if (object.certifications.github) {
      icon = "✅";
    }
    return icon;
  };
  render() {
    const { student } = this.props;
    return (
      <div>
        <button
          id="showMore"
          onClick={(event) => {
            this.requirements(event);
          }}
        >
          {this.state.showMore ? "Show More..." : "Show Less..."}
        </button>
        <div>
          <div className={this.state.showMore ? "hidden" : "visible"}>
            <aside>
              <h4>Codewars</h4>
              <p>Current Total: {student.codewars.current.total}</p>
              <p>Last Week: {student.codewars.current.lastWeek}</p>
              <p>Goal: {student.codewars.goal.total}</p>
            </aside>
            <div>
              <h4>Scores</h4>
              <p>Assignments: {student.cohort.scores.assignments}</p>
              <p>Projects: {student.cohort.scores.projects * 100}%</p>
              <p>Assessments: {student.cohort.scores.assessments * 100}%</p>
            </div>
            <div>
              <h4>Certifications</h4>
              <p>Resume: {this.resume(student)}</p>
              <p>LinkedIn: {this.linkedin(student)}</p>
              <p>Mock Interview: {this.interview(student)}</p>
              <p>Github: {this.github(student)}</p>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    );
  }
}
