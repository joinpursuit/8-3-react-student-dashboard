function OneOnOne({ notes }) {
  
  function handleFormSubmit(event) {
    event.preventDefault();
    const newCommenter = event.target.commenter.value;
    const newComment = event.target.comment.value;

    if (newCommenter && newComment) {
      notes.push({ commenter: newCommenter, comment: newComment });
      alert('Your note was accepted!');
      document.getElementById('notes-form').reset();

      const li = document.createElement('li');
      li.textContent = `${newCommenter} says, ${newComment}`;
      document.getElementById('new-notes').append(li);
    } else {
      alert('Please include both your name and a comment.');
    }
  }
  return (
    <div id="form-container">
      <h4>1-on-1 Notes</h4>
      <form onSubmit={handleFormSubmit} id="notes-form">
        <label align="left">
          Commenter Name <input id="commenter" type="text" />
        </label>
        <br></br>
        <label align="left">
          Comment
          <input name="comment" type="text" />
        </label>
        <br></br>
        <button type="submit">Add Note</button>
      </form>
      <ul id="new-notes">
        {notes.map((note) => {
          return (
            <li>
              {note.commenter} says, {note.comment}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default OneOnOne;
