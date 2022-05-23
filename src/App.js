import { render } from "@testing-library/react";
import React from "react";
import StudentCard from "./StudentCard";
import Students from "/Users/candace/Desktop/Pursuit Labs/React Dash Student Project /src/data/data.json";
import "./App.css"
import ShowCohort from "./CohortList";


class App extends React.Component{
  constructor(){
    super();
    this.state = {
      total : "",
    }
  }
  // const total = Students.map((student) => {
  // const  {Students} = this.props
  // // const {} = total
  // })
// this.setState({
//   total: Students.length
// })
//   })


  
  

  render() {
    const {total} = this.state
  return (
    <section id="whole-section">
      <div >
    <div className="box-one" id="all-students-heading">  
    <h1>All Students</h1>
      <p>Total Students: {Students.length}</p>
      </div>
      <div className="cohort-list box-two">
      <ShowCohort/>
      </div>
      <div className="student-card box-three">
    <StudentCard />
    </div>
    </div>
    </section>
    //    {/* <div>
    //   <StudentCard />
    //   </div>
    //  */}
  );
  
  }
}
export default App;
