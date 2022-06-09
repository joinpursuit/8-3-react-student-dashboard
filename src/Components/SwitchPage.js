import React from "react";
import "./SwitchPage.css";

class SwitchPage extends React.Component {
  render() {
    const { updatePageNum, studentListArrayLength, pageNum } = this.props;

    return (
      <div className="switchPage">
        <div
          className="prevPage"
          onClick={() => {
            updatePageNum("prevPage", studentListArrayLength);
          }}
        >
          Prev Page
        </div>
        <div className="currentPage">{`Page ${pageNum}`}</div>
        <div
          className="nextPage"
          onClick={() => {
            updatePageNum("nextPage", studentListArrayLength);
          }}
        >
          Next page
        </div>
      </div>
    );
  }
}

export default SwitchPage;
