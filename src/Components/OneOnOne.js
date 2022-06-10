import React from 'react';

class OneOnOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allNotes: [...this.props.notes],
      comment: '',
      commenter: '',
    };
  }

  handleUpdate = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { comment, commenter } = this.state;

    if (commenter && comment) {
      this.setState({
        allNotes: [
          ...this.props.notes,
          { commenter: commenter, comment: comment },
        ],
        comment: '',
        commenter: '',
      });
      this.props.notes.push({ commenter: commenter, comment: comment });

      alert('Your note was accepted!');
      for (let form of document.querySelectorAll('form')) {
        form.reset();
      }
    } else {
      alert('Please include both your name and a comment.');
    }
  };

  render() {
    return (
      <div id="form-container">
        <h4>1-on-1 Notes</h4>
        <form onSubmit={this.handleFormSubmit} id="notes-form">
          <label>
            Commenter Name{' '}
            <input onChange={this.handleUpdate} name="commenter" type="text" />
          </label>
          <br></br>
          <label>
            Comment
            <input onChange={this.handleUpdate} name="comment" type="text" />
          </label>
          <br></br>
          <button type="submit">Add Note</button>
        </form>
        <ul id="new-notes">
          {this.state.allNotes.map((note, index) => {
            return (
              <li key={index}>
                {note.commenter} says, {note.comment}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default OneOnOne;
