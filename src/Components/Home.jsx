import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <section className="home">

      <div className="home-content">
        <h1 className="title">Welcome to My Website</h1>
        <p className="subtitle">
          I am a Frontend Developer who loves building modern websites with React.
        </p>

        <button className="btn">Explore More</button>
      </div>

    </section>
  );
};

export default Home;