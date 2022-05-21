import React from "react";
import "./StudentCard.css";

class StudentCard extends React.Component {
  constructor() {
    super();
    this.state = {
      extrasVisible: false,
    };
  }

  setVisibility = (isVisible) => {
    this.setState({
      extrasVisible: isVisible,
    });
  };

  // showHidden = () => {
  //   document.querySelectorAll(".truncated").forEach((current) => {
  //     current.addEventListener("click", () => {
  //       studentCard.setExtrasVisibility(!studentCard.isVisible);
  //     });
  //   });
  // };

  formatBirthdayText = (birthday) => {
    const newBirthday = birthday.split("/");
    let month = "";
    switch (newBirthday[0]) {
      case "1":
        month = "January";
        break;
      case "2":
        month = "February";
        break;
      case "3":
        month = "March";
        break;
      case "4":
        month = "April";
        break;
      case "5":
        month = "May";
        break;
      case "6":
        month = "June";
        break;
      case "7":
        month = "July";
        break;
      case "8":
        month = "August";
        break;
      case "9":
        month = "September";
        break;
      case "10":
        month = "October";
        break;
      case "11":
        month = "November";
        break;
      case "12":
        month = "December";
        break;
    }
    return `${month} ${newBirthday[1]}, ${newBirthday[2]} `;
  };

  createStudentCard = ({ student }) => {
    const { names, profilePhoto, username, dob } = student;
    return (
      <div className="card">
        <h4>{`${names.preferredName} ${names.middleName} ${names.surname}`}</h4>
        <p>{username}</p>
        <img src={profilePhoto} alt={names.preferredName} />
        <div className="birthday">
          <p className="green left">Birthday: </p>
          <p className="dob right">{this.formatBirthdayText(dob)}</p>
        </div>
        <div className="truncated">
          <p
            className="green show-more"
            onClick={() => this.setVisibility(!this.state.extrasVisible)}
          >
            Show more...
          </p>
          <p>CodeWars</p>
          <p>Scores</p>
          <p>Certifications</p>
        </div>
      </div>
    );
  };
  render() {
    const { student } = this.props;
    return <div>{this.createStudentCard({ student })}</div>;
  }
}

export default StudentCard;
