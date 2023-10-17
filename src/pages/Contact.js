import React from "react";
import BannerImage from "../assets/2blackbean.jpg";

const Contact = () => {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${BannerImage})` }}
      ></div>
      <div className="rightSide">
        <h1>Contact Us</h1>
        <form id="contact-form">
          <label htmlFor="name">Full Name</label>
          <input
            name="name"
            placeholder="enter your full name..."
            type="text"
          />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="enter your email..." type="email" />
          <label htmlFor="message">message</label>
          <input
            name="message"
            placeholder="enter message..."
            type="textarea"
          />
          <button type="submit"> Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
