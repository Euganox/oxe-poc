import { useMemo } from "react";
import styles from "./GroupComponent1.module.css";

const GroupComponent1 = ({
  linkFrame,
  aED,
  palmBeachTowers,
  prop,
  propAlignSelf,
  propTop,
}) => {
  const groupDivStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const wrapperGroup29Style = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div className={styles.rectangleParent} style={groupDivStyle}>
      <div className={styles.frameChild} />
      <img className={styles.linkFrameIcon} alt="" src={linkFrame} />
      <div className={styles.background}>
        <div className={styles.rectangleGroup}>
          <b className={styles.aed}>{aED}</b>
          <div className={styles.cityFrame}>
            <div className={styles.palmBeachTowersContainer}>
              <p className={styles.palmBeachTowers}>{palmBeachTowers}</p>
              <p className={styles.p}>{prop}</p>
            </div>
            <div className={styles.imageFrame}>
              <div className={styles.div}>Пресненский</div>
              <div className={styles.div1}>8 комнат</div>
              <div className={styles.div2}>901 м2</div>
              <div className={styles.div3}>25 этаж</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.wrapperGroup29} style={wrapperGroup29Style}>
        <img
          className={styles.wrapperGroup29Child}
          loading="lazy"
          alt=""
          src="/group-29.svg"
        />
      </div>
    </div>
  );
};

export default GroupComponent1;
