import React from 'react';
import './Student.css';

class Student extends React.Component {
  render() {
    const {
      stuCard: { names, dob, profilePhoto, codewars, certifications, cohort },
    } = this.props;
    return (
      <article className="stucard">
        <img src={profilePhoto} alt="student" />
        <h3>
          {names.preferredName} {names.middleName[0]}. {names.surname}
        </h3>
        <p> Birthday: {dob}</p>
        <a href='#'> Show More...</a>
      </article>
    );
  }
}

export default Student;
