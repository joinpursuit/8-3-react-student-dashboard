function ShowMore(props) {
  const emoji = (emote) => {
    if (emote) {
      return "✅";
    }
    return "❌";
  };

  const {
    student,
    commenter,
    comments,
    reviews,
    commenterHandler,
    commentsHandler,
    reviewsHandler,
    notes,
  } = props;

  const { total, lastWeek } = student.codewars.current;
  const goal = student.codewars.goal.total;
  const percentAchieved = ((total / goal) * 100).toFixed();
  const { assignments, projects, assessments } = student.cohort.scores;
  const { resume, linkedin, github, mockInterview } = student.certifications;

  function checkColor() {
    if (percentAchieved >= 100) {
      return "green";
    } else if (percentAchieved <= 100 && percentAchieved >= 50) {
      return "yellow";
    } else if (percentAchieved < 50) {
      return "red";
    }
  }

  return (
    <section>
      <div className="showMore">
        <div>
          <h3>Codewars:</h3>
          <p>Current Total: {total}</p>
          <p>Last Week: {lastWeek}</p>
          <p>Goal: {goal}</p>
          <p className={checkColor()}>
            Percent of Goal Achieved: {percentAchieved}%
          </p>
        </div>
        <div>
          <h3>Scores</h3>
          <p>Assignments: {assignments * 100}%</p>
          <p>Projects: {projects * 100}%</p>
          <p>Assessments: {assessments * 100}%</p>
        </div>
        <div>
          <h3>Certifications</h3>
          <p>Resume: {emoji(resume)}</p>
          <p>LinkedIn: {emoji(linkedin)}</p>
          <p>Mock Interview: {emoji(mockInterview)}</p>
          <p>Github: {emoji(github)}</p>
        </div>
      </div>
      <div>
        <hr className="form-line" />
        <h3>1-on-1 Notes</h3>
        <form className="form-box" onSubmit={reviewsHandler}>
          <label>Commenter Name </label>
          <input type="text" value={commenter} onChange={commenterHandler} />
          <br /> <br />
          <label>Comment </label>
          <input type="text" value={comments} onChange={commentsHandler} />
          <br /> <br />
          <input id="notes" type="submit" value="Add Note" />
        </form>
        <ul>
          {notes.length ? (
            <li>
              {notes[0].commenter} says, "{notes[0].comment}""
            </li>
          ) : null}
          {reviews.length
            ? reviews.map((review, ind) => <li key={ind}>{review}</li>)
            : null}
        </ul>
      </div>
    </section>
  );
}

export default ShowMore;
