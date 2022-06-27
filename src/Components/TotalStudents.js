import React from "react"


class TotalStudents extends React.Component{

//call handle semester click to visibly change layout
    render() {
        const { students, semester } = this.props
        return (
            <div>
                <h3 className="student-info" onClick={this.handleSemesterClick}>{semester}</h3>
                <h5 className="student-info"> Total Students: {students.length}</h5>
            </div>  
        )
    }
}


export default TotalStudents;