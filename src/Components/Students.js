import React, { useState } from "react";
import ToggleButton from "./ToggleButton";
// import StudentDetails from "./StudentDetails";

//const Students = (props) => {
class Students extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDetails: false,
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
  checkoutValid = () => {
    //console.log(data)
    if(this.state.showDetails === false) {
      this.setState({ 
        showDetails: true,  
      });
    } else {
      this.setState({ 
        showDetails: false,  
      });
    }
  }

  getFormatedDOB = (data) => {
    
    //2/9/1997
    const d = data.split('/');
    console.log(d)
    const date = new Date(`${d[2]}-${d[0]}-${d[1]}`);  // 2009-11-10
    const month = date.toLocaleString('default', { month: 'long' });
    console.log(date)
    console.log(`${month} ${date.getDay()}, ${date.getFullYear()}`)
    return `${month} ${d[1]}, ${d[2]}`;  
  }

  render() {
    //const hello = 'Say Hello to learning Props/State in React!';
    //const [mostrarComponente, setMostrarComponente] = useState(true);

    //const childelement = this.ChildElement.current;
    //const childCompRef = useRef()
    // const studentList = new Set(
    //   (this.props.data).map(e => e.names)
    // )
    const studentList = (this.props.data).map(e => e)
    
    return(
      <>
        {console.log(studentList.length)}
        <ul>
        {(this.props.data).map(student => {
         return <li key={student.id}>
                  <section className="student-personal-data">
                    {/* <div className="container"> */}
                    <img src={student.profilePhoto}/>
                    <div>
                      <h4>
                        {`${student.names['preferredName']} ${(student.names['middleName']).substring(0, 1)} ${student.names['surname']}`}
                      </h4>
                      <p>{student.username}</p>
                      <p>Birthday: <span>{this.getFormatedDOB(student.dob)}</span></p>
                    </div>
                  </section> 
                  <section>
                    <ToggleButton checkoutValid={this.checkoutValid} studentList={this.props.data} studentId={student.id}/>  
                  </section>
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