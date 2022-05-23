import Form from './Form'

function ShowMoreInfo({
  student: { codewars, cohort, certifications },
  student,
}) {
  /**
   * a convert to percentage for the codewar scores
   * @param {number} current data codewar.current.total
   * @param {number} goal data codewar.goal.total
   * @returns {number}
   */
  const percentage = (current, goal) => {
    let percent = 0
    percent = ((current / goal) * 100).toFixed(0)
    return percent
  }

  /**
   * converting the certification if its true or false then replace it with string of img
   * @param {string} emoji
   * @returns {string}
   */
  const emojis = (emoji) => {
    if (!emoji) {
      return '❌'
    } else {
      return '✅'
    }
  }
  /**
   * converting number into color using classname and css the percentage according to color
   * @param {number} percent
   * @returns {string} color
   */
  const checkPercentage = (percent) => {
    if (percent >= 100) {
      return 'green'
    } else if (percent >= 50 && percent < 100) {
      return 'yellow'
    } else {
      return 'red'
    }
  }
  return (
    <div className='show-info'>
      <div>
        <h2>Codewars:</h2>
        <p>Current Total: {codewars.current.total}</p>
        <p>Last Week: {codewars.current.lastWeek}</p>
        <p>Goal: {codewars.goal.total}</p>
        <p
          className={checkPercentage(
            percentage(codewars.current.total, codewars.goal.total)
          )}
        >
          Percent of Goal Achieved:{' '}
          {percentage(codewars.current.total, codewars.goal.total)}%
        </p>
      </div>
      <div className='scores'>
        <h2>Scores</h2>
        <p>Assignments: {cohort.scores.assignments * 100} %</p>
        <p>Project: {cohort.scores.projects * 100} %</p>
        <p>Assessments: {cohort.scores.assessments * 100} %</p>
      </div>
      <div className='certifications'>
        <h2>Certifications</h2>
        <p>Resume: {emojis(certifications.resume)}</p>
        <p>LinkedIn: {emojis(certifications.linkedin)}</p>
        <p>Mock Interview: {emojis(certifications.mockInterview)}</p>
        <p>GitHub: {emojis(certifications.github)}</p>
      </div>
      <Form student={student} />
    </div>
  )
}
export default ShowMoreInfo
