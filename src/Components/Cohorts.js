import Cohort from './Semester';

function Cohorts({ filterByClass }) {
  return (
    <section className="sort-class">
      <h2>Choose a Class by Start Date</h2>
      <Cohort
        handleClick={(event) =>
          filterByClass(
            event.target.textContent,
            event.target.textContent.split(' ').join('')
          )
        }
      />
    </section>
  );
}

export default Cohorts;
