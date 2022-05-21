import React from 'react';
import './Student.css';
import Showmore from './Showmore';

class Student extends React.Component {
  constructor() {
    super();
    this.state = {
      comments: [],
    };
  }
  // returns true or false for if they will graduate
  willGraduate = (studentDeets) => {
    const { resume, linkedin, github, mockInterview } =
      studentDeets.certifications;
    const studentCodewarsScore = studentDeets.codewars.current.total;
    return (
      resume &&
      linkedin &&
      github &&
      mockInterview &&
      studentCodewarsScore > 600
    );
  };

  showMoreButtonHandler = (studentDeets) => {
    return <Showmore studentDeets={studentDeets} />;
  };

  render() {
    const { studentDeets } = this.props;
    //console.log(studentDeets)

    const { profilePhoto, username, dob } = studentDeets;
    const { preferredName, middleName, surname } = studentDeets.names;

    const dobFormatted = new Date(dob).toDateString().substring(4);
    const { showMore, showMoreHandler } = this.props;

    return (
      <div className="stucard">
        <h4 style={{ color: 'green' }}>
          {this.willGraduate(studentDeets) ? 'On Track to Graduate' : null}
        </h4>

        <img src={profilePhoto} alt="headshot" />
        <h3>
          {preferredName} {middleName[0]}. {surname}
        </h3>
        <p>{username}</p>
        <p>
          <span style={{ color: 'darkgreen' }}>Birthday:</span> {dobFormatted}
        </p>

        <button onClick={() => showMoreHandler(studentDeets.id)}>
          {showMore.includes(studentDeets.id) ? 'Show Less' : 'Show More'}
        </button>

        {showMore.includes(studentDeets.id)
          ? this.showMoreButtonHandler(studentDeets)
          : null}
      </div>
    );
  }
}

export default Student;

/*
TODO
1 on 1 section
reminder: studentdeets is 1 whole student object. showMore is an array that will hold student id #s
*/
