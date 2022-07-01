import ExpandInfo from './ExpandInfo';

import './AStudent.css';
import React from 'react';

const graduationStatus = (student) => {
  const hasAllCerts = Object.values(student.certifications);
  const hasReqCodewarsScore = student.codewars.current.total;
  if (hasReqCodewarsScore > 600 && hasAllCerts.includes(true)) {
    return true;
  } else {
    return false;
  }
};

class AStudent extends React.Component {
  constructor() {
    super();
    this.state = {
      showMore: false,
    };
  }

  toggleExpandInfo = () => {
    this.setState({
      showMore: !this.state.showMore,
    });
  };
  render() {
    const { student } = this.props;
    const { showMore } = this.state;
    const { names, username, profilePhoto, dob, notes } = this.props.student;

    const dateFormat = new Date(dob).toDateString().substring(4);
    return (
      <>
        <section>
          <div className='student-info'>
            <img
              className='profilepic'
              src={profilePhoto}
              alt={names}
              width={100}
              height={100}
            />
            <aside className='graduate'>
              {graduationStatus(student) ? 'On Track To Graduate' : null}
            </aside>
            <h4 className='fullname'>
              {names.preferredName} {names.middleName[0]}. {names.surname}
              <h4>
                <em className>{username}</em>

                <h4>
                  <em>Birthday: {dateFormat}</em>
                </h4>
              </h4>
              <div onClick={() => this.toggleExpandInfo()}>
                {showMore ? 'Show Less' : 'Show More'}
              </div>
              {showMore ? (
                <ExpandInfo
                  codewars={this.props.student.codewars}
                  certifications={this.props.student.certifications}
                  cohort={this.props.student.cohort}
                  showMore={this.state.showMore}
                  toggleExpandInfo={this.toggleExpandInfo}
                  notes={notes}
                />
              ) : null}
            </h4>
          </div>
        </section>
      </>
    );
  }
}
export default AStudent;
