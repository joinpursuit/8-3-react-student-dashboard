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
      person: "",
      comment: "",
      newReviews: [],
    };
  }
  commentNameHandler = (e) => {
    const { value } = e.target;
    this.setState({
      person: value,
    });
  };

  commentHandler = (e) => {
    const { value } = e.target;
    this.setState({
      comment: value,
    });
  };

  submitHandler = (e) => {
    e.preventDefault();
    const review = `${this.state.person} says, '${this.state.comment}'`;
    this.setState({
      newReviews: [...this.state.newReviews, review],
    });
  };

  render() {
    const { student, showMoreHandler, showMore } = this.props;
    const { id, names, dob, profilePhoto, username } = student;
    const { person, comment, newReviews } = this.state;
    const dobFormatted = new Date(dob).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
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
            <div onClick={() => showMoreHandler(id)}>
              {showMore.includes(id) ? "Show less..." : "Show More..."}
              {console.log(showMore)}
            </div>
            {showMore.includes(id) ? (
              <ExtendedInfo
                student={student}
                showMoreHandler={this.showMoreHandler}
                person={person}
                comment={comment}
                commentNameHandler={this.commentNameHandler}
                commentHandler={this.commentHandler}
                submitHandler={this.submitHandler}
                newReviews={newReviews}
              />
            ) : null}
          </div>
        </section>
        <span className="my-spacer"></span>
        <div className="track">
          {onTrack(student) ? "On Track To Graduate" : null}
        </div>
      </div>
    );
  }
}

export default StudentCard;
