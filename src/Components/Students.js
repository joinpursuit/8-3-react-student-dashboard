import { Component } from 'react';
import Student from './Student';
import './Students.css';

class Students extends Component {
  render() {
    const { filteredArray, data, selectedCohortCode } = this.props;
    console.log(filteredArray);

    const newselectedCohortCode = selectedCohortCode.split(' ').join('');
    console.log('p=', newselectedCohortCode);

  
    const cohortStudents = data.filter(
      (ele) => ele.cohort.cohortCode === newselectedCohortCode
    );
    console.log('cohortMembers =', cohortStudents);

   const cohortSelected=(selectedCohortCode==='All Students')?data.length:cohortStudents.length;
  
    return (
      <div className='students'>
        <div className='cohortHeader'>
          <h2>{selectedCohortCode}</h2>
          {/* <h2>{filteredArray}</h2> */}
          <small>
            Total Students:{' '}
            <span style={{ color: 'green', fontWeight: '900' }}>
              {cohortSelected}
            </span>
          </small>
        </div>
        <div className='studentInfo'>
          {selectedCohortCode==='All Students'?
           data.map((datas) => {
            return <Student key={datas.id} studentData={datas} />
           }):
            cohortStudents.map((datas) => {
              return <Student key={datas.id} studentData={datas} />;
            })
           }
        </div>
      </div>
    );
  }
}

export default Students;
