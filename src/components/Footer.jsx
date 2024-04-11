import React from "react";
import styles from "./footer.module.css";
export default function Footer({ completedTasks, totalTasks }) {
  return (
    <div className={styles.footer}>
      <span className={styles.item}>Completed Tasks : {completedTasks}</span>
      <span>Total Tasks : {totalTasks}</span>
    </div>
  );
}
