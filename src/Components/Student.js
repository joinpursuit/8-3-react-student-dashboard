import { render } from '@testing-library/react';
import React from 'react';
import ShowMore from './ShowMore';

class Student extends React.Component {
  constructor() {
    super();

    this.state = {
      showMore: false,
    };
  }

  toggleShowMore = () => {
    this.setState((previousState) => ({
      showMore: !previousState.showMore,
    }));
  };

  render() {
    const {
      profilePhoto,
      names,
      username,
      dob,
      codewars,
      certifications,
      cohort,
      notes,
    } = this.props.student;

    const { preferredName, middleName, surname } = names;

    const month = dob.split('/')[0];
    const day = dob.split('/')[1];
    const year = dob.split('/')[2];

    function getMonthName(month) {
      const date = new Date();
      date.setMonth(month - 1);
      const monthName = date.toLocaleString('default', { month: 'long' });
      return monthName;
    }

    function isOnTrackToGraduate(codewars, certifications) {
      const isCertificateAcquired = (certificate) => certificate === true;

      return codewars.current.total > 600 &&
        Object.values(certifications).every(isCertificateAcquired)
        ? true
        : false;
    }
    return (
      <article className="inside-student-card">
        <img src={profilePhoto} alt={preferredName} />
        <aside className="student-info-aside">
          {isOnTrackToGraduate(codewars, certifications) ? (
            <p className="onTrack-p">On Track to Graduate</p>
          ) : null}
          <h4>
            {preferredName} {middleName[0]}. {surname}
          </h4>
          <p className="student-username-p">{username}</p>
          <p className="student-dob-p">
            <span className="color-text">Birthday:</span> {getMonthName(month)}{' '}
            {day}, {year}
          </p>
          <ShowMore
            notes={notes}
            cohort={cohort}
            codewars={codewars}
            certifications={certifications}
            showMore={this.state.showMore}
            handleClick={this.toggleShowMore}
          />
        </aside>
      </article>
    );
  }
}

export default Student;
