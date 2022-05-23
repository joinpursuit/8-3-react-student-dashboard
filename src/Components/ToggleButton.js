import React from "react";
// import { faHome } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { forwardRef, useRef } from "react"

class ToggleButton extends React.Component {
  constructor(props, ref) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      isShowMore: false,
      display: '',
      onTrack: false,
    };
  }

  handleClick() {
    this.setState({
      isShowMore: !this.state.isShowMore,
    }, () => {
        //this.props.checkoutValid()
        console.log(this.state.isShowMore)

        if(!this.state.isShowMore){
          this.setState({display: ''})
        } else {
          this.getStudentDetails(this.props.studentList, this.props.studentId)
        }
      }, () => this.props.checkoutValid(this.state.onTrack));
  }

  validateStudentStatus = (resume, linkedin, mockInterview, github, codewars) => {
    //console.log(data)
    if(resume && linkedin && mockInterview && github && (codewars > 600)) {
      this.setState({ 
        //studentStatus: 'On Track to Graduate',
        onTrack: true,
      });
    } else {
      this.setState({ 
        onTrack: false,  
      });
    }
  }

  getStudentDetails(students, id) {
    const studentData = students.filter(student => student.id === id);
    
    const result = 
    studentData.map((e, i) => { 
      this.validateStudentStatus(
        e.certifications.resume,
        e.certifications.linkedin,
        e.certifications.mockInterview,
        e.certifications.github,
        e.codewars.current.total,
      )
      return <>
        <div className="container"> 
            <div> 
              <h4>Codewars: </h4>
              <ul>
                <li key={i++}><span>Current total:</span> {e.codewars.current.total} </li>
                <li key={i++}><span>Last week:</span> {e.codewars.current.lastWeek}</li>
                <li key={i++}><span>Goal:</span> {e.codewars.goal.total}</li>
              </ul>
            </div>
            <div>
              <h4>Scores:</h4>
              <ul>
                <li key={i++}><span>Assignments:</span> {e.cohort.scores.assignments}</li>
                <li key={i++}><span>Projects:</span> {e.cohort.scores.projects}</li>
                <li key={i++}><span>Assessments:</span> {e.cohort.scores.assessments}</li>
              </ul>  
            </div>
            <div>
              <h4>Certifications:</h4>
              <ul>
                <li key={i++}><span>Resume:</span> {e.certifications.resume} </li>
                <li key={i++}><span>Linkedin:</span> {e.certifications.linkedin}</li>
                <li key={i++}><span>Mock Interview:</span> {e.certifications.mockInterview}</li>
                <li key={i++}><span>Github:</span> {e.certifications.github}</li>
              </ul>
            </div>
            <div>Percent of Goal Achieved: </div>
        </div>
      </>
    });

    this.setState({
      display: result,
    })
  }

  render() {
    //const { label = "More", actionToPerform } = this.props;
    const { isShowMore } = this.state;
    let btnLabel=this.state.isShowMore ? "Show Less" : "Show More...";
    return (
      <>
       <button onClick={this.handleClick} display={this.state.display}>{btnLabel}</button>
       <>{this.state.display}</>
    </>
    )
  }
}

export default ToggleButton;