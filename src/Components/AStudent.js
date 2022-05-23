import ExpandInfo from './ExpandInfo';
import './AStudent.css';
import React from 'react';

class AStudent extends React.Component {
  constructor(props) {
    super();
    this.state = {
      ExpandInfo: false,
    };
  }
  toggleExpandInfo = () => {
    this.setState((showLess) => ({
      ExpandInfo: !showLess.ExpandInfo,
    }));
  };
  render() {
    const { names, username, profilePhoto, dob } = this.props.student;

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
            <h4 className='fullname'>
              {names.preferredName} {names.middleName[0]}. {names.surname}
              <h4>
                <em className>{username}</em>

                <h4>
                  <em>Birthday: {dateFormat}</em>
                </h4>
              </h4>
              <div onClick={() => this.toggleExpandInfo()}>
                {ExpandInfo ? 'Show Less' : 'Show More'}
              </div>
              {ExpandInfo ? (
                <ExpandInfo
                  codewars={this.props.student.codewars}
                  certifications={this.props.student.certifications}
                  cohort={this.props.student.cohort}
                  showMore={this.state.ExpandInfo}
                  toggleExpandInfo={this.toggleExpandInfo}
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
