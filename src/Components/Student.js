import React from "react";
import "./Student.css";

class Student extends React.Component {
  render() {
    const { studentInfo } = this.props;
    const imgSrc = studentInfo.profilePhoto;
    const name = `${studentInfo.names.preferredName} ${studentInfo.names.middleName[0]}. ${studentInfo.names.surname}`;
    const email = studentInfo.username;
    const Birthday = studentInfo.dob;
    return (
      <div className="student">
        <img src={imgSrc} />
        <p>{name}</p>
        <p>{email}</p>
        <p>{Birthday}</p>
        <button>Show More</button>
      </div>
    );
  }
}

export default Student;
