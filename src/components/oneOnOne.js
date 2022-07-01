import React, { Component } from "react";

export default class oneOnOne extends Component {
  constructor() {
    super();
    this.state = {
      commenter: "",
      comment: "",
      student: "",
    };
  }

  commenter = (event) => {
    const { value } = event.target;
    this.setState({ comment: value });
  };

  comment = (event) => {
    const { value } = event.target;
    this.setState({ comment: value });
  };

  add = (event) => {
    event.preventDefault();
    let submission = document.createElement("p");
    submission.textContent = `${this.state.commenter} says: ${this.state.comment}`;
    document.querySelector("div.submissions").append(submission);
    this.setState({ comment: "", commenter: "" });
  };
  render() {
    const { student } = this.props;
    const { comment, commenter } = this.state;
    return (
      <div className="one-form">
        {" "}
        1-on-1 Notes
        <form onSubmit={this.add}>
          <label>
            {" "}
            Commenter Name{" "}
            <input
              type="text"
              name="name"
              value={commenter}
              onChange={this.commenter}
            />
          </label>
          <br />
          <label>
            {" "}
            Comment{" "}
            <input
              type="text"
              name="comment"
              value={comment}
              onChange={this.comment}
            />
          </label>
          <br />
          <input type="submit" value="add note" />
        </form>
        <div className="submissions" id={`form-${student.id}`}>
          {student.notes.length
            ? student.notes.map((note) => {
                return `${note.commenter} says: ${note.comment}`;
              })
            : ""}
        </div>
      </div>
    );
  }
}
