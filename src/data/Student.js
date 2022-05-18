import React from 'react';
import './Student.css';

class Student extends React.Component {
  render() {
    const { stuCard } = this.props;
    return (
      <article>
        <img src={stuCard.profilePhoto} alt="student" />
        <h3>
          {stuCard.names.preferredName} {stuCard.names.middleName}{' '}
          {stuCard.names.surname}
        </h3>
        <p> Birthday: {stuCard.dob}</p>
      </article>
    );
  }
}

export default Student;
