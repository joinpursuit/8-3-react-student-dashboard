import { render } from "@testing-library/react";
import React from "react";

class StudentCommentsForm extends React.Component {
  constructor(props, ref) {
    super(props);
    
    this.state = {
      name: '',
      comment: '',
      isValid: false,
    };
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const newObj = {
      "commenter": this.state.name,
      "comment": this.state.comment,
    }
    // >> Validating all the fields
    if(this.state.isValid) {
      (this.props.studentList).map(student => {
        
        
        (student.notes).push(newObj)
      },() => this.handleFormReset())
      
    }
  }

  handleFormReset = (event) => {
      this.setState({
        name: '',
        comment: '',
        isValid: false,
      });
  }

  handleTextNameChange = (event) => {
    const { value } = event.target;
    if (value !== ''){
      this.setState({
        name: value,
        isValid: true,
      });
    }
  }
  handleTextCommentChange = (event) => {
    const { value } = event.target;
    if (value !== ''){
      this.setState({
        comment: value,
        isValid: true,
      });
    }
  }

  

  render() {
    
    return(
      <>
        <form onSubmit={this.handleFormSubmit} onReset={this.handleFormReset}>
          <h2>1-on-1 Notes</h2>
          <div className="form-control">
            <label>Name</label>
            <input 
              id="name" 
              name="name"
              type="text"
              value={this.state.name}
              onChange={this.handleTextNameChange}
            />
          </div>
          <div className="form-control">
            <label>Comment</label>
            <input 
              id="comment" 
              name="comment"
              type="text"
              value={this.state.comment}
              onChange={this.handleTextCommentChange}
            />
          </div>
          <input type="submit" value="Add Note" />
        </form>
       
      </>
    )
  }
}

export default StudentCommentsForm;