import { render } from "@testing-library/react";
import React from "react";

class StudentCommentsList extends React.Component {
  constructor(props, ref) {
    super(props);
  }

  render() {
      
    return(
      <>
      <h2>Last Comments</h2>
        <ul>
        {(this.props.student).map((student, index) => {
          if(student.notes.length !== 0) {
            return <li key={student.id}>
                  <span><i className="fa fa-commenting"></i> {student.notes[index].commenter}</span> {student.notes[index].comment}
                </li>
          } else {
            return <li>No comments</li>  
          }
         
        })}
        </ul>
      </>
    )
  }
}

export default StudentCommentsList;