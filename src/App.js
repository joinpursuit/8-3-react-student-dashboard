import StudentList from './Components/StudentList';
import CohortList from './Components/CohortList';
import './App.css';
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedCohortCode: 'All Students',
    };
  }

  handleCohortList = (cohort) => {
    this.setState({ selectedCohortCode: cohort });
  };

  render() {
    const { data } = this.props;
    console.log('currentState', this.state.selectedCohortCode);
    return (
      <div>
        <div className='header'>
          <h1>
            <strong>Student Dashboard</strong>
          </h1>
        </div>

        <div className='student-dashboard'>
          <CohortList data={data} handleCohortList={this.handleCohortList} />
          <article>
            <StudentList
              students={data}
              cohortCode={this.state.selectedCohortCode}
            />
          </article>
        </div>
      </div>
    );
  }
}

export default App;
