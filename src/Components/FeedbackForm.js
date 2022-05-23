import React from "react";
import "./extendedinfo.css";

function FeedbackForm(props) {
  const {
    person,
    commentNameHandler,
    comment,
    commentHandler,
    notes,
    submitHandler,
    newReviews,
  } = props;
  return (
    <section className="feedback">
      <h4>1-on-1 Notes</h4>
      <form onSubmit={submitHandler} className="form-container">
        <label htmlFor="name">Commenter Name </label>
        <input
          type="text"
          name="name"
          value={person}
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
          {notes[0].commenter} says '{notes[0].comment}'
        </li>
      ) : null}
      {newReviews.length
        ? newReviews.map((review, idx) => <li key={idx}>{review}</li>)
        : null}
    </section>
  );
}
export default FeedbackForm;
