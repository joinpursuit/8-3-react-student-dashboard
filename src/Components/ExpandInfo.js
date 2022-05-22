/*import data from './data/data.json';
import AStudent from './AStudent';
function ExpandInfo({ codewars, certifications, cohort, showMore }) {
  const { assignments, projects, assessments } = cohort.scores;
  const { linkedin, github, mockInterview, resume } = certifications;
  const { current, goal } = codewars;
  if (showMore === true) {
    return (
      <div className='expandlistener'>
        <p className='toggle' onClick={AStudent.toggleExpandInfo}>
          Show Less ...
        </p>
        <div className='expandedinfo'>
          <section>
            <h3> Codewars:</h3>
            <p>
              <span className='moreInfoBlurb'>Current Total:</span>
              {data.current.total}
            </p>
            <p>
              <span className='moreInfoBlurb'> Last Week:</span>
              {data.current.lastWeek}
            </p>
            <p>
              <span className='moreInfoBlurb'> Goal: </span>
              {data.global.total}
            </p>
            <p>
              <span className='moreInfoBlurb'>Percent of Goal Achieved:</span>
              {((data.current.total / data.global.total) * 100).toFixed()}%
            </p>
          </section>
          <section>
            <h3>Scores:</h3>
            <p>
              <span className='moreInfoBlurb'> Assignments:</span>
              {data.assignments * 100}%
            </p>
            <p>
              <span className='moreInfoBlurb'> Projects:</span>
              {data.projects * 100}%
            </p>
            <p>
              <span className='moreInfoBlurb'>Assessments:</span>
              {data.assessments * 100}%
            </p>
            <section>
              <p>
                <span className='moreInfoBlurb'> Resume:</span>
                {data.resume ? `\u2705` : `\u274c`}
              </p>
              <p>
                <span className='moreInfoBlurb'> LinkedIn:</span>
                {data.linkedin ? '\u2705' : '\u274c'}
              </p>
              <p>
                <span className='moreInfoBlurb'> Mock Interview:</span>
                {data.mockInterview ? `\u2705` : `\u274c`}
              </p>
              <p>
                <span className='moreInfoBlurb'> GitHub:</span>
                {data.github ? `\u2705` : `\u274c`}
              </p>
            </section>
          </section>
        </div>
      </div>
    );
  } else {
    return (
      <p className='expandInfoListener' onClick={toggleExpandInfo}>
        Show More...
      </p>
    );
  }
}
export default ExpandInfo;
*/
