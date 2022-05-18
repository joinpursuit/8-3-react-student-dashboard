import React from "react";

class GalleryCounter extends React.Component {
  render() {
    const { filteredStudents } = this.props;
    return (
      <div>
        <h4>Class</h4>
        Total Students: Number
      </div>
    );
  }
}

export default GalleryCounter;
