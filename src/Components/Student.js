import React from "react";
import "./Student.css";

class Student extends React.Component {
  render() {
    return (
      <div className="student">
        <img src="https://fakeface.rest/thumb/view?gender=male&minimum_age=38&maximum_age=48" />
        <p>Israel B. Rodriguez</p>
        <p>israel.rodriguez@pursuit.org"</p>
        <p>Birthday: 2/3/1979</p>
        <button>Show More</button>
      </div>
    );
  }
}

export default Student;
