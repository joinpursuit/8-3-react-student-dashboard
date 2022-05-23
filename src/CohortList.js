import React, { useSyncExternalStore } from "react";
import StudentCard from "./StudentCard";
import Students from "/Users/candace/Desktop/Pursuit Labs/React Dash Student Project /src/data/data.json";
import "./CohortList.css";
import { render } from "@testing-library/react";

// const ShowCohort = () => {
    function CohortList({ students, selectedCohort }) {
        const cohortList = Students.map(
          (student) => student.cohort.cohortCode.replace(/\B(?=(\d{4})+(?!\d))/g, ' ') 
        )
        const deduped = new Set(cohortList)
        let itsdeduped = [...deduped]
    
    
        let months = { Winter: 1, Fall: 2, Summer: 3, Spring: 4 }
        let sortSeason = itsdeduped.sort((a, b) => {
          let first = a.split(' ')
          let second = b.split(' ')
          return second[1] - first[1] || months[first[0]] - months[second[0]]
        })
    
        return (
          <div className='cohort-list'>
            <h2>Choose a Class by Start Date</h2>
            <section className='semester'>
              <p className='list' onClick={() => selectedCohort(null)}>
                All Students
              </p>
              {sortSeason.map((list, ind) => (
                <p key={ind} onClick={() => selectedCohort(list)} className='list'>
                  {list}
                </p>
              ))}
            </section>
          </div>
        )
              }
export default CohortList;
