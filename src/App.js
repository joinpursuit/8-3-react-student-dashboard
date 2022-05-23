import React, { Component } from 'react';
import data from './data/data.json';
import Students from './Components/Students';
import CohortList from './Components/CohortList';
import NavBar from './Components/NavBar';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      selectedCohortCode: 'All Students',
    };
  }

  handleClickCohortList(item) {
    this.setState({ selectedCohortCode: item });
  }

  render() {
    const { selectedCohortCode } = this.state;

    /**
     * sorts in descending order the cohort date  through the array of student
     * object
     * @param {[]Object} data- array of objects from data.json
     * @returns the date sorted in the descending order
     */
    const sortedArray = data.sort((a, b) => {
      return (
        new Date(b.cohort.cohortStartDate) - new Date(a.cohort.cohortStartDate)
      );
    });

    /**
     * removes the duplicates from the sortedArray
     * @param {[]Array} sortedArray- sortedDates in descending order
     * @returns an array with the unique cohortCode by removing the duplicates
     */
    const uniqueCohortArray = Array.from(
      new Set(sortedArray.map((ele) => ele.cohort.cohortCode))
    );

    /**
     * adding a space to the the uniqueCohortArray
     * @param {[]Array} uniqueCohortArray- removed duplicates from the cohortcode
     * @returns an array with space inserted between the season and the year
     */
    const spacedUniqueCohortArray = uniqueCohortArray.map((ele, indx) => {
      let pos = ele.indexOf('2');
      const pair = Array.from(ele);
      pair.splice(pos, 0, ' ');
      return pair.join('');
    });
    /**
     * inserting the value of All students to the staart of the array
     * @param {[]Array} spacedUniqueCohortArray- which
     * @returns the same array with inserted value
     */
    spacedUniqueCohortArray.unshift('All Students');

    return (
      <div>
        <NavBar />
        <div className='app'>
          <CohortList
            className='cohorList'
            customClickHandler={(ele) => this.handleClickCohortList(ele)}
            spacedUniqueCohortArray={spacedUniqueCohortArray}
          />
          <Students
            className='students'
            data={data}
            selectedCohortCode={selectedCohortCode}
          />
        </div>
      </div>
    );
  }
}

export default App;
