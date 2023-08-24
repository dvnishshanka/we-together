import styles from "./About.module.css";
import { useEffect } from "react";

const About = ({ changeNavText }) => {
  useEffect(() => {
    changeNavText(false, "Über uns");
  }, [changeNavText]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.banner}>
        <h1>Wir demokratisieren Selbsthilfegruppen</h1>
        <p>
          Gemeinsam haben wir es uns zur Aufgabe gemacht Menschen in schwierigen
          Lebenssituationen zu unterstützen und haben damit auch eine
          Lebensaufgabe gewählt.
        </p>
      </div>
    </div>
  );
};

export default About;
