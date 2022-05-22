import React from 'react';
import Student from './Student';

class StudentDash extends React.Component {
  render() {
    const { data, currentCohort} = this.props;
    console.log(currentCohort)
  const filteredStu = data.filter((stuCard)=> {
    if (currentCohort === "All Students") {
      return stuCard
    }
    return(stuCard.cohort.cohortCode === currentCohort)  
  
  
  
  })
console.log(filteredStu)
    const studentCards = filteredStu.map((stuCard) => {
      return (
        <li key={stuCard.id}>
          <Student stuCard={stuCard} />
        </li>
      );
    });

    return (
      <div>
        <h2>{currentCohort}</h2>
        <h4>Total Students: {studentCards.length}</h4>
        <ul className="stu-Cards"> {studentCards}</ul>
      </div>
    );
  }
}

export default StudentDash;