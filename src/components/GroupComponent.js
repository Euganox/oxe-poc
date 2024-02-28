import { Button } from "@mui/material";
import FrameComponent1 from "./FrameComponent1";
import styles from "./GroupComponent.module.css";

const GroupComponent = () => {
  return (
    <footer className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <FrameComponent1 />
      <div className={styles.penthouseDetails}>
        <div className={styles.groupFrame}>
          <div className={styles.cityComparison}>
            <b className={styles.b}>Дубай</b>
            <div className={styles.businessBayMetropolis}>
              Business Bay, Metropolis Tower Penthouse, 22nd floor, Holding "OXE
              GROUP"
            </div>
            <div className={styles.headerGroupParent}>
              <div className={styles.headerGroup}>+971 4 243 8653</div>
              <div className={styles.welcomeoxecapital}>
                welcome@oxe.capital
              </div>
            </div>
          </div>
          <div className={styles.cityComparison1}>
            <b className={styles.b1}>{`Москва `}</b>
            <div className={styles.div}>
              <p className={styles.p}>119034, Москва, Молочный пер, д. 7</p>
              <p className={styles.p1}>
                143082, МО, Рублево-Успенское ш., д. Жуковка, д. 71
              </p>
            </div>
            <div className={styles.parent}>
              <div className={styles.div1}>+ 7 495 215 5000</div>
              <div className={styles.welcomeoxegroupae}>
                welcome@oxegroup.ae
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.socialMediaLinks}>
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <Button
              className={styles.frameItem}
              disableElevation={true}
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "16",
                background: "#c62e3b",
                borderRadius: "4px",
                "&:hover": { background: "#c62e3b" },
                width: 190,
                height: 46,
              }}
            >
              Оставить заявку
            </Button>
            <div className={styles.div2}>Политика конфиденциальности</div>
          </div>
          <div className={styles.privacyPolicyFrame}>
            <img
              className={styles.socialMedia1Icon}
              alt=""
              src="/004socialmedia-1.svg"
            />
            <img
              className={styles.youtubeChannelLinkFrame}
              alt=""
              src="/vector.svg"
            />
            <div className={styles.vectorImageFrame}>
              <img
                className={styles.youtubeRedCopy1}
                alt=""
                src="/youtube-red-copy-1.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default GroupComponent;
