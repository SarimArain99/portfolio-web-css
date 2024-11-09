import styles from '../detail/Detail.module.css';

function Detail() {
  return (
    <div className={`${styles.container}`}>
      <h1 className={styles.title}>
        Front-End <span className={styles.highlight}>Developer</span>
      </h1>
      <p className={styles.description}>
        I specialize in crafting responsive and dynamic user interfaces with a
        strong focus on user experience. My skills include HTML, CSS, and
        JavaScript, along with expertise in frameworks like React and Next.
      </p>
      <p className={styles.scrollText}>SCROLL ↓</p>
    </div>
  );
}

export default Detail;
