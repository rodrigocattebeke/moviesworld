import styles from "./Loader.module.css";
export const Loader = ({ fullscreen = false, background = false }) => {
  return (
    <div className={`${styles.loaderContainer} ${fullscreen ? styles.fullscreen : ""} ${background ? styles.background : ""}`}>
      <span className={styles.loader}></span>
    </div>
  );
};
