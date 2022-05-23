import React from 'react'
import ShowMoreInfo from './ShowMoreInfo'

class StudentProfile extends React.Component {
  constructor() {
    super()

    this.state = {
      showMore: false,
    }
  }

  /**
   * getting the data of certifications of true and codewars over 600 of students on track to graduate
   * @param {object[]} person array of object data
   * @returns {boolean } value of true or false
   */
  onTrack = (person) => {
    let cert = person.certifications
    let certVales = Object.values(cert)
    let codeGrades = person.codewars.current.total

    if (!certVales.includes(false) && codeGrades > 600) {
      return true
    }
    return false
  }

  clickShowMore = () => {
    const { showMore } = this.state
    this.setState({ showMore: !showMore })
  }

  /**
   * converting brithday formatting
   * @param {string} date a string of birthday
   * @returns {string} string of number
   */
  formatBirthday = (date) => {
    let formatDate = new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }) // https://www.tutorialstonight.com/format-javascript-date.php  found to convert dob

    return formatDate
  }
  render() {
    const { student } = this.props
    const { names, username, profilePhoto, dob } = student
    const { showMore } = this.state
    
    return (
      <article className='profile'>
        <img src={profilePhoto} alt='student' />
        <p>
          {names.preferredName} {names.middleName.charAt()}. {names.surname}
        </p>
        <p>{username}</p>
        <p>Birthday: {this.formatBirthday(dob)}</p>
        <p className='ontrack'>
          {this.onTrack(student) ? 'On Track to Graduate' : null}
        </p>
        <p
          className={showMore ? 'visited' : 'showmore'}
          onClick={() => this.clickShowMore()}
        >
          {showMore ? 'Show less...' : 'Show more...'}
        </p>
        {showMore ? <ShowMoreInfo student={student} /> : null}
      </article>
    )
  }
}

export default StudentProfile
