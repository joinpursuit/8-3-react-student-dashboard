import React from "react";
import ToggleButton from "./ToggleButton";
import StudentStatus from "./StudentStatus";

//const Students = (props) => {
class Students extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDetails: false,
      studentStatus: '',
    }
    //this.ChildElement = React.createRef();
    //this.handleClick = this.handleClick.bind(this);

  }

  // const handleClick = () => {
  //   //this.forceUpdate(); // se ejecutará el método `render()` de MurrayList, que hará a su vez que se ejecute de nuevo el método `render()` de los hijos
  //   //console.log(this.props.label)
  // }
  
  // validateCohort = (this.props.filter) => {
  //   dd
  // }
  // const toggleShowHide = () => {
  //   //this.setState(state => ({ isDisplayed: !state.isDisplayed }));
  //   //console.log(isDisplayed)
  // };

  //const checkoutValid = (data) => {
  //validateStudentStatus = (resume, linkedin, mockInterview, github, codewars) => {
  validateStudentStatus = (resume) => {
    //console.log(data)
    //if(resume && linkedin && mockInterview && github && (codewars > 600)) {
    if(resume) {
      this.setState({ 
        studentStatus: 'On Track to Graduate',
      });
    } else {
      this.setState({ 
        studentStatus: '',  
      });
    }
  }

  getFormatedDOB = (data) => {
    //2/9/1997
    const e = data.split('/');
    const date = new Date(`${e[2]}-${e[0]}-${e[1]}`);  
    const month = date.toLocaleString('default', { month: 'long' });
    // console.log(month)
    // console.log(`${month} ${date.getDay()}, ${date.getFullYear()}`)
    return `${month} ${e[1]}, ${e[2]}`;  
  }

  render() {
    const studentList = (this.props.data).map(e => e)
    
    return(
      <>
        <ul>
        {(this.props.data).map(student => {
         return <li key={student.id}>
                  <section className="personal-data">
                    <img src={student.profilePhoto}/>
                    <div>
                      <div className="container">
                        <h4>{`${student.names['preferredName']} ${(student.names['middleName']).substring(0, 1)} ${student.names['surname']}`}</h4>
                        <span className="track-check"><StudentStatus  resume={student.certifications.resume} 
                                              linkedin={student.certifications.linkedin}
                                              mockInterview={student.certifications.mockInterview}
                                              github={student.certifications.github}
                                              codewars={student.codewars.current.total}
                        /></span>
                      </div>
                      <p>Username: <span>{student.username}</span></p>
                      <p>Birthday: <span>{this.getFormatedDOB(student.dob)}</span></p>
                    </div>
                  </section> 
                  <ToggleButton studentList={this.props.data} studentId={student.id}/>  
                </li>
        })}
        </ul>
      </>
    )
  }
}

const Button = ({ onClick }) => (
  <button onClick={onClick} type="button">
    Toggle Show/Hide
  </button>
);
const HelloReact = ({ hello, isDisplayed }) =>
  isDisplayed ? <h1>{hello}</h1> : null;

export default Students;