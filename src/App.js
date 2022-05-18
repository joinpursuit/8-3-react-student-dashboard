import React from "react";
import Data from "./data/data.json";
import "./App.css";
import Nav from "./Components/Nav";
import CohortList from "./Components/CohortList";
import StudentList from "./Components/StudentList";

class App extends React.Component {
  render() {
    return (
      <div className="dashBoard">
        <Nav />
        <CohortList />
        <StudentList />
      </div>
    );
  }
}

export default App;
