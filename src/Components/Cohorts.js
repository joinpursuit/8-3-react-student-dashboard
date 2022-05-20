import Semester from './Semester';

function Cohorts({ filterByClass }) {
  return (
    <section className="filter-class">
      <h2>Choose a Class by Start Date</h2>
      <Semester
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
