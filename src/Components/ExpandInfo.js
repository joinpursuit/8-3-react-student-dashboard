function ExpandInfo({
  codewars,
  certifications,
  cohort,
  showMore,
  stateOfShowMore,
}) {
  const { linkedin, github, mockInterview, resume } = certificates;

  if (showMore === true) {
    return (
      <div className='expandlistener'>
        <p className='toggle' onClick={toggleShowMore}>
          Show Less ...
        </p>
        <div className='expandedinfo'>
          <section>
            <h3> Codewars:</h3>
            <p>
              <span className='moreInfoBlurb'>Current Total:</span>
              {current.total}
            </p>
            <p>
              <span className='moreInfoBlurb'> Last Week:</span>
              {current.lastWeek}
            </p>
            <p>
              <span className='moreInfoBlurb'> Goal: </span>
              {global.total}
            </p>
            <p>
              <span className='moreInfoBlurb'>Percent of Goal Achieved:</span>
              {((current.total / global.total) * 100).toFixed()}%
            </p>
          </section>
          <section>
            <h3>Scores:</h3>
            <p>
              <span className='moreInfoBlurb'> Assignments:</span>
              {assignments * 100}%
            </p>
            <p>
              <span className='moreInfoBlurb'> Projects:</span>
              {projects * 100}%
            </p>
            <p>
              <span className='moreInfoBlurb'>Assessments:</span>
              {assessments * 100}%
            </p>
            <section>
              <p>
                <span className='moreInfoBlurb'> Resume:</span>
                {resume ? `\u2705` : `\u274c`}
              </p>
              <p>
                <span className='moreInfoBlurb'> LinkedIn:</span>
                {linkedin ? '\u2705' : '\u274c'}
              </p>
              <p>
                <span className='moreInfoBlurb'> Mock Interview:</span>
                {mockInterview ? `\u2705` : `\u274c`}
              </p>
              <p>
                <span className='moreInfoBlurb'> GitHub:</span>
                {github ? `\u2705` : `\u274c`}
              </p>
            </section>
          </section>
        </div>
      </div>
    );
  }
}
export default ExpandInfo;
