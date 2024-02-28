import GroupComponent1 from "./GroupComponent1";
import styles from "./MoscowRealtySwap.module.css";

const MoscowRealtySwap = () => {
  return (
    <section className={styles.moscowRealtySwap}>
      <div className={styles.frameContent}>
        <div className={styles.oxeSwapHubDetails}>
          <div className={styles.newLocationBase}>
            <h1 className={styles.oxeswaphubContainer}>
              <p className={styles.oxeswaphub}>OxeSwapHub</p>
              <p className={styles.p}>в цифрах</p>
            </h1>
          </div>
          <div className={styles.currencyFrame}>
            <div className={styles.openBankAccountDubai}>
              <div className={styles.openBankAccountDubaiChild} />
              <div className={styles.multipleProperties}>
                <div className={styles.newCountryLocations}>
                  <div className={styles.newObjectsAdded}>
                    <div className={styles.successfullySwapped}>650</div>
                    <div className={styles.div}>новых объектов в базе</div>
                  </div>
                  <div className={styles.newObjectsAdded1}>
                    <div className={styles.influencerName}>5</div>
                    <div className={styles.div1}>стран локаций объектов</div>
                  </div>
                </div>
                <div className={styles.availableMoscowProperty}>
                  <div className={styles.granatnyPerdKlubDomGranat}>
                    <div className={styles.newFloorLiving}>30</div>
                    <div className={styles.div2}>
                      успешно обменянных квартир
                    </div>
                  </div>
                  <div className={styles.presnenskyPresnenskyRub}>
                    <div className={styles.b}>$1B</div>
                    <div className={styles.div3}>
                      активов В ОАЭ и других странах получили наши клиенты
                    </div>
                  </div>
                </div>
              </div>
              <h1 className={styles.h1}>
                Недвижимость в Москве, доступная для обмена
              </h1>
            </div>
            <div className={styles.moscowPropertyExchange}>
              <div className={styles.granatQuarterHouseCluster}>
                <div className={styles.rectangleParent}>
                  <div className={styles.frameChild} />
                  <img
                    className={styles.grenadaClubhouseIcon}
                    alt=""
                    src="/rectangle-39474-2@2x.png"
                  />
                  <div className={styles.currencySymbolsFrame}>
                    <div className={styles.granatStreetAddress}>
                      <b className={styles.b1}>1 200 000 000 ₽</b>
                      <div className={styles.parent}>
                        <div className={styles.div4}>
                          <p className={styles.p1}>Гранатный пер., д. 8</p>
                          <p className={styles.p2}>
                            Клубный дом "Гранатный Палас"
                          </p>
                        </div>
                        <div className={styles.group}>
                          <div className={styles.div5}>Пресненский</div>
                          <div className={styles.div6}>8 комнат</div>
                          <div className={styles.div7}>901 м2</div>
                          <div className={styles.div8}>25 этаж</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <img
                    className={styles.frameItem}
                    alt=""
                    src="/group-30@2x.png"
                  />
                </div>
                <div className={styles.rectangleGroup}>
                  <div className={styles.frameInner} />
                  <img
                    className={styles.rectangleIcon}
                    alt=""
                    src="/rectangle-39474-3@2x.png"
                  />
                  <div className={styles.frameWrapper}>
                    <div className={styles.frameParent}>
                      <div className={styles.container}>
                        <b className={styles.b2}>1 200 000 000 ₽</b>
                        <div className={styles.div9}>
                          Б. Никитская ул., д. 45
                        </div>
                      </div>
                      <div className={styles.frameDiv}>
                        <div className={styles.div10}>Пресненский</div>
                        <div className={styles.div11}>8 комнат</div>
                        <div className={styles.div12}>901 м2</div>
                        <div className={styles.div13}>25 этаж</div>
                      </div>
                    </div>
                  </div>
                </div>
                <GroupComponent1
                  linkFrame="/rectangle-39474-4@2x.png"
                  aED="1 200 000 000 ₽"
                  palmBeachTowers="Б. Козихинский пер., д. 14стр. 2"
                  prop={`ЖК "Сад Лабиринт"`}
                  propAlignSelf="unset"
                  propTop="calc(50% - 31px)"
                />
              </div>
            </div>
          </div>
          <div className={styles.parentGroupFrame}>
            <div className={styles.submitRequestButton}>
              <div className={styles.group1} />
              <div className={styles.div14}>Оставить заявку</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoscowRealtySwap;
