import { Component } from 'react';
import StudentDashboard from './Components/StudentDashboard';
import Cohorts from './Components/Cohorts';
import './index.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      cohort: 'All Students',
      code: '',
    };
  }

  filterByClass = (cohort, code) => {
    this.setState({
      cohort: cohort,
      code: code,
    });
  };

  render() {
    const { allStudents } = this.props;
    const { cohort, code } = this.state;
    console.log(this.state);

    return (
      <div className="App">
        <div className="app-grid">
          <h1>Student Dashboard</h1>
          <Cohorts
            filterByClass={this.filterByClass}
            allStudents={allStudents}
          />
          <StudentDashboard
            code={code}
            cohort={cohort}
            allStudents={allStudents}
          />
        </div>
      </div>
    );
  }
}

export default App;
