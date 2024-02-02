import React from "react";
import { useState, useEffect } from 'react';

function Intro() {
  const jobTitles = [
    "Associate Software Engineer",
    "frontend Developer",
    "Web Developer",
    // Add more job titles as needed
  ];
  
    const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % jobTitles.length);
      }, 3000); // Change the interval (in milliseconds) as needed
  
      return () => clearInterval(interval);
    }, [jobTitles.length]);

  return (
    <div className="h-[80vh] bg-primary flex flex-col items-start justify-center gap-8 py-10 sm:gap-5 sm:h-[90vh]">
      <h1 className="text-white font-semibold">Hi, I'm</h1>
      <h1 className="text-secondary text-8xl sm:text-3xl font-semibold">Ihjas Abdullah</h1>
      <h1 className="text-white text-6xl sm:text-3xl font-semibold">
      {jobTitles[currentTitleIndex]}
      </h1>
      <p className="text-white w-2/3">
        I am a driven and enthusiastic Associate Software Engineer, eager to apply
        theoretical knowledge and gain practical experience in the software
        development field with a strong foundation in programming languages and
        a passion for problem-solving, I am dedicated to delivering efficient
        and reliable solutions.
      </p>
      <button className="border-2 border-tertiary text-tertiary px-10 py-3 rounded font-semibold">Get Started</button>
    </div>
  );
}

export default Intro;
