import { useState } from "react";

const Comments = ({ student }) => {
  const [commenter, setCommenter] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="comments">
      <h4>1-on-1 Notes</h4>
      <form className="form" onSubmit={handleSubmit}>
        <label>
          Commenter Name:{" "}
          <input
            type="text"
            className="name"
            value={commenter}
            onChange={(event) => setCommenter(event.target.value)}
          />
        </label>
        <br />
        <br />
        <label>
          Comment:{" "}
          <input
            type="text"
            className="comment"
            value={comment}
            onChange={(event) => setComment(event.target.value)}
          />
        </label>
        <br />
        <br />
        <input type="submit" value="Add Note" className="note" />
      </form>
    </div>
  );
};

export default Comments;
