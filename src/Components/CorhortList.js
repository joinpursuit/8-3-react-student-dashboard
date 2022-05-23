function CorhortList({ data, clickCohort }) {
  
  const corhortList = data.map(
    (student) => student.cohort.cohortCode.replace(/\B(?=(\d{4})+(?!\d))/g, ' ') //stackoverflow https://stackoverflow.com/questions/2254185/regular-expression-for-formatting-numbers-in-javascript
  )
  const deduped = new Set(corhortList)
  let dups = [...deduped]

  //stackover https://stackoverflow.com/questions/56560600/is-there-any-way-to-sort-a-list-of-season-year-in-javascript
  let months = { Winter: 1, Fall: 2, Summer: 3, Spring: 4 }
  let sortSeason = dups.sort((a, b) => {
    let first = a.split(' ')
    let second = b.split(' ')
    return second[1] - first[1] || months[first[0]] - months[second[0]]
  })

  return (
    <div className='cohort-list'>
      <h2>Choose a Class by Start Date</h2>
      <section className='semester'>
        <p className='list' onClick={() => clickCohort(null)}>
          All Students
        </p>
        {sortSeason.map((list, ind) => (
          <p key={ind} onClick={() => clickCohort(list)} className='list'>
            {list}
          </p>
        ))}
      </section>
    </div>
  )
}

export default CorhortList
