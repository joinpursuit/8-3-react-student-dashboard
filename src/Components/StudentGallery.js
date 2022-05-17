import React from "react";
import GalleryCounter from "./GalleryCounter";
import StudentCard from "./StudentCard";

class StudentGallery extends React.Component {
  render() {
    return (
      <div>
        Student Gallery
        <GalleryCounter />
        <StudentCard />
      </div>
    );
  }
}

export default StudentGallery;
