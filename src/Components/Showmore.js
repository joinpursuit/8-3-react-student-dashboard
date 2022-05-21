import React from 'react';

class Showmore extends React.Component {
  render() {
    const { codewars } = this.props.studentDeets;
    const { assignments, projects, assessments } =
      this.props.studentDeets.cohort.scores;
    const { resume, linkedin, github, mockInterview } =
      this.props.studentDeets.certifications;

    return (
      <div className="extra-Deets">
        <div>
          <h4>Codewars:</h4>
          <p>Current Total: {codewars.current.total}</p>

          <p>Goal: {codewars.goal.total}</p>
          <p>
            Percent of Goal Achieved:
            <span style={{ color: 'green' }}>
              {((codewars.current.total / codewars.goal.total) * 100).toFixed(
                2
              )}
              %
            </span>
          </p>
        </div>
        <div>
          <h4>Scores:</h4>
          <p>Assignment:{assignments * 100}%</p>
          <p>Projects:{projects * 100}%</p>
          <p>Assessments:{assessments * 100}%</p>
        </div>
        <div>
          <h4>Certifications:</h4>
          <p>Resume: {resume ? '✅' : '❌'}</p>
          <p>Linkedin: {linkedin ? '✅' : '❌'}</p>
          <p>Mock Interview: {mockInterview ? '✅' : '❌'}</p>
          <p>GitHub: {github ? '✅' : '❌'}</p>
        </div>
      </div>
    );
  }
}

export default Showmore;
