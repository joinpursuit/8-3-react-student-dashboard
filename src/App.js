import React from 'react';
import StudentDash from './Components/StudentDash';
import './App.css';
import CohortList from './Components/CohortList';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentCohort: 'All Students',
      showMore: [],
    };
  }

  /**
   * updateCohort
   * @param {str} cohort : cohortCode from the data
   * side effect; updates the state key 'currentCohort' when a cohort is clicked.
   */
  updateCohort = (cohort) => {
    this.setState({
      currentCohort: cohort,
      showMore: [],
    });
  };

  /**
   *showMoreHandler- toggles showMore state key to contain or remove students id
   * @param {str} id : a students id#.
   * side effect: updates the state key 'showMore' with an id # when the show more buton is clicked. reverses when clicked again.
   */
  showMoreHandler = (id) => {
    let showMoreCopy = [...this.state.showMore];
    if (showMoreCopy.includes(id)) {
      showMoreCopy.splice(showMoreCopy.indexOf(id), 1);
    } else {
      showMoreCopy.push(id);
    }
    this.setState({
      showMore: showMoreCopy,
    });
  };

  
  

  render() {
    const { data } = this.props;
    const { currentCohort, showMore } = this.state;

    return (
      <>
        <header className="Header"> Student Dashboard</header>
        <div className="school-dash">
          <CohortList data={data} updateCohort={this.updateCohort} />
          <StudentDash
            data={data}
            showMore={showMore}
            currentCohort={currentCohort}
            showMoreHandler={this.showMoreHandler}
          />
        </div>
      </>
    );
  }
}

export default App;
