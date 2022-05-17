import React from "react";

class Sidebar extends React.Component {
  // startDateList = (obj) => {
  //   console.log(obj[0].cohort.cohortStartDate);
  //   const newArr = [];
  //   for (let person of obj) {
  //     const { cohortStartDate } = obj.cohort.cohortStartDate;
  //   }
  // };
  render() {
    return (
      <div>
        <h4 className="sidebar">Choose a Class by Start Date </h4>
      </div>
    );
  }
}

export default Sidebar;
