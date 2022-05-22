import React from "react";
import "./StudentCard.css";

class StudentCard extends React.Component {
  render() {
    return (
      <div className="student-card">
        <img id="pic" src={this.props.pic} alt="Profile" width="100px" />
        <div id="student-profile">
          <p>
            <strong>{this.props.name}</strong>
          </p>
          <p>{this.props.email}</p>
          <p>Birthday: {this.props.birthday}</p>
          <br></br>
          <p id="show-more">Show More...</p>
        </div>
      </div>
    );
  }
}

export default StudentCard;
