import react from "react";
import CohortList from "./Components/CohortList.js";
import StudentList from "./Components/StudentList.js";

class App extends react.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <header className="header">
          <h1>Student Dashboard</h1>
        </header>
        <main className="main">
          <CohortList />
          <StudentList />
        </main>
      </div>
    );
  }
}

export default App;
