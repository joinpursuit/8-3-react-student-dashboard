import React from "react";
import "./studentcard.css";

class StudentCard extends React.Component {
  constructor() {
    super();
    this.state = {
      showMore: false,
    };
  }
  render() {
    const { names, dob, profilePhoto, username } = this.props.student;
    const dobFormatted = new Date(dob).toDateString().substring(4);
    const { preferredName, middleName, surname } = names;
    return (
      <div className="card">
        <img
          className="pic"
          src={profilePhoto}
          alt={preferredName}
          width={125}
          height={125}
        />
        <section className="info">
          <div className="name">
            {preferredName} {middleName[0]}. {surname}
          </div>
          <p className="other">
            {username}
            <br />
            Birthday: {dobFormatted}
            <br />
            <br />
            Show More...
          </p>
        </section>
      </div>
    );
  }
}

export default StudentCard;
