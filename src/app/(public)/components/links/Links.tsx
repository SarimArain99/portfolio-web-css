import Link from "next/link";
import styles from "./Links.module.css";

function Links() {
  return (
    <div className={styles.linksContainer}>
      <div className={styles.pages}>
        <p className={styles.pagesTitle}>Pages</p>
        <div>
          <Link href="/" className={styles.link}>
            <span className={styles.linkText}>Work</span>
            <div className={styles.linkUnderline}></div>
          </Link>
          <Link href="/about" className={styles.link}>
            <span className={styles.linkText}>About</span>
            <div className={styles.linkUnderline}></div>
          </Link>
          <Link href="/FAQs" className={styles.link}>
            <span className={styles.linkText}>FAQs</span>
            <div className={styles.linkUnderline}></div>
          </Link>
        </div>
      </div>
      <div className={styles.findMe}>
        <p className={styles.findMeTitle}>Find Me At</p>
        <div>
          {[
            {
              name: "Instagram",
              link: "https://www.instagram.com/sarim_arain/",
            },
            {
              name: "LinkedIn",
              link: "https://www.linkedin.com/in/muhammad-sarim-arain-b3795a2ba/",
            },
            {
              name: "Facebook",
              link: "https://www.facebook.com/share/or24DEigkHwRGxSD/?mibextid=qi2Omg",
            },
            { name: "GitHub", link: "https://github.com/SarimArain99/" },
          ].map((item) => (
            <span key={item.name} className={styles.linkContainer}>
              ↗{" "}
              <Link href={item.link} className={styles.link} target="_blank">
                {item.name}
              </Link>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Links;
