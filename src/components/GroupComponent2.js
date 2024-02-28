import { Button } from "@mui/material";
import FrameComponent1 from "./FrameComponent1";
import styles from "./GroupComponent2.module.css";

const GroupComponent2 = () => {
  return (
    <header className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <FrameComponent1 />
      <div className={styles.commissionSplit}>
        <div className={styles.socialMedia1Parent}>
          <img
            className={styles.socialMedia1Icon}
            loading="lazy"
            alt=""
            src="/004socialmedia-1.svg"
          />
          <img
            className={styles.brandWithInfluencers}
            loading="lazy"
            alt=""
            src="/vector.svg"
          />
          <div className={styles.groupRectangleFrameGroup}>
            <img
              className={styles.youtubeRedCopy1}
              loading="lazy"
              alt=""
              src="/youtube-red-copy-1.svg"
            />
          </div>
        </div>
        <Button
          className={styles.commissionSplitChild}
          disableElevation={true}
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "16",
            background: "#c62e3b",
            borderRadius: "4px",
            "&:hover": { background: "#c62e3b" },
            height: 46,
          }}
        >
          Оставить заявку
        </Button>
      </div>
    </header>
  );
};

export default GroupComponent2;
