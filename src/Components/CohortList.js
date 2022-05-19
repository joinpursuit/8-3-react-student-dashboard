function CohortList(props) {
  return (
    <aside className="cohort-list-container">
      <h2>Choose a Class by Start Date</h2>
      <ul className="cohort-list">{props.cohortsArray}</ul>
    </aside>
  );
}

export default CohortList;
