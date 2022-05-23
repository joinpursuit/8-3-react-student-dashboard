/**
 * OneOnOne functional component to add new comment under each student info
 * @param {Object[]} notes - An array of object with commenter name and comments
 * @returns React form with input for commenter and comments on each student.
 */

const OneOnOne = ({ notes }) => {
  const submitFormHandler = (event) => {
    event.preventDefault();
    const commenter = event.target.commenter.value;
    const comment = event.target.comment.value;

    if (commenter && comment) {
      notes.push({ commenter: commenter, comment: comment });
      alert('Thank you for your comment!');
      //document.getElementById('notes-form').reset();
    } else {
      alert('Empty form! Please fill in the form!');
    }
  };
  return (
    <div id='form-container'>
      <h3>1-on-1 Notes</h3>
      <form onSubmit={submitFormHandler} id='notes-form'>
        <label className='commenter'>
          Name: <input id='commenter' type='text' />
        </label>
        <br />
        <br />
        <label className='comment'>
          Comment:
          <input name='comment' type='text' />
        </label>
        <button className='add-notes' type='submit'>
          Add Note
        </button>
      </form>
      <ul id='new-notes'>
        {notes.map((note) => (
          <li>
            {note.commenter} says {note.comment}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OneOnOne;
