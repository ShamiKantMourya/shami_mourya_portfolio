import React from "react";
import {
  FaEnvelopeOpen,
  FaLinkedin,
  FaTwitter,
  FaDiscord,
  FaGithubAlt,
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";

import "./contact.scss";

const Contact = () => {
  return (
    <section className="contact section">
      <h2 className="section__title">
        Get In <span>Touch</span>
      </h2>
      <div className="contact__container container grid">
        <div className="contact__data">
          <h3 className="contact__title">Don't be shy !</h3>
          <p className="contact__description">
            Feel free to get in touch with me.
          </p>
          <div className="contact__info">
            <div className="info__item">
              <FaEnvelopeOpen className="info__icon" />
              <div>
                <span className="info__title">Mail me</span>
                <h4 className="info__desc">Shamimourya9852@gmail.com</h4>
              </div>
            </div>
          </div>
          <div className="contact__socials">
            <a href="" className="contact__social-link">
              <FaTwitter />
            </a>
            <a href="" className="contact__social-link">
              <FaLinkedin />
            </a>
            <a href="" className="contact__social-link">
              <FaDiscord />
            </a>
            <a href="" className="contact__social-link">
              <FaGithubAlt />
            </a>
          </div>
        </div>
        <form action="" className="contact__form">
          <div className="form__input-group">
            <div className="form__input-div">
              <input
                type="text"
                className="form__control"
                placeholder="Enter your name"
              />
            </div>
            <div className="form__input-div">
              <input
                type="text"
                className="form__control"
                placeholder="Enter your email"
              />
            </div>
            <div className="form__input-div">
              <input
                type="text"
                className="form__control"
                placeholder="Your subject to contact"
              />
            </div>
          </div>
          <div className="form__input-div">
            <textarea
              placeholder="Your message"
              className="form__control textarea"
            ></textarea>
          </div>
          <button className="button">
            Send Message
            <span className="button__icon contact__button-icon">
              <FiSend />
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
