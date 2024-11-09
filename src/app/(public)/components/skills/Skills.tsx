import styles from "./Skills.module.css";

function Skills() {
  const rightArrow = (
    <svg
      className={styles.icon}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M17 8l4 4m0 0l-4 4m4-4H3"
      />
    </svg>
  );

  return (
    <div className={styles.container}>
      <p className={styles.title}>MY SKILLS</p>
      <div className={styles.skillsText}>
        &nbsp; &nbsp; <span className={styles.arrow}>{rightArrow}</span>NEXT.Js
        &nbsp; &nbsp; <span className={styles.arrow}>{rightArrow}</span>REACT.Js
        &nbsp;
        <span className={styles.arrow}>{rightArrow}</span>NODE.Js &nbsp;
        <span className={styles.arrow}>{rightArrow}</span>TAILWIND CSS &nbsp;
        <span className={styles.arrow}>{rightArrow}</span>TypeScript &nbsp;
        <span className={styles.arrow}>{rightArrow}</span>JavaScript &nbsp;
        <span className={styles.arrow}>{rightArrow}</span>CSS &nbsp;
        <span className={styles.arrow}>{rightArrow}</span>HTML
      </div>
    </div>
  );
}

export default Skills;
