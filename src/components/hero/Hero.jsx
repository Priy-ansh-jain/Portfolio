import React, { useEffect, useState } from 'react';
import "./hero.css";
// import person1 from "../../assets/person1.png"

const Hero = () => {
  const [designation, setDesignation] = useState("Ui/UX Designer");

  useEffect(() => {
    // Array of designations to loop through.
    //  it will show one by one like one after another.
    const designationsArray = ["Ui/UX Designer","Js Developer","Content Writer"];
    
    // Counter to keep track of the current designation
    let counter = 0;

    // Interval function to change designation every 3 seconds
    const interval = setInterval(() => {
      counter = (counter + 1) % designationsArray.length;
      setDesignation(designationsArray[counter]);
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <section className='hero__page'>
      <div className="split left">
        <p>
          WELCOME TO MY WORLD
        </p>
        <h1>Hi, I'm Jone Doe <br/>
          <span>{designation}</span> <br />
          based in USA
        </h1>
      </div>
      <div className="split right">
        <div className="centered">
          <div className="person__img">
            
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default Hero;