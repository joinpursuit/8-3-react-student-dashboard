function CohortList(props) {
  return (
    <aside className="cohort-list-container">
      <h2>Choose a Class by Start Date</h2>
      <ul className="cohort-list">
        <li>{props.cohortsArray}</li>
        <li>Cohort 2</li>
      </ul>
    </aside>
  );
}

export default CohortList;
