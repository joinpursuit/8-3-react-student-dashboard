import React from "react";
import "./Details.css";

class Details extends React.Component {
  render() {
    const { codewars } = this.props.studentInfo;
    const { assignments, projects, assessments } =
      this.props.studentInfo.cohort.scores;
    const { resume, linkedin, github, mockInterview } =
      this.props.studentInfo.certifications;

    const { comments, addCommentsHandler } = this.props;

    return (
      <div>
        <div>
          <h4>Codewars:</h4>
          <p>Current Total: {codewars.current.total}</p>
          <p>Last Week: {codewars.current.lastWeek}</p>
          <p>Goal: {codewars.goal.total}</p>
          <p>
            Percen of Goal Achieved:
            {((codewars.current.total / codewars.goal.total) * 100).toFixed(2)}%
          </p>
        </div>
        <div>
          <h4>Scores:</h4>
          <p>Assignment:{assignments * 100}%</p>
          <p>Projects:{projects * 100}%</p>
          <p>Assessments:{assessments * 100}%</p>
        </div>
        <div>
          <h4>Certifications:</h4>
          <p>Resume: {resume ? "✅" : "❌"}</p>
          <p>Linkedin: {linkedin ? "✅" : "❌"}</p>
          <p>Mock Interview: {mockInterview ? "✅" : "❌"}</p>
          <p>GitHub: {github ? "✅" : "❌"}</p>
        </div>
        <div>
          <h4>One-on-One Notes</h4>
          <form onSubmit={addCommentsHandler}>
            <label htmlFor="commenter">Commenter Name</label>
            <input type="text" id="commenter" name="commenter" />
            <br />
            <label htmlFor="comment">Comment</label>
            <input type="text" id="comment" name="comment" />
            <button>Add Note</button>
          </form>
        </div>
        <ul>
          {comments.map((comment, index) => {
            return <li key={index}>{comment}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default Details;
