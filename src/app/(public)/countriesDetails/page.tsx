import Link from "next/link";
import Image from "next/image";
import styles from "./CountriesDetails.module.css";

function CountriesDetails() {
  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <Image
          src="/Country.png"
          alt="Country Details"
          className={styles.image}
          width={1000}
          height={1000}
        />
        <div className={styles.content}>
          <h1 className={styles.title}>Country Details Project Overview</h1>
          <p className={styles.description}>
            This project provides a detailed overview of countries, offering a
            wealth of information such as:
          </p>
          <div className={styles.sectionList}>
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Regions & Subregions</h2>
              <p className={styles.sectionDescription}>
                Discover countries categorized into major regions like Africa,
                Asia, and Europe, and subregions like Northern Europe.
              </p>
            </div>
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Capitals</h2>
              <p className={styles.sectionDescription}>
                Each country&apos;s capital is highlighted for quick reference.
              </p>
            </div>
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Currencies & Symbols</h2>
              <p className={styles.sectionDescription}>
                Information about official currencies and their symbols (e.g.,
                USD, EUR) for financial insights.
              </p>
            </div>
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Flags</h2>
              <p className={styles.sectionDescription}>
                Visual depictions of national flags for an educational,
                geographical perspective.
              </p>
            </div>
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Key Features</h2>
              <ul className={styles.featuresList}>
                <li className={styles.featureItem}>
                  <strong>Search & Filter:</strong> Easily search and filter
                  countries by name or region.
                </li>
                <li className={styles.featureItem}>
                  <strong>Responsive Design:</strong> Fully optimized for
                  devices of all sizes, providing a smooth user experience.
                </li>
                <li className={styles.featureItem}>
                  <strong>API Integration:</strong> Fetches up-to-date data
                  through the REST Countries API for accurate information.
                </li>
              </ul>
            </div>
          </div>
          <p className={styles.footer}>
            Designed for students, travelers, and educators, this project
            presents country data in a modern, intuitive interface.
          </p>
          <Link
            href="https://main--world-countries-project.netlify.app/"
            className={styles.exploreLink}
          >
            Explore the Project
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CountriesDetails;
