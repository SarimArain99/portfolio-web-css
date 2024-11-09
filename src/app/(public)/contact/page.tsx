import React from "react";
import styles from "./contact.module.css";

function Contact() {
  return (
    <form
      className={styles.form}
      action="https://api.web3forms.com/submit"
      method="POST"
    >
      <div className={styles.inputContainer}>
        <input
          type="hidden"
          name="access_key"
          value="97b9413e-2ea8-4b21-921b-f87d710755d6"
        />
        <label htmlFor="name" className={styles.label}>
          Full Name
        </label>
        <input
          required
          type="text"
          id="name"
          name="fullName"
          placeholder="Enter Your Full Name"
          className={styles.input}
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="email" className={styles.label}>
          Email
        </label>
        <input
          required
          type="email"
          id="email"
          name="email"
          placeholder="Enter Your Email"
          className={styles.input}
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="subject" className={styles.label}>
          Subject
        </label>
        <textarea
          required
          name="subject"
          id="subject"
          placeholder="Write Subject"
          className={styles.input}
        ></textarea>
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="message" className={styles.label}>
          Message
        </label>
        <textarea
          required
          name="message"
          id="message"
          placeholder="Write Detailed Message"
          className={styles.input}
        ></textarea>
      </div>
      <button className={styles.button}>
        Submit
      </button>
    </form>
  );
}

export default Contact;
