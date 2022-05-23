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

      <section className="line-alt" />
      <Comments student={student} />
    </div>
  );
};

export default StudentDetails;
