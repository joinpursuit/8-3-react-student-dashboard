import React from "react";

function Deets(props) {
  const {
    person,
    author,
    comment,
    commentStuff,
    notes,
    submission,
    newSubmission,
  } = props;
  return (
    <section className="feedback">
      <h4>1-on-1 Notes</h4>
      <form onSubmit={submission} className="form-container">
        <label htmlFor="name">Commenter Name </label>
        <input
          type="text"
          name="name"
          value={person}
          onChange={author}
        />
        <br />
        <label htmlFor="comment">Comment: </label>
        <input
          type="text"
          name="comment"
          value={comment}
          onChange={commentStuff}
        />
        <br />
        <button type="submit">Add Note</button>
      </form>
      {notes.length ? (
        <li>
          {notes[0].commenter} says '{notes[0].comment}'{" "}
        </li>
      ) : null}
      {newSubmission.length
        ? newSubmission.map((review, idx) => <li key={idx}>{review}</li>)
        : null}
    </section>
  );
}
export default Deets;
