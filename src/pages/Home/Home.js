import styles from "./Home.module.css";
import partners from "../../assets/home/partners.png";
import Banner from "./Banner";
import Pros from "./Pros";
import { useEffect } from "react";

const Home = ({ changeNavText }) => {
  useEffect(() => {
    changeNavText(true, "");
  }, [changeNavText]);

  return (
    <div className={styles.wrapper}>
      <Banner />
      <div className={styles.partners}>
        <h2>Gefördert durch</h2>
        <img src={partners} alt="Logos of Partner companies"></img>
      </div>
      <div className={styles.paraWrapper}>
        <p>
          In der von Adrian gegründeten Gruppe, spricht Torsten über seine
          Panikattacken und Merve fühlt sich endlich verstanden.
        </p>
      </div>
      <div style={{ width: "100%" }}>
        <h2>Deine Vorteile mit we.together</h2>
        <Pros />
      </div>
    </div>
  );
};

export default Home;
