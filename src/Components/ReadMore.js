import { Component } from 'react';
import './ReadMore.css';

class ReadMore extends Component {
  constructor() {
    super();

    this.state = {
      isReadMore: false,
      commentsList: [],
    };
    // >> Binding
    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    let newList = [...this.state.commentsList];
    newList.push({
      commentorName: this.state.commentorName,
      commentMessage: this.state.commentMessage,
    });
    this.setState({ commentsList: newList });
  };

  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
  };

  render() {
    const { studentData } = this.props;
    // const {commentorName, commentMessage}= this.state
    const codeWarsLastweek = studentData.codewars.current.lastWeek;
    const goalsTotal = studentData.codewars.goal.total;
    const codewarsTotal = studentData.codewars.current.total;
    const percentage = ((codewarsTotal / goalsTotal) * 100).toFixed(0);

    const ReadMoreShowLess = () => {
      this.setState({ isReadMore: !this.state.isReadMore });
    };

    const getColor = (percentage) => {
      return percentage >= 100
        ? 'green'
        : percentage > 50 && percentage < 100
        ? '#DAA520'
        : 'red';
    };
    const toggle = this.state.isReadMore;
    return (
      <div>
        <button
          className='btn'
          style={{
            color: 'green',
            border: 'none',
            background: 'transparent',
            textDecoration: 'underline',
          }}
          onClick={ReadMoreShowLess}
        >
          {toggle ? 'Show Less...' : 'Read More...'}
        </button>
        {toggle && (
          <section className='read'>
            <section className='moreLess'>
              <div className='codewars'>
                <h4>CodeWars</h4>
                <p>Total: {codewarsTotal}</p>
                <p>Last Week: {codeWarsLastweek}</p>
                <p>Goal: {goalsTotal}</p>
                <p>
                  Percent of Goal Achieved:
                  <span style={{ color: getColor(percentage) }}>
                    {percentage}
                  </span>
                  %
                </p>
              </div>
              <div className='scores'>
                <h4>Scores</h4>
                <p>
                  Assignments: {studentData.cohort.scores.assignments * 100}%
                </p>
                <p>Projects: {studentData.cohort.scores.projects * 100}%</p>
                <p>
                  Assessments: {studentData.cohort.scores.assessments * 100}%
                </p>
              </div>
              <div className='certify'>
                <h4>Certifications</h4>
                <p>
                  Ceritications:{' '}
                  {!studentData.certifications.resume ? (
                    <span className='xmark'>&#10005;</span>
                  ) : (
                    <span className='check'>&#10003;</span>
                  )}
                </p>
                <p>
                  Ceritications:{' '}
                  {!studentData.certifications.linkedin ? (
                    <span className='xmark'>&#10005;</span>
                  ) : (
                    <span className='check'>&#10003;</span>
                  )}
                </p>
                <p>
                  Ceritications:{' '}
                  {!studentData.certifications.github ? (
                    <span className='xmark'>&#10005;</span>
                  ) : (
                    <span className='check'>&#10003;</span>
                  )}
                </p>
                <p>
                  Ceritications:{' '}
                  {!studentData.certifications.mockInterview ? (
                    <span className='xmark'>&#10005;</span>
                  ) : (
                    <span className='check'>&#10003;</span>
                  )}
                </p>
              </div>
            </section>
            <h4>1-on-1 Notes</h4>
            <section className='comments-section'>
              <form className='comment' onSubmit={this.handleFormSubmit}>
                <div>
                  <label htmlFor='commentorName'>Commentors Name</label>
                  <input
                    id='commentorName'
                    name='commentorName'
                    type='text'
                    value={this.state.commentorName}
                    onChange={this.handleChange}
                    required
                  />
                </div>

                <div>
                  <label htmlFor='commentMessage'>Comments </label>
                  <input
                    id='commentMessage'
                    name='commentMessage'
                    type='text'
                    value={this.state.commentMessage}
                    onChange={this.handleChange}
                    required
                  />
                </div>
                <div>
                  <input type='submit' value='Add Note' />
                </div>
              </form>
            </section>
            <section className='comments-list'>
              <ul>
                {this.state.commentsList.map((comments, indx) => (
                  <li key={indx}>
                    {console.log(comments)}
                    {comments.commentorName}{' '} says '{comments.commentMessage}'
                  </li>
                ))}
              </ul>
            </section>
          </section>
        )}
      </div>
    );
  }
}

export default ReadMore;
