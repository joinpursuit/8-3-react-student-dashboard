import React from "react";
import Details from "./Details";
import "./Student.css";

class Student extends React.Component {
  constructor() {
    super();
    this.state = {
      comments: [],
    };
  }

  addCommentsHandler = (event) => {
    event.preventDefault();
    console.log(event.target.commenter.value);
    console.log(event.target.comment.value);
    const comment = `${event.target.commenter.value}. says, "${event.target.comment.value}"`;
    const copyOfComments = [...this.state.comments, comment];
    event.target.commenter.value = "";
    event.target.comment.value = "";
    this.setState({
      comments: copyOfComments,
    });
  };

  checkGraduateStatus = (studentInfo) => {
    const { resume, linkedin, github, mockInterview } =
      studentInfo.certifications;
    const currentCodeWarScore = studentInfo.codewars.current.total;

    return (
      resume && linkedin && github && mockInterview && currentCodeWarScore > 600
    );
  };

  showMoreHandler = (studentInfo) => {
    return (
      <Details
        studentInfo={studentInfo}
        comments={this.state.comments}
        addCommentsHandler={this.addCommentsHandler}
      />
    );
  };

  render() {
    const { studentInfo } = this.props;
    const imgSrc = studentInfo.profilePhoto;
    const name = `${studentInfo.names.preferredName} ${studentInfo.names.middleName[0]}. ${studentInfo.names.surname}`;
    const email = studentInfo.username;
    const Birthday = studentInfo.dob;

    const { studentShowDetail, studentShowDetailHandler } = this.props;
    //console.log(this.props);
    // console.log(this.props);

    return (
      <div className="student">
        <img src={imgSrc} alt={name} />
        <p>{name}</p>
        <p>{email}</p>
        <p>{Birthday}</p>
        <p>
          {this.checkGraduateStatus(studentInfo)
            ? "On Track To Graduate"
            : null}
        </p>
        <button onClick={() => studentShowDetailHandler(studentInfo.id)}>
          {studentShowDetail.includes(studentInfo.id)
            ? `Show Less`
            : `Show More`}
        </button>
        {studentShowDetail.includes(studentInfo.id)
          ? this.showMoreHandler(studentInfo)
          : null}
      </div>
    );
  }
}

export default Student;
