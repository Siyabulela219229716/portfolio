import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .sendForm("service_8auremk", "template_r8pezee", form.current, {
        publicKey: "K-moMxPXmZTtmIf_v",
      })
      .then(
        () => {
          setStatus("Email sent successfully!");
          form.current.reset();
        },
        (error) => {
          setStatus("Error sending email.");
          console.error("FAILED...", error);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" required />
      
      <label>Email</label>
      <input type="email" name="user_email" required />

      <label>Subject</label>
      <input type="email" name="subject" required />
      
      <label>Message</label>
      <textarea name="message" required />
      
      <input type="submit" value="Send" />
      <p>{status}</p>
    </form>
  );
};

export default ContactUs;
