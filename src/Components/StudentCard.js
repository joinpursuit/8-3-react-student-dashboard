import React from "react";
import "./StudentCard.css";

class StudentCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formattedDOb: formaDOB(this.props.birthday),
    };
  }

  handleMouseOver() {}

  render() {
    return (
      <div className="student-card">
        <img id="pic" src={this.props.pic} alt="Profile" width="100px" />
        <div id="student-profile">
          <p>
            <strong>{this.props.name}</strong>
          </p>
          <p>{this.props.email}</p>
          <p>Birthday: {this.state.formattedDOb}</p>
          <br></br>
          <p id="show-more">Show More...</p>
        </div>
      </div>
    );
  }
}

// Helper Functions

function formaDOB(rawDate) {
  let formattedDate = rawDate.split("/");

  switch (formattedDate[0]) {
    case "1":
      return `January ${formattedDate[1]}, ${formattedDate[2]}`;
    case "2":
      return `February ${formattedDate[1]}, ${formattedDate[2]}`;
    case "3":
      return `March ${formattedDate[1]}, ${formattedDate[2]}`;
    case "4":
      return `April ${formattedDate[1]}, ${formattedDate[2]}`;
    case "5":
      return `May ${formattedDate[1]}, ${formattedDate[2]}`;
    case "6":
      return `June ${formattedDate[1]}, ${formattedDate[2]}`;
    case "7":
      return `July ${formattedDate[1]}, ${formattedDate[2]}`;
    case "8":
      return `August ${formattedDate[1]}, ${formattedDate[2]}`;
    case "9":
      return `September ${formattedDate[1]}, ${formattedDate[2]}`;
    case "10":
      return `October ${formattedDate[1]}, ${formattedDate[2]}`;
    case "11":
      return `November ${formattedDate[1]}, ${formattedDate[2]}`;
    case "12":
      return `December ${formattedDate[1]}, ${formattedDate[2]}`;
  }

  return formattedDate;
}

export default StudentCard;
