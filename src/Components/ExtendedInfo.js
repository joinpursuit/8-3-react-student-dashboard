import React from "react";
import "./extendedinfo.css";

function ExtendedInfo(props) {
  const emoji = (boolean) => (boolean ? " ✅" : " ❌");
  const { student } = props;
  const { resume, linkdin, github, mockInterview } = student.certifications;
  const { assignments, projects, assessments } = student.cohort.scores;
  const { total, lastWeek } = student.codewars.current;
  const goal = student.codewars.goal.total;
  const percentAchieved = ((total / goal) * 100).toFixed();
  return (
    <div className="container">
      <section className="sec">
        <h4>Codewars:</h4>
        <div>Current Total: {total} </div>
        <div>Last Week: {lastWeek} </div>
        <div>Goal: {goal} </div>
        <div>Percent of Goal Achieved: {percentAchieved} %</div>
      </section>
      <section className="sec">
        <h4>Scores</h4>
        <div>Assignments: {assignments * 100}%</div>
        <div>Projects: {projects * 100}%</div>
        <div>Assessments: {assessments * 100}%</div>
      </section>
      <section className="sec">
        <h4>Certifications</h4>
        <div>Resume:{emoji(resume)}</div>
        <div>LinkdIn:{emoji(linkdin)}</div>
        <div>Mock Interview:{emoji(mockInterview)}</div>
        <div>GitHub: {emoji(github)} </div>
      </section>
    </div>
  );
}

export default ExtendedInfo;
