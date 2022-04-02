import React,{useRef} from "react";
import "./contact.css";
import { contactData } from "../../contactData";
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_cynt98q', 'template_a9lj7ut', form.current, 'DbJLQB3r_pyPaGojB')
      .then((result) => {
          // console.log(result.text);
          alert('Message was successfully sent');
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          {contactData.map((item) => (
            <article className="contact_option" key={item.text}>
              <i className="contact_option-icon">{item.icon}</i>
              <h4>{item.text}</h4>
              <h5>{item.subtext}</h5>
              <a href={item.link} target={item.target}>
                {item.linkText}
              </a>
            </article>
          ))}
        </div>

        <form action="#" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            id=""
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            name="email"
            id=""
            placeholder="Your email"
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
              
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
