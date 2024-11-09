import Image from "next/image";
import Link from "next/link";
import styles from "./staticResume.module.css";

function Page() {
  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <Image
          src="/SResume.jpg"
          alt="Static Resume"
          className={styles.image}
          width={1000}
          height={1000}
        />
        <div className={styles.content}>
          <h1 className={styles.title}>My Static Resume Overview</h1>
          <p className={styles.description}>
            This project showcases a static version of my personal resume,
            providing a simple and direct way to present professional
            information.
          </p>
          <div className={styles.sectionList}>
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Personal Information</h2>
              <p className={styles.sectionDescription}>
                The resume displays key personal details, including name,
                contact information, and a professional summary.
              </p>
            </div>
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Education & Experience</h2>
              <p className={styles.sectionDescription}>
                It highlights my educational background and professional
                experience, structured clearly for potential employers.
              </p>
            </div>
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Skills & Certifications</h2>
              <p className={styles.sectionDescription}>
                A section dedicated to my technical skills, certifications, and
                key competencies relevant to my career.
              </p>
            </div>
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Key Features</h2>
              <ul className={styles.featuresList}>
                <li className={styles.featureItem}>
                  <strong>Concise Layout:</strong> A simple, no-frills design
                  focusing on essential information.
                </li>
                <li className={styles.featureItem}>
                  <strong>Responsive Design:</strong> The static resume is fully
                  optimized for mobile and desktop screens.
                </li>
                <li className={styles.featureItem}>
                  <strong>Easy Navigation:</strong> The layout ensures easy
                  readability and straightforward navigation.
                </li>
              </ul>
            </div>
          </div>
          <p className={styles.footer}>
            This static resume offers a clean and effective way to present my
            qualifications and experiences to employers.
          </p>
          <Link
            href="https://my-static-resume.vercel.app/"
            className={styles.exploreLink}
          >
            View the Resume
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Page;
