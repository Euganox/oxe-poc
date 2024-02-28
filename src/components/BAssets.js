import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import GroupComponent1 from "./GroupComponent1";
import styles from "./BAssets.module.css";

const BAssets = () => {
  return (
    <section className={styles.bAssets}>
      <h1 className={styles.h1}>
        Мы обмениваем элитную недвижимость в Москве и Дубае
      </h1>
      <div className={styles.rectangle}>
        <div className={styles.div}>
          Недвижимость в ОАЭ, доступная для обмена
        </div>
        <div className={styles.screenshot}>
          <div className={styles.frameParent}>
            <div className={styles.frameChild} />
            <div className={styles.frameItem} />
            <img
              className={styles.swapDetailsIcon}
              loading="lazy"
              alt=""
              src="/rectangle-39474@2x.png"
            />
            <div className={styles.hubLogo}>
              <div className={styles.offerSection}>
                <b className={styles.aed}>5 348 800 AED</b>
                <div className={styles.frameContent}>
                  <div className={styles.palmBeachTowersContainer}>
                    <p className={styles.palmBeachTowers}>Palm Beach Towers</p>
                    <p className={styles.p}>3/1708</p>
                  </div>
                  <div className={styles.parent}>
                    <div className={styles.div1}>Пресненский</div>
                    <div className={styles.div2}>8 комнат</div>
                    <div className={styles.div3}>901 м2</div>
                    <div className={styles.div4}>25 этаж</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.bannerFrame}>
            <GroupComponent1
              linkFrame="/rectangle-39474-1@2x.png"
              aED="5 348 800 AED"
              palmBeachTowers="Palm Beach Towers"
              prop="3/1708"
            />
          </div>
          <div className={styles.rectangleParent}>
            <div className={styles.frameInner} />
            <div className={styles.buyerCountry}>
              <h3 className={styles.h3}>Жилая</h3>
              <h3 className={styles.h31}>Коммерческая</h3>
              <h3 className={styles.h32}>Земля</h3>
            </div>
            <div className={styles.locationGroup}>
              <div className={styles.rectangleFrame} />
              <div className={styles.imageMask} />
            </div>
            <div className={styles.frameWrapper}>
              <div className={styles.swapHubLogoParent}>
                <div className={styles.swapHubLogo}>
                  <TextField
                    className={styles.swapHubLogoChild}
                    placeholder="Кадастровый номер"
                    variant="outlined"
                    sx={{
                      "& fieldset": { borderColor: "rgba(255, 255, 255, 0.3)" },
                      "& .MuiInputBase-root": {
                        height: "60px",
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                        fontSize: "18px",
                      },
                      "& .MuiInputBase-input": { color: "#fff" },
                    }}
                  />
                  <TextField
                    className={styles.swapHubLogoItem}
                    placeholder="Номер телефона"
                    variant="outlined"
                    sx={{
                      "& fieldset": { borderColor: "rgba(255, 255, 255, 0.3)" },
                      "& .MuiInputBase-root": {
                        height: "60px",
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                        fontSize: "18px",
                      },
                      "& .MuiInputBase-input": { color: "#fff" },
                    }}
                  />
                </div>
                <div className={styles.buttonFrame}>
                  <div className={styles.div5}>Как с вами связаться?</div>
                  <div className={styles.dubaiLocation}>
                    <div className={styles.penthouseImage}>
                      <div className={styles.contactGroup}>
                        <div className={styles.ourStreamlinedApproachToIn} />
                        <div className={styles.ensuresTopnotchResultsWitho} />
                      </div>
                      <div className={styles.div6}>Позвонить</div>
                    </div>
                    <div className={styles.fAQsGroup}>
                      <div className={styles.fAQsGroupChild} />
                      <div className={styles.whatsapp}>WhatsApp</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Button
              className={styles.groupButton}
              disableElevation={true}
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#000",
                fontSize: "18",
                background: "#fff",
                borderRadius: "4px",
                "&:hover": { background: "#fff" },
                width: 340,
                height: 60,
              }}
            >
              Отправить заявку
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BAssets;
