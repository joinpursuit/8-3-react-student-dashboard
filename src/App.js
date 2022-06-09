import { Component } from 'react';
import StudentDashboard from './Components/StudentDashboard';
import Cohorts from './Components/Cohorts';
import './index.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cohort: 'All Students',
      code: 'AllStudents',
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

    return (
      <div className="app-grid">
        <h1>Student Dashboard -on feature branch</h1>
        <Cohorts filterByClass={this.filterByClass} />
        <StudentDashboard
          code={code}
          cohort={cohort}
          allStudents={allStudents}
        />
      </div>
    );
  }
}

export default App;
