import React from 'react';
import StudentDash from './StudentDash';
import './Student.css';

class App extends React.Component {
  // constructor() {
  //   super();
  // }

  render() {
    const { data } = this.props;

    // console.log(data[0].id)
    return (
      <div>
        <header>
          {' '}
          <h1>Student Dashboard</h1>
        </header>

        <StudentDash data={data} />
      </div>
    );
  }
}

export default App;
