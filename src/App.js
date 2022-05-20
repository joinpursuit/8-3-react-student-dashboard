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

    const sortedArray = data.sort((a, b) => {
      return (
        new Date(b.cohort.cohortStartDate) - new Date(a.cohort.cohortStartDate)
      );
    });

    const uniqueCohortArray = Array.from(
      new Set(sortedArray.map((ele) => ele.cohort.cohortCode))
    );

    const spacedUniqueCohortArray = uniqueCohortArray.map((ele, indx) => {
      let pos = ele.indexOf('2');
      const pair = Array.from(ele);
      pair.splice(pos, 0, ' ');
      return pair.join('');
    });
    spacedUniqueCohortArray.unshift('All Students');
    // console.log(spacedUniqueCohortArray);

    const filteredArray = spacedUniqueCohortArray.filter(
      (ele) => ele === this.state.selectedCohortCode
    )[0];
    // console.log('filtered=', filteredArray);

    return (
      <div>
        <NavBar />
        <div
          className='app'
          // style={{ display: 'grid', gridTemplateColumns: '1fr 2fr' }}
        >
          <CohortList
            className='cohorList'
            customClickHandler={(ele) => this.handleClickCohortList(ele)}
            spacedUniqueCohortArray={spacedUniqueCohortArray}
          />
          <Students
            className='students'
            data={data}
            selectedCohortCode={selectedCohortCode}
            filteredArray={filteredArray}
            // uniqueCohortArray={uniqueCohortArray}
          />
        </div>
      </div>
    );
  }
}

export default App;
