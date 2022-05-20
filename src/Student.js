import React from 'react';
import './Student.css';

class Student extends React.Component {
  render() {
    const {
      stuCard: {
        username,
        names,
        dob,
        profilePhoto,
        codewars,
        certifications,
        cohort,
      },
    } = this.props;

    const dobFormatted = new Date(dob).toDateString().substring(4);
    return (
      <article className="stucard">
        <img src={profilePhoto} alt="student" />
        <h3>
          {names.preferredName} {names.middleName[0]}. {names.surname}
        </h3>
        <p>{username}</p>
        <p> Birthday: {dobFormatted}</p>
        <a href="#"> Show More...</a>
      </article>
    );
  }
}

export default Student;
