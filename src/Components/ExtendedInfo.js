import React from "react";

const ExtendedInfo = (props) => {
  const emoji = (boolean) =>
    boolean ? <div>{`\u{2705}`}</div> : <div>{`\u{274C}`}</div>;
  const { student, showmoreHandler } = props;
  const { resume, linkdin, github, mockInterview } = student.certifications;
  const { assignments, projects, assessments } = student.cohort.scores;
  const { total, lastWeek } = student.codewars.current;
  const goal = student.codewars.goal.total;
  const percentAchieved = ((total / goal) * 100).toFixed();
  return (
    <div className="container">
      <section>
        <h5>Codewars:</h5>
        <li>Current Total: {total} </li>
        <li>Last Week: {lastWeek} </li>
        <li>Goal: {goal} </li>
        <li>Percent of Goal Achieved: {percentAchieved} %</li>
      </section>
      <section>
        <h5>Scores</h5>
        <li>Assignments: {assignments * 100}%</li>
        <li>Projects: {projects * 100}%</li>
        <li>Assessments: {assessments * 100}%</li>
      </section>
      <section>
        <h5>Certifications</h5>
        <li>Resume:{emoji(resume)}</li>
        <li>LinkdIn:{emoji(linkdin)}</li>
        <li>Mock Interview:{emoji(mockInterview)}</li>
        <li>GitHub:{emoji(github)} </li>
      </section>
    </div>
  );
};

export default ExtendedInfo;
