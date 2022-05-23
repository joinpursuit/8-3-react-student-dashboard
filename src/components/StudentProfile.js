import React from "react";
import ShowMore from "./ShowMore";

class StudentProfile extends React.Component {
  constructor() {
    super();
    this.state = {
      showMore: false,
      commenter: "",
      comments: "",
      reviews: [],
    };
  }
  showMoreHandler = () => {
    this.setState({
      showMore: !this.state.showMore,
    });
  };

  commenterHandler = (event) => {
    const { value } = event.target;
    this.setState({
      commenter: value,
    });
  };

  commentsHandler = (event) => {
    const { value } = event.target;
    this.setState({
      comments: value,
    });
  };

  reviewsHandler = (event) => {
    event.preventDefault();
    const review = `${this.state.commenter} says, "${this.state.comments}"`;
    this.setState({
      reviews: [...this.state.reviews, review],
    });
  };

  render() {
    const { names, username, profilePhoto, dob, notes } = this.props.student;
    const { student } = this.props;
    const { showMore, commenter, comments, reviews } = this.state;
    const dobFormat = new Date(dob).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }); // https://www.tutorialstonight.com/format-javascript-date.php

    const onTrack = (data) => {
      const allCerts = Object.values(data.certifications);
      const codeWars = data.codewars.current.total;
      if (codeWars > 600 && !allCerts.includes(false)) {
        return "On Track to Graduate";
      }
      return "";
    };

    return (
      <section className="studentBox">
        <img src={profilePhoto} alt="student" />
        <h3>
          {names.preferredName} {names.middleName[0]}. {names.surname}
        </h3>
        <p>{username}</p>
        <p>
          <span className="green">Birthday: </span>
          {dobFormat}
        </p>
        <h4 className="onTrack">{onTrack(student)}</h4>

        <section className="underline" onClick={() => this.showMoreHandler()}>
          {showMore ? "Show Less..." : "Show More..."}
        </section>
        <div>
          {showMore ? (
            <ShowMore
              student={student}
              commenter={commenter}
              comments={comments}
              reviews={reviews}
              commenterHandler={this.commenterHandler}
              commentsHandler={this.commentsHandler}
              reviewsHandler={this.reviewsHandler}
              notes={notes}
            />
          ) : null}
        </div>
      </section>
    );
  }
}

export default StudentProfile;
