import React from "react";
import ShowExtra from "./ShowExtra.js";

const OnTrack = (student) => {
  const allCertifications = Object.values(student.certifications);
  const codeWars = student.codewars.current.total;
  if (codeWars > 600 && !allCertifications.includes(false)) {
    return true;
  } else {
    return false;
  }
};

class StudentDirectory extends React.Component {
  constructor() {
    super();
    this.state = {
      showMore: false,
      person: "",
      comment: "",
      newReviews: [],
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
    const review = `${this.state.person} says '${this.state.comment}'`;
    this.setState({
      newReviews: [...this.state.newReviews, review],
    });
    console.log(this.state.newReviews);
  };

  render() {
    const { student } = this.props;
    const { names, dob, profilePhoto, username } = student;
    const { showMore, person, comment, newReviews } = this.state;
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
              <ShowExtra
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
        <div className="track">
          {OnTrack(student) ? "On Track To Graduate" : null}
        </div>
      </div>
    );
  }
}

export default StudentDirectory;
