import React from "react";
import "./extendedinfo.css";
import FeedbackForm from "./FeedbackForm.js";

const percentColor = (percent) => {
  if (percent >= 100) {
    return "green";
  } else if (percent >= 50) {
    return "yellow";
  } else {
    return "red";
  }
};
function ExtendedInfo(props) {
  const emoji = (boolean) => (boolean ? "✅" : " ❌");
  const {
    student,
    person,
    commentNameHandler,
    comment,
    commentHandler,
    submitHandler,
    newReviews,
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
          <div>
            Percent of Goal Achieved:
            <span className={percentColor(percentAchieved)}>
              {percentAchieved} %
            </span>
          </div>
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
          <div>LinkdIn:{emoji(linkedin)}</div>
          <div>Mock Interview:{emoji(mockInterview)}</div>
          <div>GitHub: {emoji(github)} </div>
        </section>
      </div>
      <FeedbackForm
        submitHandler={submitHandler}
        person={person}
        commentNameHandler={commentNameHandler}
        comment={comment}
        commentHandler={commentHandler}
        notes={student.notes}
        newReviews={newReviews}
      />
    </div>
  );
}

export default ExtendedInfo;
