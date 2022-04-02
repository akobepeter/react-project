import React from "react";
import "./services.css";
import { servicesData } from "../../servicesData";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services_container">
        {servicesData.map((item) => {
          return (
            <article className="service" key={item.id}>
              <div className="service_head">
                <h3>{item.title}</h3>
              </div>
              <ul className="service_list">
                <li>
                  <i className="service_list-icon">{item.icon}</i>
                  <p>{item.text}</p>
                </li>

                <li>
                  <i className="service_list-icon">{item.icon}</i>
                  <p>{item.text}</p>
                </li>

                <li>
                  <i className="service_list-icon">{item.icon}</i>
                  <p>{item.text}</p>
                </li>

                <li>
                  <i className="service_list-icon">{item.icon}</i>
                  <p>{item.text}</p>
                </li>

                <li>
                  <i className="service_list-icon">{item.icon}</i>
                  <p>{item.text}</p>
                </li>

                <li>
                  <i className="service_list-icon">{item.icon}</i>
                  <p>{item.text}</p>
                </li>

              </ul>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
