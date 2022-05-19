import React from "react";
import "./StudentCard.css";

class StudentCard extends React.Component {
  render() {
    return (
      <div className="student-card">
        <img src={this.props.pic} alt="Profile" width="100px" />
        <div>
          <h4>{this.props.name}</h4>
          <p>Email: {this.props.email}</p>
          <p>Birthday: {this.props.birthday}</p>
          <p>Show More...</p>
        </div>
      </div>
    );
  }
}

export default StudentCard;
