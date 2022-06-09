import React from 'react';
import Student from './Student';

class StudentDash extends React.Component {
  /**
   * chooseStudent- filter through students for matches to their cohortCodes
   * @param {object[]} data - full array of all 250 student info objects
   * @param {string} currentCohort - cohort code ex. winter2025
   * @returns student object(s)
   */

  chooseStudent = (data, currentCohort) => {
    if (currentCohort === 'All Students') {
      return data; // i'll need all 250 student objects
    } else {
      return data.filter((stu) => {
        return stu.cohort.cohortCode === currentCohort;
      });
    }
  };

  /**
   * showCohortStudents: reveals list of students
   * @param {object[]} data - full array of all 250 student info objects
   * @param {string} currentCohort - cohort code ex. winter2025
   * @param {array} showMore - value of state key 'showMore'
   * @param {func} showMoreHandler -updates the state key 'showMore'.
   * @returns
   */
  showCohortStudents = (data, currentCohort, showMore, showMoreHandler) => {
    return this.chooseStudent(data, currentCohort).map((stud) => {
      return (
        <Student
          key={stud.id}
          showMore={showMore}
          showMoreHandler={showMoreHandler}
          studentDeets={stud}
        />
      );
    });
  };

  /**
   * formatCohort- adds a space between season name and year
   * @param {string} cohort : ex.winter2025
   * @returns string with a space between the season and year(ex. winter 2025)
   */

  formatCohort = (cohort) => {
    if (!cohort === 'All Students') {
      return `${cohort.substring(0, cohort.length - 4)} ${cohort.substring(
        cohort.length - 4
      )}`;
    }

    return 'All Students';
  };

  render() {
    const { data, currentCohort, showMore, showMoreHandler } =
      this.props;

    const cards = this.showCohortStudents(
      data,
      currentCohort,
      showMore,
      showMoreHandler
    );
    return (
      <div className="studentDash">
        <h2>{this.formatCohort(currentCohort)}</h2>
        <h3>Total Students: {cards.length}</h3>
        {cards}
      </div>
    );
  }
}

export default StudentDash;
