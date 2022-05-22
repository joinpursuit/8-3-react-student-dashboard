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

  /**
   * Clear the user inputs when the submit button being clicked
   */
  clearInputsHandler = () => {
    this.setState({
      commenter: "",
      comment: "",
    });
  };

  //Update the input's commenter and comment into the state
  updateInputHandler = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  //when submit the form, do not refresh the page
  formSubmitHandler = (event) => {
    event.preventDefault();
  };

  /**
   * Display the comments if the student id exist inside the comments object as a key
   * @param {[]String} comments // object that contains comments ,key is the different student ids,
   * value is array of comments
   * @param {String} id -A unique ID associated with each student.
   * @returns an array of comments as <li> item
   */
  displayComments = (comments, id) => {
    if (comments.hasOwnProperty(id)) {
      return comments[id].map((comment, index) => {
        return <li key={index}>{comment}</li>;
      });
    }
  };

  colorDependOnPercentage = (codewarsPercentage) => {
    if (codewarsPercentage >= 100) {
      return "green";
    } else if (codewarsPercentage >= 50) {
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
    const codewarsPercentage = Number(
      ((codewars.current.total / codewars.goal.total) * 100).toFixed(2)
    );

    return (
      <div className="detailContainer">
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
            <span className={this.colorDependOnPercentage(codewarsPercentage)}>
              {codewarsPercentage}%
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
          <form onSubmit={this.formSubmitHandler}>
            <label htmlFor="commenter">
              Commenter Name:{" "}
              <input
                type="text"
                id="commenter"
                name="commenter"
                onChange={this.updateInputHandler}
                value={this.state.commenter}
                required
              />
            </label>
            <label htmlFor="comment">
              Comment:{" "}
              <input
                type="text"
                id="comment"
                name="comment"
                onChange={this.updateInputHandler}
                value={this.state.comment}
                required
              />
            </label>
            <button
              onClick={() => {
                commentsHandler(id, this.state.commenter, this.state.comment);
                this.clearInputsHandler();
              }}
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
