import "./ShowMore.scss";

import check from "../../images/checkmark.png";
import cross from "../../images/crossmark.png";

const ShowMore = (props) => {
  const { students, showMore, studentID } = props;

  const calculatePercentageOfGoal = (total, goal) => {
    let percentage = total / goal;
    percentage *= 100;
    return percentage.toFixed(0);
  };

  if (students.id === studentID) {
    return (
      <>
        {showMore ? (
          <section className="ShowMoreSection">
            <section className="codewars">
              <strong>Codewars: </strong>
              <br />
              <br />
              <p>
                <strong className="grades">Current Total: </strong>
                {students.codewars.current.total}
              </p>
              <p>
                <strong className="grades">Last Week: </strong>
                {students.codewars.current.lastWeek}
              </p>
              <p>
                <strong className="grades">Goal: </strong>
                {students.codewars.goal.total}
              </p>
              <p>
                <strong className="grades">Percent of Goal Achieved: </strong>
                {calculatePercentageOfGoal(
                  students.codewars.current.total,
                  students.codewars.goal.total
                )}
                %
              </p>
            </section>
            <section className="scores">
              <strong>Scores: </strong>
              <br />
              <br />
              <p>
                <strong className="grades">Assessments: </strong>
                {students.cohort.scores.assessments * 100}%
              </p>
              <p>
                <strong className="grades">Assignments: </strong>
                {students.cohort.scores.assignments * 100}%
              </p>
              <p>
                <strong className="grades">Projects: </strong>
                {students.cohort.scores.projects * 100}%
              </p>
            </section>
            <section className="certifications">
              <strong>Certifications: </strong>
              <br />
              <br />
              <p>
                <strong className="grades">GitHub: </strong>
                {students.certifications.github ? (
                  <img src={check} alt="checkmark"></img>
                ) : (
                  <img src={cross} alt="crossmark"></img>
                )}
              </p>
              <p>
                <strong className="grades">LinkedIn: </strong>
                {students.certifications.linkedin ? (
                  <img src={check} alt="checkmark"></img>
                ) : (
                  <img src={cross} alt="crossmark"></img>
                )}
              </p>
              <p>
                <strong className="grades">Mock Interview: </strong>
                {students.certifications.mockInterview ? (
                  <img src={check} alt="checkmark"></img>
                ) : (
                  <img src={cross} alt="crossmark"></img>
                )}
              </p>
              <p>
                <strong className="grades">Resume: </strong>
                {students.certifications.resume ? (
                  <img src={check} alt="checkmark"></img>
                ) : (
                  <img src={cross} alt="crossmark"></img>
                )}
              </p>
            </section>
          </section>
        ) : null}
      </>
    );
  } else {
    return null;
  }
};

export default ShowMore;
