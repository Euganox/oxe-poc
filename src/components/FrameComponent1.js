import styles from "./FrameComponent1.module.css";

const FrameComponent1 = () => {
  return (
    <div className={styles.parent}>
      <img
        className={styles.icon}
        loading="lazy"
        alt=""
        src="/--20240222--1220-1@2x.png"
      />
      <div className={styles.swaphubWrapper}>
        <div className={styles.swaphub}>SwapHub</div>
      </div>
    </div>
  );
};

export default FrameComponent1;
