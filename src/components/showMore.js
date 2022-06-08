import React, { Component } from "react";

export default class showMore extends Component {
  constructor() {
    super();
    this.state = {
      showMore: true,
    };
  }
  requirements = () => {
    this.setState({ showMore: !this.state.showMore });
  };
  codewars(object) {
    let currentTotal = object.codewars.current.total;
    let previousTotal = object.codewars.current.lastWeek;
    let goal = object.codewars.goal.total;
    let percentAchieved = ((currentTotal / goal) * 100).toFixed(2);
  }
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
    const { semester } = this.props;
    return (
      <div>
        <button id="showMore" onClick={this.requirements}>
          {this.state.showMore ? "Show More..." : "Show Less..."}
        </button>
        <div>
          <div className="bio">
            <aside>
              <h4>Codewars</h4>
              <p>Current Total: {semester.codewars.current.total}</p>
              <p>Last Week: {semester.codewars.current.lastWeek}</p>
              <p>Goal: {semester.codewars.goal.total}</p>
              <div>{this.codewars(semester)}</div>
            </aside>
            <div>
              <h4>Scores</h4>
              <p>Assignments: {semester.cohort.current.total}</p>
              <p>Projects: {semester.cohort.scores.projects * 100}%</p>
              <p>Assessments: {semester.cohort.scores.assessments * 100}%</p>
            </div>
            <div>
              <h4>Certifications</h4>
              <p>Resume: {this.resume(semester)}</p>
              <p>LinkedIn: {this.linkedin(semester)}</p>
              <p>Mock Interview: {this.interview(semester)}</p>
              <p>Github: {this.github(semester)}</p>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    );
  }
}
