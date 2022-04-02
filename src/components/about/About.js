import React from "react";
import "./about.css";
import { aboutDataInfo, aboutDataTitle } from "../../aboutData";

const About = () => {
  return (
    <section id="about">
      {aboutDataTitle.map((item) => (
        <React.Fragment key={item.id}>
          <h5>{item.title}</h5>
          <h2>{item.subTitle}</h2>
        </React.Fragment>
      ))}
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={require("../../img/Peter.jpg")} alt="" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            {aboutDataInfo.map((item) => {
              return (
                <article className="about_card" key={item.id}>
                  <i className="about_card-icon">{item.icon}</i>
                  <h5>{item.title}</h5>
                  <small>{item.progress}</small>
                </article>
              );
            })}
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            delectus aliquam aut quis doloremque temporibus iure asperiores
            necessitatibus accusantium veniam vero totam deserunt odit minus
            soluta est, sunt voluptatum blanditiis?
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;


