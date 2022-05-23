import React from "react";
import Student from "./Student";

class StudentList extends React.Component {
    selectCohort = (input, selectedCohort) => {
        if(selectedCohort === "AllStudents") {
            return input;
        } else {
            return input.filter((student) => {
                return student.cohort.cohortCode === selectedCohort;
            })
        }
    };

    displayStudents = (
        data,
        selectedCohort,
        deets,
        deetsNstuff,
        comments,
        commentStuff,
     ) => {
        let selectedStudent = this.selectCohort(input, selectedCohort);

        return selectedStudent.map((selectedStudent, index) => {
            return (
                <Student studentInfo={selectedStudent} key={index} 
                         deets={deets} deetsNstuff={deetsNstuff}
                         comments={comments} commentStuff={commentStuff} 
                />
            )
        })
    };

    parseCohort = (cohort) => {
        if(cohort === "AllStudents") return "All Students";
        return `${cohort.substring(0, cohort.length -4)} ${cohort.substring(cohort.length -4)}`
    };

    render() {
        const {
            data,
            selectedCohort,
            deets,
            deetsNstuff,
            comments,
            commentStuff,
        } = this.props

        const studentCards = this.displayStudents(
            data,
            selectedCohort,
            deets,
            deetsNstuff,
            comments,
            commentStuff,
        )
        return (
            <div className="studentList">
                <h2>{this.parseCohort(selectedCohort)}</h2>
                <h3 className="studentCard">Total Students: {studentCards.length}</h3>
                {studentCards}
                <Student />
            </div>
        )
    }
}

export default StudentList;