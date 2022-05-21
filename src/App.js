
import React from 'react';
import StudentDash from './StudentDash';
import './Student.css';
import './App.css';
import CohortList from './CohortList';
import TopSection from './TopSection';
import data from './data/data.json';


class App extends React.Component {
   constructor() {
     super();
     this.state={
      currentCohort: 'All Students',
   }
  }
  updateCohort = (cohort) => {
    this.setState({ currentCohort: cohort });
  };

  render() {
    const { data } = this.props;

    return (
      <>
        <TopSection />
        <div className="school-dash">
          <CohortList data={data} updateCohort={this.updateCohort} />
          <StudentDash data={data} />
        </div>
      </>
    );
  }
}

export default App;
