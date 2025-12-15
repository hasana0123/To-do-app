import styles from "../styles/components/Loading.module.scss";

const Loading = ({ text = "Loading..." }) => {
  return (
    <div className={styles.loading}>
      {text}
    </div>
  );
};

export default Loading;
