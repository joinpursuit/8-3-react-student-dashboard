import Comments from "./Comments";

const StudentDetails = ({ student }) => {
  let percentage;

  return (
    <div className="details">
      <section className="codewars">
        <h4>Codewars</h4>
        <p>
          <span className="span">Current Total: </span>
          {student.codewars.current.total}
        </p>
        <p>
          <span className="span">Last Week: </span>
          {student.codewars.current.lastWeek}
        </p>
        <p>
          <span className="span">Goal: </span>
          {student.codewars.goal.total}
        </p>
        <p>
          <span className="span">Percent of Goal Achieved: </span>
          <span className={percentage}>
            {Math.floor(
              (student.codewars.current.total / student.codewars.goal.total) *
                100
            )}
            %
          </span>
        </p>
      </section>

      <section className="scores">
        <h4>Scores</h4>
        <p>
          <span className="span">Assignments: </span>
          {student.cohort.scores.assignments * 100}%
        </p>
        <p>
          <span className="span">Projects: </span>
          {student.cohort.scores.projects * 100}%
        </p>
        <p>
          <span className="span">Assessments: </span>
          {student.cohort.scores.assessments * 100}%
        </p>
      </section>

      <section className="certifications">
        <h4>Certifications</h4>
        <p>
          <span className="span">Resume: </span>
          {student.certifications.resume}
        </p>
        <p>
          <span className="span">LinkedIn: </span>
          {student.certifications.linkedin}
        </p>
        <p>
          <span className="span">Mock Interview: </span>
          {student.certifications.mockInterview}
        </p>
        <p>
          <span className="span">GitHub: </span>
          {student.certifications.github}
        </p>
      </section>
      <section className="line-alt" />
      <Comments student={student} />
    </div>
  );
};

export default StudentDetails;
