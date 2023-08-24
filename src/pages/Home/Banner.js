import Button from "../../components/Button";
import styles from "./Banner.module.css";
import {
  primaryColor,
  secondaryColor,
  tertiaryColor,
} from "../../utils/colors";
import banner1 from "../../assets/home/banner1.jpg";
import banner2 from "../../assets/home/banner2.png";
import banner3 from "../../assets/home/banner3.jpg";

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.bannerLeft}>
        <h1>Online Selbsthilfegruppen</h1>
        <p>
          Tausche Dich mit anderen Betroffenen aus oder starte eine neue Gruppe.
          Unabhängig von deinem Wohnort und passend zu deiner Lebenssituation.
        </p>
        <Button type="default" color={primaryColor}>
          Jetzt starten
        </Button>
      </div>
      <div className={styles.bannerRight}>
        <div className={styles.imgContainer}>
          <div
            className={styles.rectangle}
            style={{ background: secondaryColor }}
          ></div>
          <img
            src={banner1}
            alt="woman working on laptop"
            style={{ height: "35%", objectFit: "cover" }}
          ></img>
          <img src={banner2} alt="woman explaining"></img>
        </div>
        <div className={styles.imgContainer}>
          <img
            src={banner3}
            alt="man working on laptop"
            style={{ height: "80%", objectFit: "cover" }}
          ></img>
          <div
            className={styles.rectangle}
            style={{ background: tertiaryColor }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
