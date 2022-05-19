import "./CohortList.css";

function CohortList(props) {
  return (
    <aside className="cohort-list-container">
      <h2>Choose a Class by Start Date</h2>
      <div className="cohort-list">{props.cohortsArray}</div>
    </aside>
  );
}

export default CohortList;
