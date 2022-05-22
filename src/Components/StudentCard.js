import React from "react";
import "./studentcard.css";
import ExtendedInfo from "./ExtendedInfo.js";

const onTrack = (student) => {
  const allCertifications = Object.values(student.certifications);
  const codeWars = student.codewars.current.total;
  if (codeWars > 600 && !allCertifications.includes(false)) {
    return true;
  } else {
    return false;
  }
};

class StudentCard extends React.Component {
  constructor() {
    super();
    this.state = {
      showMore: false,
      feedback: "",
      comment: "",
    };
  }
  showMoreHandler = () => {
    this.setState({
      showMore: !this.state.showMore,
    });
  };
  commentNameHandler = (e) => {
    const { value } = e.target;
    this.setState({
      feedback: value,
    });
  };

  commentHandler = (e) => {
    const { value } = e.target;
    this.setState({
      comment: value,
    });
  };
  render() {
    const { student } = this.props;
    const { names, dob, profilePhoto, username } = student;
    const { showMore, feedback, comment } = this.state;
    const dobFormatted = new Date(dob).toDateString().substring(4);
    const { preferredName, middleName, surname } = names;
    return (
      <div className="card">
        <img
          className="pic"
          alt={preferredName}
          src={profilePhoto}
          width={115}
          height={115}
        />
        <section className="info">
          <div className="name">
            {preferredName} {middleName[0]}. {surname}
          </div>
          <div className="other">
            {username} 📧
            <br />
            Birthday: {dobFormatted}
            <br />
            <br />
            <div onClick={() => this.showMoreHandler()}>
              {showMore ? "Show Less..." : "Show More..."}
            </div>
            {showMore ? (
              <ExtendedInfo
                student={student}
                showMoreHandler={this.showMoreHandler}
                feedback={feedback}
                comment={comment}
                commentNameHandler={this.commentNameHandler}
                commentHandler={this.commentHandler}
              />
            ) : null}
          </div>
        </section>
        <div className="track">
          {onTrack(student) ? "On Track To Graduate" : null}
        </div>
      </div>
    );
  }
}

export default StudentCard;
