import React from "react";
import StudentCard from "./StudentCard";
import CommentList from "./CommentList";

class StudentDashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      students: [],
    };
  }
  createStudentList = (array, cohort, funct, commentsObj) => {
    if (cohort !== "All Classes") {
      cohort = `${cohort.slice(0, cohort.length - 4)} 
        ${cohort.slice(cohort.length - 4)}`;
    }
    return (
      <div className="container">
        <h2>{cohort}</h2>
        <p>{`Total Students: ${array.length}`}</p>
        {array.map((element) => {
          return (
            <StudentCard
              student={element}
              handleComments={funct}
              key={element.id}
              className="item"
            />
          );
        })}
      </div>
    );
  };

  render() {
    const { array, cohort, handleComments, commentsObj } = this.props;
    return (
      <div>
        {this.createStudentList(array, cohort, handleComments, commentsObj)}
      </div>
    );
  }
}

export default StudentDashboard;
