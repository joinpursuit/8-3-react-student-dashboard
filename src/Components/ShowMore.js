import React from "react";

class ShowMore extends React.Component {

    percentageColor = (percentage) => {
        if (percentage >= 100) {
            return 'green'
        } else if (percentage >= 50) {
            return 'yellow'
        } else {
            return 'red'
        }
    };

    addNoteHandler = (event) => {
        event.preventDefault()
    };

    commentDisplay = (students) => {
        if (students.notes.length) {
            return students.notes.map ((note, idx) => {
                return (
                    <li key={idx}>
                        {note.commenter} says "{note.comment}"
                    </li>
                );
            });
        } else {
            return ''
        }
    }

    render () {
        const { student } = this.props
        // const { codewars } = this.props.student.codewars
        // const { assignments, projects, assessments } = this.props.student.cohort.scores
        // const { resume, linkedin, github, mockInterview } = this.props.student.certifications
        
        console.log('This is the prop', this.props)


        const percentage = (
            (student.codewars.current.total / student.codewars.goal.total) * 100
        ).toFixed(2);



        return (
            <div className="extras">
                <div>
                    <h4>Codewars:</h4>
                    <p>Current Total: {student.codewars.current.total}</p>
                    
                    <p>Goal: {student.codewars.goal.total}</p>
                    <p>
                        Percent of Goal Achieved: {' '}
                        <span className={this.percentageColor(percentage)}>
                            {percentage}%
                        </span>
                    </p>
                </div>
                <div>
                    <h4>Scores:</h4>
                    <p>Assignment: {student.cohort.scores.assignments * 100}%</p>
                    <p>Projects: {student.cohort.scores.projects * 100}%</p>
                    <p>Assessments: {student.cohort.scores.assessments * 100}%</p>
                </div>
                <div>
                    <h4>Certifications:</h4>
                    <p>Resume: {student.certifications.resume ? '✅' : '❌'}</p>
                    <p>LinkedIn: {student.certifications.linkedin ? '✅' : '❌'}</p>
                    <p>Mock Interview: {student.certifications.mockInterview ? '✅' : '❌'}</p>
                    <p>GitHub: {student.certifications.github ? '✅' : '❌'}</p>
                </div>
                <div className="comments">
                    <h3> 1 On 1 Notes</h3>
                    <form>
                        <label htmlFor="commenter">Name:</label>
                        <input type="text" name="commenter" />
                        <br></br>
                        <br></br>
                        <label htmlFor="comment">Comment:</label>
                        <input type="text" name="comment" />

                        <button onClick={this.addNoteHandler}>Add Note</button>
                    </form>
                    <div>{this.commentDisplay(student)}</div>
                </div>
            </div>
        )
    }
}

export default ShowMore