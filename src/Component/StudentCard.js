import Data from "./Data";
import { Component } from "react";



class StudentCard extends Component {
    constructor (){
        super()
        this.state = {
            totalCount: 0,
        }
    }

totalStudent = () => {
    const { totalCount, id} = this.state;
        this.setState({
            totalCount: totalCount + id 
        })
}

    render(){
        const { totalCount , id } = this.state;

        return(
          
            <div className="studentcard">
                  <h3>ALL Students</h3>
                  <div>Total Students {this.totalStudent} </div>
            <div id="products">
               <div>{names}</div>
               <div>{profilePhoto}</div>
               <div>{username}</div>
    
            </div>
          </div>  
        )
    }
}

export default StudentCard;