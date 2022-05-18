import React from "react";
import "./App.css";
import StudentDashboard from "./StudentDashboard";

class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    const { data } = this.props;
    return (
      <div>
        <h1>Student Dashboard</h1>
        <div>
          <StudentDashboard array={data} />
        </div>
      </div>
    );
  }
}

export default App;
