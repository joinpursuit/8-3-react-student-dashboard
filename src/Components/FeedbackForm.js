import React from "react";
import "./extendedinfo.css";

function FeedbackForm(props) {
  const { feedback, commentNameHandler, comment, commentHandler, notes } =
    props;
  return (
    <section className="feedback">
      <h4>1-on-1 Notes</h4>
      <form className="form-container">
        <label htmlFor="name">Commenter Name </label>
        <input
          type="text"
          name="name"
          value={feedback}
          onChange={commentNameHandler}
        />
        <br />
        <label htmlFor="comment">Comment: </label>
        <input
          type="text"
          name="comment"
          value={comment}
          onChange={commentHandler}
        />
        <br />
        <button type="submit">Add Note</button>
      </form>
      {notes.length ? (
        <li>
          {notes[0].commenter} says '{notes[0].comment}'{" "}
        </li>
      ) : null}
    </section>
  );
}
export default FeedbackForm;
