import Connect from "../connect/Connect";
import Links from "../links/Links";
import styles from "./Footer.module.css";

function Footer() {
    return (
        <div className={styles.footerContainer}>
            <Connect />
            <Links />
            <div>
                <div className={styles.separator}></div>
                <p className={styles.footerText}>
                    © M.SARIM. ALL RIGHTS RESERVED
                </p>
            </div>
        </div>
    );
}

export default Footer;
