import Image from "next/image";
import styles from "./About.module.css";
import Skills from "../components/skills/Skills";

function About() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        I&apos;m a professional Front-End Developer with expertise in HTML, CSS,
        JavaScript, TypeScript, Tailwind CSS, Node.js, React.js, and Next.js.
      </div>

      <div className={styles.innerFlexContainer}>
        <div className={styles.leftImageContainer}>
          <Image
            src="/sa.jpg"
            alt="Sarim"
            className={styles.leftImage}
            width={300}
            height={300}
          />
        </div>
        <div className={styles.middleImageContainer}>
          <Image
            src="/sarim3.jpg"
            alt="Sarim"
            className={styles.middleImage}
            width={1000}
            height={1000}
          />
        </div>
        <div className={styles.rightImageContainer}>
          <Image
            src="/sarim2.jpg"
            alt="Sarim"
            className={styles.rightImage}
            width={1000}
            height={1000}
          />
        </div>
      </div>

      <p className={styles.text}>
        I&apos;m a passionate front-end developer, skilled in building
        responsive and dynamic user interfaces. I specialize in crafting
        seamless user experiences using technologies like React, Next.js, and
        Tailwind CSS. With a focus on clean code and performance optimization, I
        bring designs to life and ensure that applications are both functional
        and visually appealing.
      </p>
      <Skills />
    </div>
  );
}

export default About;
