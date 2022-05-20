import React from 'react';
import './Cohort.css';

class Cohort extends React.Component {

  // add a space between the season and year
  formatCohort = (cohort) => {
    if (cohort === 'All Students') return 'All Students';
    return `${cohort.substring(0, cohort.length - 4)} ${cohort.substring(
      cohort.length - 4
    )}`;
  };

  render() {
    const { semester, updateCohort } = this.props;
    return (
      <div className="cohort" onClick={() => updateCohort(semester)}>
        {this.formatCohort(semester)}
      </div>
    );
  }
}

export default Cohort;
