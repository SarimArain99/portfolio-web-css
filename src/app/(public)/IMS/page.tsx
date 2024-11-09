import Link from "next/link";
import Image from "next/image";
import styles from "./IMS.module.css";

function Page() {
  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <Image
          src="/IMS.png"
          alt="Inventory Management System"
          className={styles.image}
          width={1000}
          height={1000}
        />
        <div className={styles.content}>
          <h1 className={styles.title}>Inventory Management System Overview</h1>
          <p className={styles.description}>
            The Inventory Management System (IMS) helps users manage their
            inventory efficiently, offering features like:
          </p>
          <div className={styles.sectionList}>
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>
                Add, Delete, and Edit Items
              </h2>
              <p className={styles.sectionDescription}>
                Easily manage your inventory by adding new items, deleting old
                ones, or editing existing entries as needed.
              </p>
            </div>
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Categories and Sorting</h2>
              <p className={styles.sectionDescription}>
                Items are grouped by category for easy navigation. Users can
                sort items based on name, category, or price.
              </p>
            </div>
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>
                Filtering and Clear Sorting
              </h2>
              <p className={styles.sectionDescription}>
                Filter inventory items by category to focus on specific groups,
                and clear sorting to revert to the default view.
              </p>
            </div>
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Calculate Total Price</h2>
              <p className={styles.sectionDescription}>
                Automatically calculates the total price of all items in the
                inventory, allowing for quick insights into the total value.
              </p>
            </div>
          </div>
          <p className={styles.footer}>
            This system is designed for businesses, individuals, or
            organizations looking to effectively manage their inventory with
            modern, user-friendly features.
          </p>
          <Link
            href="https://inventory-management-system-proj.netlify.app/"
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
