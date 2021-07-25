import React from 'react';
import profileImage from "../../assets/profileimages/Me.jpeg"

function About() {
  return (
    <section className="my-5">
      <h1 id="about">Who am I?</h1>
      <img src={profileImage} className="my-2" style={{ width: "10%" }}alt="profile"/>
      <div className="my2">
        <p>
          I am currently taking part in an Online Coding Boot Camp with the determination to be a Full Stack Programmer.
          I graduated from the University of Texas Pan-American with a bachelors in Music Education.
          I have been teaching band to students from 6th grade through 12th grade in a public school setting for the past 8 years. 
          I have a cat named Blue and my interest include traveling, reading, anime, games, and learning new things.
          Throughout my careers, I continually re-evaluate how I can effectively provide value by broading my knowledge of the skills needed to do my job.   
        </p>
      </div>
    </section>
    
  );
}

export default About;