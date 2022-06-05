import React from 'react';
import './Comments.css';

function commentGenerator({ notes }) {
  const submitCommentHandler = (event) => {
    event.preventDefault();
    const commentName = event.target.commentName.value;
    const comment = event.target.comment.value;

    if (commentName === true && comment === true) {
      notes.push({ commentName: commentName, comment: comment });
      console.log('Comment generate successfully.');
      alert(
        ' Comment generated, thank you for posting! The recipient will be notified shortly!',
      );
    } else if (!commentName && !comment) {
      console.log('Invalid input, comment not generated');
      alert('Please fill out both your name and comment before submitting.');
    }
  };
  return (
    <section className='comment-section'>
      <br />
      <br />
      <strong>
        <h3> 1 - on - 1 Notes</h3>
      </strong>
      <form onSubmit={submitCommentHandler} id='notes-input'>
        <label className='commenterName'>
          Commenter Name: <input id='commenterNameInput' type='text' />
        </label>
        <br></br>
        <br></br>
        <label className='comments'>
          Comment: <input name='comment' type='text' />
        </label>
        <br></br>
        <br></br>
        <button className='notesbutton' type='submit'>
          Add Note
        </button>
      </form>
      <ul id='commentUList'>
        {notes.map((postComment) => (
          <li>
            {postComment.commentName} says: {postComment.comment}
          </li>
        ))}
      </ul>
    </section>
  );
}
export default commentGenerator;
