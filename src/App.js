import React from "react";
import Header from "./Components/Header";
import CohortList from "./Components/CohortList";
import StudentList from "./Components/StudentList";

class App extends React.Component {
  render() {
    const { studentInformation } = this.props;

    return (
      <div>
        <Header />
        <div id="main">
          <CohortList studentInformation={studentInformation} />
          <StudentList studentInformation={studentInformation} />
        </div>
      </div>
    );
  }
}
export default App;
