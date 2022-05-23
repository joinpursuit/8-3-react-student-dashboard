import React from "react";

export default class InstructorForm extends React.Component {
  render() {
    const { semester } = this.props;
    return (
      <div className="extraSection">
        <section>
          <h4 className="notesHeading">1-on-1 Notes</h4>
          <form className="commentSection">
            <div className="labels">
              <label>Commenter Name </label>
              <input type="text"></input>
            </div>
            <div className="labels">
              <label>Comment </label>
              <input type="text"></input>
            </div>
            <input
              className="submitButton"
              onClick={(click) => click.preventDefault()}
              type="submit"
              value="Add Note"
            />
          </form>
          <ul>
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
