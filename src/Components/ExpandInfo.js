import AStudent from './AStudent';
import App from '../App';

const percentColor = (percent) => {
  if (percent >= 100) {
    return 'U+1F7E9';
  } else if (percent >= 50) {
    return 'U+1F7E1';
  } else if (percent < 50) {
    return 'U+1F534';
  }
};

function ExpandInfo({
  codewars,
  certifications,
  cohort,
  showMore,
  handleClick,
}) {
  const { assignments, projects, assessments } = cohort.scores;
  const { linkedin, github, mockInterview, resume } = certifications;
  const { current, goal } = codewars;
  if (showMore === true) {
    return (
      <div className='expandlistener'>
        <p className='toggle' onClick={handleClick}></p>
        <div className='expandedinfo' />

        <section>
          <br />
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
            {goal.total}
          </p>
          <p>
            <span className='moreInfoBlurb'>Percent of Goal Achieved:</span>
            {Math.round((current.total / goal.total) * 100).toFixed()} %
          </p>
        </section>
        <section>
          <br />
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
          <br />
          <h3>Certifications:</h3>
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
    );
  } else {
    return <p className='expandInfoListener' onClick={handleClick}></p>;
  }
}
export default ExpandInfo;
