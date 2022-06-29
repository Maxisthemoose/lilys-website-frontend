import "./Contact.css";
import Popup from "reactjs-popup";
import React from "react";
import self from "../images/SelfPortrait.jpg";
import { sendEmail as apiSendEmail } from "../api/sendEmail";
import { useState } from "react";


const Contact = (props) => {

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function sendEmail(e) {
    e.preventDefault();
    const target = e.target;
    try {
      setLoading(true);
      await apiSendEmail(target);
      document.getElementById("from_name").value = "";
      document.getElementById("reply_to").value = "";
      document.getElementById("subject").value = "";
      document.getElementById("html_message").value = "";
      document.getElementById("phone").value = "";
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 5000);
    }

  }

  return (
    
    <Popup
      trigger={<div className="contact">
        Contact
      </div>}
      modal
    >
      {close => (
        <div className="modalPopup">
          <button className="close" onClick={close}>
            &times;
          </button>
          <div className="content">
            <a href="tel:541-291-1979">Phone: <strong>541-291-1979</strong></a>
            <h1>Contact Me</h1>
            <form className="contact-form" onSubmit={sendEmail}>
              <input type="hidden" name="contact_number" />
              <label id="name">Name</label>
              <input id="from_name" type="text" name="from_name" required placeholder="Enter full name" />
              <label id="email">Email</label>
              <input id="reply_to" type="email" name="reply_to" required placeholder="Enter email" />
              <label id="subj">Subject</label>
              <input id="subject" type="text" name="subject" required placeholder="Subject line" />
              <label id="number">Phone Number</label>
              <input id="phone" name="phone" type="tel" pattern="[0-9]{3}[0-9]{3}[0-9]{4}" placeholder="5412911979"></input>
              <textarea id="html_message" name="html_message" required placeholder="Write your message here..."/>
              <input type="submit" value="Send" />
              {loading && <div className="spinner" />}
              {error && <div className="error">Something went wrong. Please try again later.</div>}
              <img className="selfPortrait" src={self} draggable="false" alt="Self Portrait" />

            </form>
            {/* <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=lilyflower2002@hotmail.com" target="_blank">Email: <strong>lilyflower2002@hotmail.com</strong></a> */}
          </div>
        </div>
      )}
    </Popup>
    
  )

}

export default Contact;