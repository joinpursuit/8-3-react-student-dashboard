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
      selectedCohort: "AllStudents", //cohortCode
      studentShowDetail: [], //array contains unique student id
      comments: {}, // key is the different student ids, value is array of comments
      pageNum: 1,
    };
  }

  //update the selected chortCode and hide all student's details
  selectCohortHandler = (selectedCohort) => {
    this.setState({
      selectedCohort: selectedCohort,
      studentShowDetail: [],
      pageNum: 1,
    });
  };

  //when clicked on show more button, add the student id into the array
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

  //update the comments
  /*Ex : {
    "student_id_1" : ["hi" , "how are you"],
     student_id_2 : ["hello"]
  }
  */
  commentsHandler = (studentId, commenter, comment) => {
    if (comment !== "" && commenter !== "") {
      const commentRecord = `[${commenter}] says: "${comment}"`;

      let copyOfCommentsObj = this.state.comments;

      if (copyOfCommentsObj.hasOwnProperty(studentId)) {
        copyOfCommentsObj[studentId].push(commentRecord);
      } else {
        copyOfCommentsObj[studentId] = [commentRecord];
      }

      this.setState({
        comments: copyOfCommentsObj,
      });
    }
  };

  //switch the page num
  updatePageNum = (operation, studentListArrayLength) => {
    console.log("Hello");
    let currentPage = this.state.pageNum;
    if (operation === "prevPage") {
      if (currentPage - 1 >= 1) {
        currentPage--;
      }
    } else if (operation === "nextPage") {
      if (currentPage * 20 < studentListArrayLength) {
        currentPage++;
      }
    }

    this.setState({ pageNum: currentPage });
  };

  render() {
    const { selectedCohort, studentShowDetail, comments } = this.state;

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
          studentShowDetail={studentShowDetail}
          studentShowDetailHandler={this.studentShowDetailHandler}
          comments={comments}
          commentsHandler={this.commentsHandler}
          updatePageNum={this.updatePageNum}
          pageNum={this.state.pageNum}
        />
      </div>
    );
  }
}

export default App;
