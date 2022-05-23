import OneOnOne from './OneOnOne';

function ShowMore({
  codewars,
  certifications,
  cohort,
  notes,
  showMore,
  handleClick,
}) {
  const { current, goal } = codewars;
  const { resume, linkedin, github, mockInterview } = certifications;
  const { assignments, projects, assessments } = cohort.scores;

  if (showMore) {
    return (
      <div>
        <p className="show-toggle" onClick={handleClick}>
          Show Less...
        </p>
        <div className="show-more-container">
          <article>
            <h4>Codewars:</h4>
            <p>
              <span className="color-text">Current Total: </span>
              {current.total}
            </p>
            <p>
              <span className="color-text">Last Week: </span>
              {current.lastWeek}
            </p>
            <p>
              <span className="color-text">Goal: </span>
              {goal.total}
            </p>
            <p>
              <span className="color-text">Percent of Goal Achieved:</span>
              {((current.total / goal.total) * 100).toFixed()}%
            </p>
          </article>
          <article>
            <h4>Scores</h4>
            <p>
              <span className="color-text">Assignments: </span>
              {assignments * 100}%
            </p>
            <p>
              <span className="color-text">Projects: </span>
              {projects * 100}%
            </p>
            <p>
              <span className="color-text">Assessments: </span>
              {assessments * 100}%
            </p>
          </article>
          <article>
            <h4>Certifications</h4>
            <p>
              <span className="color-text">Resume: </span>
              {resume ? '✅' : '❌'}
            </p>
            <p>
              <span className="color-text">LinkedIn: </span>
              {linkedin ? '✅' : '❌'}
            </p>
            <p>
              <span className="color-text">Mock Interview: </span>
              {mockInterview ? '✅' : '❌'}
            </p>
            <p>
              <span className="color-text">GitHub: </span>
              {github ? '✅' : '❌'}
            </p>
          </article>
          <OneOnOne notes={notes} />
        </div>
      </div>
    );
  } else {
    return (
      <p className="show-toggle" onClick={handleClick}>
        Show More...
      </p>
    );
  }
}

export default ShowMore;
