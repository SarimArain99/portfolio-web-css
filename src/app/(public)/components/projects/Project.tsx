import Image from "next/image";
import Link from "next/link";
import styles from "./Projects.module.css";

function Projects() {
  return (
    <div className={styles.projectsContainer}>
      <p className={styles.featuredProjectsText}>FEATURED PROJECTS</p>
      <div className={styles.projectsGrid}>
        <div className={styles.projectCard}>
          <Link href="/staticResume">
            <Image
              src="/SResume.jpg"
              width={500}
              height={300}
              alt="Static Resume"
              className={styles.projectImage}
            />
            <p className={styles.projectTitle}>My Resume</p>
          </Link>
        </div>
        <div className={styles.projectCard}>
          <Link href="/dynamicResume">
            <Image
              src="/DResume.png"
              width={500}
              height={300}
              alt="Dynamic Resume"
              className={styles.projectImage}
            />
            <p className={styles.projectTitle}>Generate Resume Dynamically</p>
          </Link>
        </div>
        <div className={styles.projectCard}>
          <Link href="/countriesDetails">
            <Image
              src="/Country.png"
              width={500}
              height={300}
              alt="Country Details"
              className={styles.projectImage}
            />
            <p className={styles.projectTitle}>Detail About Countries</p>
          </Link>
        </div>
        <div className={styles.projectCard}>
          <Link href="/IMS">
            <Image
              src="/IMS.png"
              width={500}
              height={300}
              alt="Inventory Management System"
              className={styles.projectImage}
            />
            <p className={styles.projectTitle}>Inventory Management System</p>
          </Link>
        </div>
        <div className={styles.projectCard}>
          <Link href="https://1-landing-page.vercel.app/" target="_blank">
            <Image
              src="/landing.jpg"
              width={500}
              height={300}
              alt="Landing Page"
              className={styles.projectImage}
            />
            <p className={styles.projectTitle}>Landing Page</p>
          </Link>
        </div>
        <div className={styles.projectCard}>
          <Link href="https://governor-initiative-web-clone.vercel.app/" target="_blank">
            <Image
              src="/GIAIC.png"
              width={500}
              height={300}
              alt="Inventory Management System"
              className={styles.projectImage}
            />
            <p className={styles.projectTitle}>GIAIC Website Clone</p>
          </Link>
        </div>
      </div>
      <div className={styles.divider}></div>
    </div>
  );
}

export default Projects;
