import Image from "next/image";
import Link from "next/link";
import styles from "./dynamicResume.module.css";

function Page() {
  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <Image
          src="/DResume.png"
          alt="Dynamic Resume Generator"
          className={styles.image}
          width={1000}
          height={1000}
        />
        <div className={styles.content}>
          <h1 className={styles.title}>
            Dynamic Resume Generator Overview
          </h1>
          <p className={styles.description}>
            This project provides users with a convenient tool to dynamically generate and download resumes tailored to their personal and professional information.
          </p>
          <div className={styles.sectionList}>
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Customizable Fields</h2>
              <p className={styles.sectionDescription}>
                Users can easily input details such as name, education, work experience, and skills to personalize their resume.
              </p>
            </div>
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Professional Templates</h2>
              <p className={styles.sectionDescription}>
                The generator offers multiple professional templates, ensuring a polished and visually appealing layout.
              </p>
            </div>
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Instant Preview & Download</h2>
              <p className={styles.sectionDescription}>
                Preview the resume instantly and download it in PDF format with a single click.
              </p>
            </div>
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Key Features</h2>
              <ul className={styles.featuresList}>
                <li className={styles.featureItem}>
                  <strong>User-Friendly Interface:</strong> Easy-to-use form fields for fast input and customization.
                </li>
                <li className={styles.featureItem}>
                  <strong>Real-Time Preview:</strong> See the changes as you input information into the resume.
                </li>
                <li className={styles.featureItem}>
                  <strong>Downloadable PDF:</strong> Instantly download your personalized resume in PDF format.
                </li>
              </ul>
            </div>
          </div>
          <p className={styles.footer}>
            Perfect for job seekers and professionals, this tool streamlines the process of creating a professional resume with minimal effort.
          </p>
          <Link
            href="https://my-dynamic-resume.vercel.app/"
            className={styles.exploreLink}
          >
            Explore the Project
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Page;
