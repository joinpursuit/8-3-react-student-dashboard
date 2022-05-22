
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
console.log(this.state.currentCohort)
    return (
      <>
        <TopSection />
        <div className="school-dash">
          <CohortList data={data} updateCohort={this.updateCohort} />
          <StudentDash data={data}
          currentCohort = {this.state.currentCohort} />
        </div>
      </>
    );
  }
}

export default App;
