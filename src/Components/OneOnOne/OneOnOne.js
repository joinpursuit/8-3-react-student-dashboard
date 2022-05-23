import { Component } from "react";
import { Form, Button } from "react-bootstrap";
import "./OneOnOne.scss";

class OneOnOne extends Component {
  constructor() {
    super();
    this.state = {
      commenterName: "",
      comment: "",
      commentArr: [],
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const commentArrCopy = [...this.state.commentArr];

    commentArrCopy.push({
      commenterName: this.state.commenterName,
      comment: this.state.comment,
    });

    if (this.state.commenterName === "" || this.state.comment === "") {
      return alert("You must provide a name and a comment.");
    } else {
      this.setState({
        commentArr: commentArrCopy,
      });

      this.clearForm();
    }
  };

  clearForm = () => {
    this.setState({
      commenterName: "",
      comment: "",
    });
  };

  addComment = () => {
    const { commentArr } = this.state;

    let keyNum = 0;

    const comments = commentArr.map((comments) => {
      return (
        <li key={keyNum++} className="comments">
          {comments.commenterName} says, "{comments.comment}"
        </li>
      );
    });

    return comments;
  };

  render() {
    const { commenterName, comment } = this.state;

    return (
      <section className="OneOnOneSection">
        <h1 id="OneOnOneTitle">1 on 1 Notes</h1>
        <Form id="OneOnOneForm" onSubmit={this.handleSubmit}>
          <Form.Group className="mb-3" controlId="form-CommenterName">
            <Form.Label>Commenter Name</Form.Label>
            <Form.Control
              name="commenterName"
              type="text"
              value={commenterName}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="form-Comment">
            <Form.Label>Comment</Form.Label>
            <Form.Control
              name="comment"
              type="text"
              value={comment}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Button variant="dark" type="submit">
            Add Note
          </Button>
        </Form>
        <ul id="commentList">{this.addComment()}</ul>
      </section>
    );
  }
}

export default OneOnOne;
