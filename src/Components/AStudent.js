import { render } from '@testing-library/react';
import ExpandInfo from './ExpandInfo';
import './AStudent.css';
import React from 'react';

class AStudent extends React.Component {
  constructor(props) {
    super();
    this.state = {
      ExpandInfo: true,
    };
  }
  toggleExpandInfo = () => {
    this.setState((previousState) => ({
      showMore: !previousState.showMore,
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
            </h4>
            <h4>
              <em className>{username}</em>
            </h4>
            <h4>
              <em>Birthday: {dateFormat}</em>
            </h4>
          </div>
        </section>
      </>
    );
  }
}
export default AStudent;
