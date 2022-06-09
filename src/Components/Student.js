import React from 'react';
import Showmore from './Showmore';

class Student extends React.Component {
  /**
   * willGraduate- checks each student's certifications and codewar score to see if they meet requirements to graduate
   * @param {object} studentDeets - students info object
   * @returns a string that will display atop a student card
   */

  willGraduate = (studentDeets) => {
    const { resume, linkedin, github, mockInterview } =
      studentDeets.certifications;
    const studentCodewarsScore = studentDeets.codewars.current.total;
    if (
      resume &&
      linkedin &&
      github &&
      mockInterview &&
      studentCodewarsScore > 600
    ) {
      return '****On Track to Graduate****';
    } else {
      return null;
    }
  };

  /**
   *
   * @param {object} studentDeets - students info object
   * @returns passes student info prop down to Showmore component
   */
  showMoreButtonHandler = (studentDeets) => {
    return <Showmore studentDeets={studentDeets} />;
  };

  render() {
    const { studentDeets, showMore, showMoreHandler } = this.props;
    //console.log(studentDeets)

    const { profilePhoto, username, dob } = studentDeets;
    const { preferredName, middleName, surname } = studentDeets.names;

    const formatDOB = new Date(dob).toDateString().substring(4);

    return (
      <div className="stucard">
        <h4 style={{ color: 'rgb(21, 62, 21' }}>
          {this.willGraduate(studentDeets)}
        </h4>

        <img src={profilePhoto} alt="headshot" />
        <h3>
          {preferredName} {middleName[0]}. {surname}
        </h3>
        <p>Email: {username}</p>
        <p>
          <span>Birthday:</span> {formatDOB}
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

reminder: studentdeets is 1 whole student object. showMore is an array that will hold student id #s
*/
