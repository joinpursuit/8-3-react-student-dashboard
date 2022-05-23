import React from "react";

export default class InstructorForm extends React.Component {
  constructor() {
    super();
    this.state = {
      commenterName: "",
      comment: "",
    };
  }

  handleCommenterName = (event) => {
    this.setState({
      commenterName: event.target.value,
    });
  };

  handleComment = (event) => {
    this.setState({
      comment: event.target.value,
    });
  };

  createListItem = () => {
    let name = this.state.commenterName;
    let comment = this.state.comment;
    let item = `${name} says, "${comment}"`;
    return item;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const myComment = document.createElement("li");
    myComment.innerHTML = this.createListItem();
    document.getElementById("commentListItem").append(myComment);
    this.setState({
      commenterName: "",
      comment: "",
    });
  };

  render() {
    const { semester } = this.props;
    return (
      <div className="extraSection">
        <section>
          <h4 className="notesHeading">1-on-1 Notes</h4>
          <form className="commentSection">
            <div className="labels">
              <label>Commenter Name </label>
              <input
                type="text"
                onChange={this.handleCommenterName}
                value={this.state.commenterName}
              ></input>
            </div>
            <div className="labels">
              <label>Comment </label>
              <input
                type="text"
                value={this.state.comment}
                onChange={this.handleComment}
              ></input>
            </div>
            <input onClick={this.handleSubmit} type="submit" value="Add Note" />
          </form>
          <ul id="commentListItem">
            {semester.notes.length
              ? semester.notes.map((note) => {
                  return (
                    <li key={semester.id}>
                      {note.commenter} says, "{note.comment}"
                    </li>
                  );
                })
              : ""}
          </ul>
        </section>
      </div>
    );
  }
}
