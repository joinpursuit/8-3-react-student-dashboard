import React from "react";
import "./Student.css";

class Student extends React.Component {
  constructor() {
    super();
    this.state = {
      showMore: false,
    };
  }

  checkGraduateStatus = (studentInfo) => {
    const { resume, linkedin, github, mockInterview } =
      studentInfo.certifications;
    const currentCodeWarScore = studentInfo.codewars.current.total;

    return (
      resume && linkedin && github && mockInterview && currentCodeWarScore > 600
    );
  };

  showMoreHandler = (studentInfo) => {};

  render() {
    const { studentInfo } = this.props;
    const imgSrc = studentInfo.profilePhoto;
    const name = `${studentInfo.names.preferredName} ${studentInfo.names.middleName[0]}. ${studentInfo.names.surname}`;
    const email = studentInfo.username;
    const Birthday = studentInfo.dob;
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
        <button>Show More</button>
      </div>
    );
  }
}

export default Student;
