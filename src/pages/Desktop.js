import GroupComponent2 from "../components/GroupComponent2";
import BAssets from "../components/BAssets";
import FrameComponent from "../components/FrameComponent";
import MoscowRealtySwap from "../components/MoscowRealtySwap";
import GroupComponent from "../components/GroupComponent";
import styles from "./Desktop.module.css";

const Desktop = () => {
  return (
    <div className={styles.desktop}>
      <img className={styles.worldMapIcon} alt="" src="/world-map.svg" />
      <img className={styles.desktopChild} alt="" src="/rectangle-39470.svg" />
      <img
        className={styles.realradzatebyaStrongUkrainiaIcon}
        alt=""
        src="/realradzatebya-strong-ukrainian-woman-standing-with-confidence--bce140913e3f49f0a54dfa2314f7c4e3-1@2x.png"
      />
      <GroupComponent2 />
      <BAssets />
      <FrameComponent />
      <MoscowRealtySwap />
      <GroupComponent />
    </div>
  );
};

export default Desktop;
