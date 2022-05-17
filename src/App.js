import React from "react";
import Sidebar from "./Components/Sidebar";
import { studentData } from "./data/data.js";
import StudentGallery from "./Components/StudentGallery.js";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      filteredStudents: [...studentData],
    };
  }
  render() {
    return (
      <div>
        <h1>Student Dashboard</h1>
        {/* {studentData.map((student) => {
          const { id, dob } = student;
          return (
            <article className="studentCard" key={id}>
              <h3>{id}</h3>
              <p>{dob}</p>
            </article>
          );
        })} */}
        <Sidebar studentData={studentData} />
        <StudentGallery />
      </div>
    );
  }
}

export default App;
