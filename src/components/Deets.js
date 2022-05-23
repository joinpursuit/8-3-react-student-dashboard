import React from "react";
import "./Deets.css";

class Deets extends React.Component {
  constructor() {
    super();
    this.state = {
      author: "",
      comment: "",
    };
  }
  clear = () => {
    this.setState({
      author: "",
      comment: "",
    });
  };

  update = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  submitForm = (event) => {
    event.preventDefault();
  };

  showComments = (comments, id) => {
    if (comments.hasOwnProperty(id)) {
      return comments[id].map((comment, index) => {
        return <li key={index}>{comment}</li>;
      });
    }
  };

  colorPercent = (codewarsScore) => {
    if (codewarsScore >= 100) {
      return "green";
    } else if (codewarsScore >= 50) {
      return "yellow";
    } else {
      return "red";
    }
  };

  render() {
    const { id, codewars } = this.props.studentInfo;
    const { assignments, projects, assessments } =
      this.props.studentInfo.cohort.scores;
    const { resume, linkedin, github, mockInterview } =
      this.props.studentInfo.certifications;

    const { comments, commentsHandler } = this.props;
    const codewarsScore = Number(
      ((codewars.current.total / codewars.goal.total) * 100).toFixed(2)
    );

    return (
      <div className="details">
        <div className="codewars">
          <h4>Codewars:</h4>
          <p>
            <span className="green">Current Total:</span>
            {codewars.current.total}
          </p>
          <p>
            <span className="green">Last Week:</span>
            {codewars.current.lastWeek}
          </p>
          <p>
            <span className="green">Goal:</span> {codewars.goal.total}
          </p>
          <p>
            <span className="green">Percent of Goal Achieved:</span>
            <span className={this.colorPercent(codewarsScore)}>
              {codewarsScore}%
            </span>
          </p>
        </div>
        <div className="scores">
          <h4>Scores:</h4>
          <p>
            <span className="green">Assignment:</span>
            {assignments * 100}%
          </p>
          <p>
            <span className="green">Projects:</span>
            {projects * 100}%
          </p>
          <p>
            <span className="green">Assessments:</span>
            {assessments * 100}%
          </p>
        </div>
        <div className="certifications">
          <h4>Certifications:</h4>
          <p>
            <span className="green">Resume:</span> {resume ? "✅" : "❌"}
          </p>
          <p>
            <span className="green">Linkedin:</span> {linkedin ? "✅" : "❌"}
          </p>
          <p>
            <span className="green">Mock Interview:</span>{" "}
            {mockInterview ? "✅" : "❌"}
          </p>
          <p>
            <span className="green">GitHub:</span> {github ? "✅" : "❌"}
          </p>
        </div>
        <div className="oneToOne">
          <h4>One-on-One Notes</h4>
          <form onSubmit={this.submitForm}>
            <label htmlFor="author">
              author Name:{" "}
              <input
                type="text"
                id="author"
                name="author"
                onChange={this.update}
                value={this.state.author}
              />
            </label>
            <label htmlFor="comment">
              Comment:{" "}
              <input
                type="text"
                id="comment"
                name="comment"
                onChange={this.update}
                value={this.state.comment}
              />
            </label>
            <button
              onClick={() => {
                commentsHandler(id, this.state.author, this.state.comment);
                this.clear();
              }}
            >
              Add Note
            </button>
          </form>
        </div>
        <ul>{this.showComments(comments, id)}</ul>
      </div>
    );
  }
}

export default Deets;