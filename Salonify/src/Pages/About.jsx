import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/");
  };

  return (
    <div className="about">
      <h1>About Page</h1>
      <button onClick={goBack}>Go Back Home</button>
    </div>
  );
};

export default About;
