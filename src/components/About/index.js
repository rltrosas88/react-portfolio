import React from 'react';
import profileImage from "../../assets/profileimages/Me.jpeg"

function About() {
  return (
    <section className="my-5">
      <h1 id="about">Who am I?</h1>
      <img src={profileImage} className="my-2" style={{ width: "10%" }}alt="profile"/>
    </section>
  );
}

export default About;