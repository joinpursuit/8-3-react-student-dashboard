import React from "react";
import "./StudentCard.css";

class StudentCard extends React.Component {
  render() {
    return (
      <div className="student-card">
        <img src="https://picsum.photos/100" alt="Profile" width="100px" />
        <div>
          <p>Name</p>
          <p>Email</p>
          <p>Birthday</p>
          <br></br>
          <p>Show More...</p>
        </div>
      </div>
    );
  }
}

export default StudentCard;
