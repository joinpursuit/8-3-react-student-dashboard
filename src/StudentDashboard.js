import React from "react";
import StudentCard from "./StudentCard";

/*const StudentDashboard = ({ array }) => {
  return (
    <div>
      <h3>
        All Classes
        <p>{`Total Student: ${array.length}`}</p>
      </h3>
      {array.map((element) => {
        return <StudentCard student={element} key={element.id} />;
      })}
    </div>
  );
};*/

class StudentDashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      students: [],
    };
  }
  createStudentList = (array) => {
    return (
      <div>
        <h3>
          All Classes
          <p>{`Total Student: ${array.length}`}</p>
        </h3>
        {array.map((element) => {
          return <StudentCard student={element} key={element.id} />;
        })}
      </div>
    );
  };

  render() {
    const { array } = this.props;
    return <div>{this.createStudentList(array)}</div>;
  }
}

export default StudentDashboard;
