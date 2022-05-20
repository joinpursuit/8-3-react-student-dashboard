import React, { Component } from 'react';
import ReadMore from './ReadMore';
import './Student.css';

class Student extends Component {
  dateConversion = (dob) => {
    const days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    const now = new Date(dob);
    const convertedDate =
      days[now.getDay()] +
      ' ' +
      months[now.getMonth()] +
      ' ' +
      now.getFullYear();
    return convertedDate;
  };

  eligibleToGraduate = (certified, codewarsTotal) => {
    if (
      codewarsTotal > 600 &&
      certified.resume &&
      certified.linkedin &&
      certified.github &&
      certified.mockInterview
    ) {
      return 'On Track To Graduate';
    } else {
      return '';
    }
  };

  render() {
    const { studentData } = this.props;

    const codeWarsTotal = studentData.codewars.current.total;
    return (
      <div className='student' key={studentData.id}>
        <img
          style={{ width: '150px', height: '100px' }}
          src={studentData.profilePhoto}
          alt={studentData.names.preferredName}
        />
        <div className='studentDetails'>
          <h4>
            {studentData.names.preferredName} {studentData.names.middleName}{' '}
            {studentData.names.surName}
          </h4>
          <h4>{studentData.username}</h4>
          <h4>
            <span style={{ color: 'green' }}> Birthday:</span>{' '}
            {this.dateConversion(studentData.dob)}{' '}
          </h4>

          <ReadMore studentData={studentData} />
        </div>
        <div className='graduated'>
          <h4 style={{color:'green'}}>
            {this.eligibleToGraduate(studentData.certifications, codeWarsTotal)}
          </h4>
        </div>
      </div>
    );
  }
}

export default Student;
