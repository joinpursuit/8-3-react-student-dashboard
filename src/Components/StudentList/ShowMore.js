import "./ShowMore.scss";

import check from "../../images/checkmark.png";
import cross from "../../images/crossmark.png";

const ShowMore = (props) => {
  const { students } = props;

  return (
    <section className="ShowMoreSection">
      <section className="codewars">
        <strong>Codewars: </strong>
        <br />
        <br />
        <p>
          <strong>Current Total: </strong>
          {students.codewars.current.total}
        </p>
        <p>
          <strong>Last Week: </strong>
          {students.codewars.current.lastWeek}
        </p>
        <p>
          <strong>Goal: </strong>
          {students.codewars.goal.total}
        </p>
        <p>
          <strong>Percent of Goal Achieved: </strong>
          Do percentage calculation later --- 1804 is 212% of 850 ---
        </p>
      </section>
      <section className="scores">
        <strong>Scores: </strong>
        <br />
        <br />
        <p>
          <strong>Assessments: </strong>
          {students.cohort.scores.assessments * 100}%
        </p>
        <p>
          <strong>Assignments: </strong>
          {students.cohort.scores.assignments * 100}%
        </p>
        <p>
          <strong>Projects: </strong>
          {students.cohort.scores.projects * 100}%
        </p>
      </section>
      <section className="certifications">
        <strong>Certifications: </strong>
        <br />
        <br />
        <p>
          <strong>GitHub: </strong>
          {students.certifications.github ? (
            <img src={check} alt="checkmark"></img>
          ) : (
            <img src={cross} alt="crossmark"></img>
          )}
        </p>
        <p>
          <strong>LinkedIn: </strong>
          {students.certifications.linkedin ? (
            <img src={check} alt="checkmark"></img>
          ) : (
            <img src={cross} alt="crossmark"></img>
          )}
        </p>
        <p>
          <strong>Mock Interview: </strong>
          {students.certifications.mockInterview ? (
            <img src={check} alt="checkmark"></img>
          ) : (
            <img src={cross} alt="crossmark"></img>
          )}
        </p>
        <p>
          <strong>Resume: </strong>
          {students.certifications.resume ? (
            <img src={check} alt="checkmark"></img>
          ) : (
            <img src={cross} alt="crossmark"></img>
          )}
        </p>
      </section>
    </section>
  );
};

export default ShowMore;
