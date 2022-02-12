import React, { Component } from 'react';
import courses from "../../assets/courses.png"
import "./index.css"
export default class Course extends Component {
  render() {
    return (
      <div ><img className="course-img" alt='example' src={courses}/></div>
    );
  }
}
