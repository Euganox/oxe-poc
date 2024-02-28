import styles from "./FrameComponent.module.css";

const FrameComponent = () => {
  return (
    <section className={styles.desktopInner}>
      <div className={styles.frameParent}>
        <img
          className={styles.frameChild}
          loading="lazy"
          alt=""
          src="/group-14.svg"
        />
        <div className={styles.frameWrapper}>
          <div className={styles.oxeswaphubParent}>
            <h1 className={styles.oxeswaphub}>Почему OxeSwapHub</h1>
            <div className={styles.frameGroup}>
              <div className={styles.maskGroupWrapper}>
                <img
                  className={styles.maskGroupIcon}
                  loading="lazy"
                  alt=""
                  src="/mask-group@2x.png"
                />
              </div>
              <div className={styles.frameContainer}>
                <div className={styles.parent}>
                  <div className={styles.div}>
                    Обменяем любую недвижимость стоимостью от $500.000
                  </div>
                  <div className={styles.div1}>
                    Оценим Вашу недвижимость дороже, чем любая другая компания
                    на рынке
                  </div>
                  <div className={styles.wrapper}>
                    <div className={styles.div2}>
                      Открытие банковского счета в Дубае в день сделки и
                      возможность оперативного получения ВНЖ
                    </div>
                  </div>
                  <div className={styles.div3}>Выход на сделку за 2 дня</div>
                </div>
                <div className={styles.maskGroupContainer}>
                  <img
                    className={styles.maskGroupIcon1}
                    alt=""
                    src="/mask-group-1@2x.png"
                  />
                </div>
              </div>
              <div className={styles.group}>
                <div className={styles.div4}>
                  Прозрачная схема сделки без рисков для обеих сторон
                </div>
                <div className={styles.div5}>
                  Фиксированная комиссия, которая делится поровну между
                  сторонами обмена
                </div>
                <div className={styles.div6}>
                  Работаем даже с самыми сложными случаями (обременения, залог,
                  запрет и др.)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
