import { render } from "@testing-library/react";
import React from "react";

class StudentCommentsForm extends React.Component {
  constructor(props, ref) {
    super(props);
    
    this.state = {
      name: '',
      comment: '',
      commentList: [],
      isValid: false,
    };
    // this.setState({
    //   commentList: this.loadCommentsByStudent(),    
    // });
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    let studentNotes;
    const formObj = {};
    formObj["commenter"] = this.state.name;
    formObj["comment"] = this.state.comment;
    //Create a notes array shallow copy
    (this.props.student).map((student) => {
      studentNotes = [...student.notes];
      studentNotes.push(formObj)

      this.setState({
        commentList: studentNotes,    
      });

    }, () => this.getCommentsByStudent(), 
       () => this.handleFormReset(),
    
    );
    
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

  loadCommentsByStudent = () => {
    let comments = '';
    // let studentNotes = [];
    // const formObj = {};
    // (this.props.student).map((student, index) => {
      
    //   formObj["commenter"] = student.notes[index].commenter;
    //   formObj["comment"] = student.notes[index].comment;
      
    //   studentNotes.push(formObj)
    //   console.log(studentNotes)
      
      
    // });
    // //return studentNotes;
    // this.setState({
    //   commentList: studentNotes, 
    // })
    (this.state.commentList).map((student, index) => {
      return <li key={student.id}>
                <span><i className="fa fa-commenting"></i> {student.notes[index].commenter}</span> {student.notes[index].comment}
              </li>;
    })
  }

  /**
   * Display the comments if the student id exist inside the comments object as a key
   * @param {[]String} comments // object that contains comments ,key is the different student ids,
   * value is array of comments
   * @param {String} id -A unique ID associated with each student.
   * @returns an array of comments as <li> item
   */
  getCommentsByStudent = () => {
    
    {console.log(this.state.commentList)}
    if(this.state.commentList.length === 0){
      this.setState({
        commentList: this.props.comments,
      }, this.loadCommentsByStudent()
      
      );
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
        
        <ul>
          {/* {this.getCommentsByStudent()} */}
        </ul>
      </>
    )
  }
}

export default StudentCommentsForm;