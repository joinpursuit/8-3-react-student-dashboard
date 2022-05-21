import React from 'react';

import AllStudents from './Components/AllStudents';

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { data } = this.props;
    return (
      <div>
        <div className='main'>
          <h1 className='header'> Student Dashboard</h1>

          <div className='student-panels'>
            <AllStudents student={data} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
