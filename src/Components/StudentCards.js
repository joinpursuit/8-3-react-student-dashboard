import React from "react";
import ShowMore from './ShowMore'

class StudentCards extends React.Component {
    render(){
        //state show more: false so that it can change
        const { students } = this.props
            const studentCard = students.map((student) => {
                return (
                    <article className="student">
                        <img src={student.profilePhoto} alt="student"/>
                        <h3>
                            {student.names.preferredName} {student.names.middleName[0]} {student.names.surname}
                        </h3>
                        <p>{student.username}</p>
                        <p> Birthday: {student.dob}</p>
                        <button onClick={<ShowMore/>}> Show More... </button>
                        <ShowMore student={student}/>
                    </article>
                )
            })
            return (
                <div>{studentCard}</div>
            )
        }
}

export default StudentCards;
