import React from "react";
import Cohort from "./Cohort";
import './CohortList.css'


class CohortList extends React.Component {
    render() {
        // const cohortCode= data.filter((semester)=>{
        //     return (

        //     )
        // })
      return (
        <div className="cohortList">
          <h2>Choose a Class by Start Date</h2>
          <button><strong>All Students</strong></button>
          
        </div>
      );
    }
  }
  
  export default CohortList;

  /*
  TODOS
create a clickable list of cohort codes
  */
