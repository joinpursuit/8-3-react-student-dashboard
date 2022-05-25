import { render } from "@testing-library/react";
import React from "react";

class StudentCommentsForm extends React.Component {
  constructor(props) {
    super(props);
    this.iconComment = <i className="fa fa-commenting"></i>;
    this.iconNoComment = <i className="fa fa-exclamation-circle"></i>;
    this.state = {
      name: '',
      comment: '',
      commentList: this.props.comments,
      isValid: false,
    };
    // this.setState({
    //   commentList: this.loadCommentsByStudent(),    
    // });
  }

  handleFormSubmit = (event, props) => {
    event.preventDefault();

    // >> Checking field validations
    if(this.state.isValid) {
      let commentList = [];
      const newComment = {};

      // >> Validating if there are any previous comments 
      if(this.state.commentList.length > 0) {
        commentList = [...this.state.commentList]
      }
      
      newComment["commenter"] = this.state.name;
      newComment["comment"] = this.state.comment;
      commentList.push(newComment)

      this.setState({
        commentList: commentList,    
      }, () => this.handleFormReset());
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
  getCommentsByStudent = (comments) => {
    // >> Validating if there are previous comments
    if(comments.length > 0) {
      return (this.state.commentList).map((comment) =>  
        <li key={comment.id}><span>{this.iconComment} {comment['commenter']}</span> {comment['comment']}</li>);
    } else {
      return <li><span>{this.iconNoComment} </span> {'No previous comments'}</li>;
    }
  }

  render() {
    
    return(
      <>
        <div>
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
        </div>
        <div className="comment-list">
          <h2>Last comments</h2>
          <ul>
            {this.getCommentsByStudent(this.state.commentList)}
          </ul>
        </div>
      </>
    )
  }
}

export default StudentCommentsForm;