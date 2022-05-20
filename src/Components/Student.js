import React from "react";
import Details from "./Details";
import "./Student.css";

class Student extends React.Component {
  constructor() {
    super();
    this.state = {
      showMoreOrShowLess: "Show More",
    };
  }

  changeButtonState = () => {
    const state = this.state.showMoreOrShowLess;
    state === "Show More"
      ? this.setState({
          showMoreOrShowLess: "Show Less",
        })
      : this.setState({
          showMoreOrShowLess: "Show More",
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
    return <Details studentInfo={studentInfo} />;
  };

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
        <button onClick={this.changeButtonState}>
          {this.state.showMoreOrShowLess}
        </button>
        {this.state.showMoreOrShowLess === "Show Less"
          ? this.showMoreHandler(studentInfo)
          : null}
      </div>
    );
  }
}

export default Student;
