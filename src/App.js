import React from "react";
import Data from "./data/data.json";
import "./App.css";
import Nav from "./Components/Nav";
import CohortList from "./Components/CohortList";
import StudentList from "./Components/StudentList";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedCohort: "AllStudents",
      studentShowDetail: [],
      comments: {},
    };
  }

  selectCohortHandler = (selectedCohort) => {
    this.setState({
      selectedCohort: selectedCohort,
      studentShowDetail: [],
    });
  };

  studentShowDetailHandler = (studentId) => {
    let copyOfStudentShowDetail = [...this.state.studentShowDetail];
    copyOfStudentShowDetail.includes(studentId)
      ? copyOfStudentShowDetail.splice(
          copyOfStudentShowDetail.indexOf(studentId),
          1
        )
      : copyOfStudentShowDetail.push(studentId);

    this.setState({
      studentShowDetail: copyOfStudentShowDetail,
    });
  };

  commentsHandler = (studentId, commenter, comment) => {
    const commentRecord = `${commenter}. says, "${comment}"`;
    let copyOfCommentsObj = this.state.comments;
    if (copyOfCommentsObj.hasOwnProperty(studentId)) {
      copyOfCommentsObj[studentId].push(commentRecord);
    } else {
      copyOfCommentsObj[studentId] = [commentRecord];
    }

    this.setState({
      comments: copyOfCommentsObj,
    });
  };

  render() {
    //console.log(this.state);
    const { selectedCohort } = this.state;
    return (
      <div className="dashBoard">
        <Nav />
        <CohortList
          data={Data}
          selectCohortHandler={this.selectCohortHandler}
        />
        <StudentList
          data={Data}
          selectedCohort={selectedCohort}
          studentShowDetail={this.state.studentShowDetail}
          studentShowDetailHandler={this.studentShowDetailHandler}
          comments={this.state.comments}
          commentsHandler={this.commentsHandler}
        />
      </div>
    );
  }
}

export default App;
