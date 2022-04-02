import React from "react";
import "./experience.css";
import {
  experienceBackEnd,
  experienceBackEndTitle,
  experienceFrontEnd,
  experienceFrontEndTitle,
  experienceTitle,
} from "../../experienceData";

const Experience = () => {
  return (
    <section id="experience">
      {experienceTitle.map((item) => {
        return (
          <React.Fragment key={item.id}>
            <h5>{item.title}</h5>
            <h2>{item.subTitle}</h2>
          </React.Fragment>
        );
      })}
      <div className="container experience_container">
        <div className="experience_frontend">
          {experienceFrontEndTitle.map((item) => {
            return <h3 key={item.id}>{item.title}</h3>;
          })}

          <div className="experience_content">
            {experienceFrontEnd.map((item) => {
              return (
                <article className="experience_details" key={item.id}>
                  <i className="experience_details-icon">{item.icon}</i>
                  <div>
                    <h4>{item.language}</h4>
                    <small className="text-light">{item.skillSet}</small>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="experience_backend">
          {experienceBackEndTitle.map((item) => {
            return <h3 key={item.id}>{item.title}</h3>;
          })}

          <div className="experience_content">
            {experienceBackEnd.map((item) => {
              return (
                <article className="experience_details" key={item.id}>
                  <i className="experience_details-icon">{item.icon}</i>
                  <div>
                    <h4>{item.language}</h4>
                    <small className="text-light">{item.skillSet}</small>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
