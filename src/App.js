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
      showMore: false,
    };
  }

  filterByClass = (cohort, code) => {
    this.setState({
      cohort: cohort,
      code: code,
    });
  };

  toggleShowMore = () => {
    this.setState((previousState) => ({
      showMore: !previousState.showMore,
    }));
  };

  render() {
    const { allStudents } = this.props;
    const { cohort, code, showMore } = this.state;

    console.log(this.state);

    return (
      <div className="app-grid">
        <h1>Student Dashboard</h1>
        <Cohorts filterByClass={this.filterByClass} />
        <StudentDashboard
          toggleShowMore={this.toggleShowMore}
          showMore={showMore}
          code={code}
          cohort={cohort}
          allStudents={allStudents}
        />
      </div>
    );
  }
}

export default App;
