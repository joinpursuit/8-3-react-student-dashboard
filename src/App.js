import React from 'react';
import StudentDash from './StudentDash';
import './Student.css';
import './App.css';
import CohortList from './CohortList';
import TopBar from './TopBar';

class App extends React.Component {
  // constructor() {
  //   super();
  // }

  render() {
    const { data } = this.props;

    return (
      <>
        <TopBar />
        <div className="school-dash">
          <CohortList />
          <StudentDash data={data} />
        </div>
      </>
    );
  }
}

export default App;

/*
TODO
app.css- header background, center
cohort class by start date( likely need to use .filter )
*/
