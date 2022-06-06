import React from "react";
import OneNotes from "./Deets.js";

function Show(props) {
  const check = (boolean) => (boolean ? "✅" : " ❌");
  const {
    student,
    author,
    authorStuff,
    comment,
    commentStuff,
    submission,
    newSubmission,
  } = props;
  const { resume, linkedin, github, mockInterview } = student.certifications;
  const { assignments, projects, assessments } = student.cohort.scores;
  const { total, lastWeek } = student.codewars.current;
  const goal = student.codewars.goal.total;
  const percentAchieved = ((total / goal) * 100).toFixed();
  return (
    <div>
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
          <div>Resume:{check(resume)}</div>
          <div>LinkdIn:{check(linkedin)}</div>
          <div>Mock Interview:{check(mockInterview)}</div>
          <div>GitHub: {check(github)} </div>
        </section>
      </div>
      <OneNotes
        submission={submission}
        author={author}
        authorStuff={authorStuff}
        comment={comment}
        commentStuff={commentStuff}
        notes={student.notes}
        newSubmission={newSubmission}
      />
    </div>
  );
}

export default Show;