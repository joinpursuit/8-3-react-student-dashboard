import React from "react";
import "./Details.css";

class Details extends React.Component {
  constructor() {
    super();
    this.state = {
      commenter: "",
      comment: "",
    };
  }

  updateCommentHandler = (event) => {
    const { value } = event.target;

    this.setState({
      comment: value,
    });
  };

  updateCommenterHandler = (event) => {
    const { value } = event.target;

    this.setState({
      commenter: value,
    });
  };

  formSubmitHandler = (event, commentsHandler) => {
    event.preventDefault();
    const commenter = event.target.commenter.value;
    const comment = event.target.comment.value;

    // const comment = `${event.target.commenter.value}. says, "${event.target.comment.value}"`;
    event.target.commenter.value = "";
    event.target.comment.value = "";
    this.setState({
      commenter: commenter,
      comment: comment,
    });
  };

  displayComments = (comments, id) => {
    if (comments.hasOwnProperty(id)) {
      return comments[id].map((comment, index) => {
        return <li key={index}>{comment}</li>;
      });
    }
  };

  render() {
    const { id, codewars } = this.props.studentInfo;
    const { assignments, projects, assessments } =
      this.props.studentInfo.cohort.scores;
    const { resume, linkedin, github, mockInterview } =
      this.props.studentInfo.certifications;

    const { comments, commentsHandler } = this.props;

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
          <form onSubmit={this.formSubmitHandler}>
            <label htmlFor="commenter">Commenter Name</label>
            <input
              type="text"
              id="commenter"
              name="commenter"
              onChange={this.updateCommenterHandler}
              value={this.state.commenter}
            />
            <br />
            <label htmlFor="comment">Comment</label>
            <input
              type="text"
              id="comment"
              name="comment"
              onChange={this.updateCommentHandler}
              value={this.state.comment}
            />
            <button
              onClick={() =>
                commentsHandler(id, this.state.commenter, this.state.comment)
              }
            >
              Add Note
            </button>
          </form>
        </div>
        <ul>{this.displayComments(comments, id)}</ul>
      </div>
    );
  }
}

export default Details;
