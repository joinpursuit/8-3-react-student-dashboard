import "./CohortList.css";

function CohortList(props) {
  return (
    <aside className="cohort-list-container">
      <h2>Choose a Class by Start Date</h2>
      <button onClick={props.handleClick} id="all-students-button">
        All Students
      </button>
      <div className="cohort-list">{props.cohortsArray}</div>
    </aside>
  );
}

export default CohortList;
