import React from 'react';
import Student from './Student';

class StudentDash extends React.Component {
  constructor(){
    super();
    this.state={
      students:[]
    }
  }
  render() {
    const { data } = this.props;
    const studentCards = data.map((stuCard) => {
      return (
        <li key={stuCard.id}>
          <Student stuCard={stuCard} />
        </li>
      );
    });

    return (
      <div>
        <h2>All Students</h2>
        <h4>Total Students: {data.length}</h4>
        <ul className="stu-Cards"> {studentCards}</ul>
      </div>
    );
  }
}

export default StudentDash;
