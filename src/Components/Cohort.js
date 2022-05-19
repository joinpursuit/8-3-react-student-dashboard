import React from "react";
import "./Cohort.css";

class Cohort extends React.Component {
  render() {
    console.log("hello");
    const { cohort } = this.props;
    return <div className="cohort">{cohort}</div>;
  }
}

export default Cohort;
