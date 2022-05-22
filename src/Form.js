import React, { Component } from "react";
import "./Form.css";

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      commenterName: "",
      comment: "",
    };
  }

  handleCommentName = (event) => {
    this.setState({ commenterName: event.target.value });
  };
  handleComment = (event) => {
    this.setState({ comment: event.target.value });
  };

  handleFormSubmission = (event) => {
    event.preventDefault();
    const { commenterName, comment } = this.state;
    if (commenterName && comment) {
      document.getElementById("form").reset();
      const item = document.createElement("li");
      item.innerHTML = `${commenterName} says: ${comment}`;
      document.getElementById("my-list").append(item);
    } else {
      alert("Please fill out the form.");
    }
  };

  render() {
    const { handleComments, student } = this.props;
    return (
      <div className="notes">
        <h3>1-on-1 Notes</h3>
        <form onSubmit={this.handleFormSubmission} id="form">
          <label>
            Commenter Name:
            <input type="text" onChange={this.handleCommentName} />
          </label>
          <label>
            Comment:
            <input type="text" onChange={this.handleComment} />
          </label>
          <button
            onClick={() =>
              handleComments(this.state.commenterName, this.state.comment)
            }
            className="note-button"
          >
            Add Note
          </button>
        </form>
        <ul id="my-list">
          {student.notes.length
            ? student.notes.map((note) => {
                return <li>{`${note.commenter} says: ${note.comment}`}</li>;
              })
            : ""}
        </ul>
      </div>
    );
  }
}
