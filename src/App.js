
import React from 'react';
import StudentDash from './StudentDash';
//import './Student.css';
import './App.css';
import CohortList from './CohortList';
//import TopSection from './TopSection';
//import data from './data/data.json';


class App extends React.Component {
   constructor() {
     super();
     this.state={
      currentCohort: 'All Students', 
      showMore: [],
   };
   //Show More is going to display all students info
  }
  updateCohort = (cohort) => {
    this.setState({ 
      currentCohort: cohort, showMore: []});
  };
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
