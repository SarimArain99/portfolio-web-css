import styles from './FAQs.module.css';

function FAQs() {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>
        Frequently Asked Questions
      </h2>

      <div className={styles.questionContainer}>
        <h3 className={styles.question}>
          User : <br />
          What services do you offer?
        </h3>
        <p className={styles.answer}>
          We offer a wide range of services including web development, and UI/UX
          design to help your business grow online.
        </p>
      </div>

      <div className={styles.questionContainer}>
        <h3 className={styles.question}>
          User : <br />
          How can I get a quote for my project?
        </h3>
        <p className={styles.answer}>
          You can reach out through our contact form, and we&apos;ll get back to
          you with a tailored quote based on your project requirements.
        </p>
      </div>

      <div className={styles.questionContainer}>
        <h3 className={styles.question}>
          User : <br />
          What is the estimated timeline for a project?
        </h3>
        <p className={styles.answer}>
          The timeline varies depending on the project scope, but we work
          efficiently to meet deadlines and keep you updated throughout the
          process.
        </p>
      </div>

      <div className={styles.questionContainer}>
        <h3 className={styles.question}>
          User : <br />
          Do you provide post-launch support?
        </h3>
        <p className={styles.answer}>
          Yes, we offer post-launch support to ensure your website or
          application continues to perform smoothly. Our support includes
          updates, maintenance, and troubleshooting.
        </p>
      </div>

      <div className={styles.questionContainer}>
        <h3 className={styles.question}>
          User : <br />
          How do I start a project with you?
        </h3>
        <p className={styles.answer}>
          Simply fill out our contact form, and we&apos;ll schedule a
          consultation to discuss your project ideas and goals in more detail.
        </p>
      </div>
      
      <div className={styles.questionContainer}>
        <h3 className={styles.question}>
          User: <br />
          Where can I find the contact form on your website?
        </h3>
        <p className={styles.answer}>
          The contact form is available in the &quot;Let&apos;s Work Together&quot;
          section. Simply fill in the required information, and we&apos;ll
          connect with you as soon as possible. You can also connect with me on
          LinkedIn and Instagram.
        </p>
      </div>
    </div>
  );
}

export default FAQs;
