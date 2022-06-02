import React from "react";

class Cohort extends React.Component {
    render(){
        const { studentFilter, cohort } = this.props;
        return (
            <div>
                <h2>{cohort}</h2>
                Total Students: {studentFilter.length}
            </div>
        )
    }
};

export default Cohort;