import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact">

      <div className="contact-container">

        {/* Left Side */}
        <div className="contact-info">
          <h1>Get In Touch</h1>
          <p>
            If you have any project ideas or want to work together,
            feel free to contact me. I am always open to discussing
            new opportunities.
          </p>

          <div className="info">
            <p>📧 Email: habib@example.com</p>
            <p>📱 Phone: +92 300 1234567</p>
            <p>📍 Location: Pakistan</p>
          </div>
        </div>

        {/* Right Side */}
        <form className="contact-form">

          <input type="text" placeholder="Your Name" required />

          <input type="email" placeholder="Your Email" required />

          <textarea placeholder="Your Message" rows="5"></textarea>

          <button type="submit">Send Message</button>

        </form>

      </div>

    </section>
  );
};

export default Contact;