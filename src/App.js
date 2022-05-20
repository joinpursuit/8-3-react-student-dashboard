import React from "react";
import Students from "./Components/Students";
import Cohorts from "./Components/Cohorts";
import StudentsByCohort from "./Components/StudentsByCohort";
import Data from "./data/data.json";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: Data,
      cohorts: Data,
      filter: '*',
    }
  }

  filterlState = (cohort) => {

    const filtered = this.state.data.filter(e => e.cohort.cohortCode === cohort)
    this.setState({ 
      data: filtered,
      filter: cohort,
    });  
  }

  getCohort = (cohort) => {
    if(cohort !== '*') {
      this.setState({ 
        data: Data,
      }, () => this.filterlState(cohort));
    } else {
      this.setState({ 
        data: Data,
        filter: '*',
      });
    }
  }

  handleDelete = (itemId, itemAmount, remove) => {
    if(remove) {
      const newCart = this.state.cart.filter(item => item.id !== itemId);
      this.setState({ 
        cart: newCart,
        total: this.state.total - itemAmount,
        count: this.state.count - 1,
        // >> Calling a callback function to recalculate discount 
      }, () => this.recalculateDiscount(this.state.count, this.state.total));
    }
  };

  render(){
    return (
      <>
        <header><h1>Student Dashboard</h1></header>
        <main>
          <aside>
            <Cohorts data={this.state.cohorts} getCohort={this.getCohort}/>
          </aside>
          <article>
            <StudentsByCohort data={this.state.data} filter={this.state.filter}/>
            <Students data={this.state.data} filter={this.state.filter}/>
          </article>
        </main>
        <footer></footer>
      </>
    );
  }
}

export default App;