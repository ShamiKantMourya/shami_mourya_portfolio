import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

import Profile from "../../assets/home.png";
import "./home.scss";

const Home = () => {
  // console.log("hello")
  return (
    <section className="home section grid">
      <img src={Profile} alt="Profile" className="home__img" />
      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            <span>I'm Shami Kant Mourya</span><br/>  
            Web Developer
          </h1>
          <p className="home__description">
            Experienced web developer proficient in React JS, TypeScript, Redux
            Toolkit, Tailwind CSS and Sass. Skilled in backend development with
            Node.js and Express.js, coupled with MongoDB for database
            management. Proven track record of delivering dynamic, responsive
            web applications. Ready to tackle new challenges and contribute
            effectively to innovative projects.
          </p>
          <Link to="/about" className="button">
            More about me <span className="button__icon"><FaArrowRight /></span>
          </Link>
        </div>
      </div>
      <div className="color__block"></div>
    </section>
  );
};

export default Home;
