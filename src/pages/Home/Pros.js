import styles from "./Pros.module.css";

const ProItem = ({ number, heading, description }) => {
  return (
    <li className={styles.proItem}>
      <div className={styles.proNum}>{number}</div>
      <div className={styles.proDesWrapper}>
        <h3>{heading}</h3>
        <p>{description}</p>
      </div>
    </li>
  );
};

const Pros = () => {
  const proList = [
    [
      "01",
      "Fortlaufende Gruppen",
      "Tausch Dich regelmäßig mit Menschen aus, die in einer ähnlichen Situation sind wie Du um gemeinsam zu heilen.",
    ],
    [
      "02",
      "Anonymität",
      "Deine Sicherheit liegt uns besonders am Herzen, deshalb achten wir sehr auf Deine Anonymität auf der Plattform.",
    ],
    [
      "03",
      "Jederzeit zugänglich",
      "Alle Gruppen finden online per Video-Call statt. Unabhängig von deinem Wohnort und deiner Lebenssituation.",
    ],
    [
      "04",
      "Von Psychologen entwickelt",
      "Unsere Gruppen-Konzepte werden von Psycholog/innen mit dem Feedback von Betroffenen entwickelt. ",
    ],
    [
      "05",
      "Kostenlos ausprobieren",
      "Um zu schauen, ob dir we.together hilft, hast du die Möglichkeit es kostenlos in 5 Terminen unverbindlich auszuprobieren.",
    ],
    [
      "06",
      "Keine Wartezeit",
      "Auf we.together findest Du zahlreiche Selbsthilfegruppen zu verschiedenen Themen mit täglichen Angeboten.",
    ],
  ];

  return (
    <ul className={styles.proList}>
      {proList.map((item, index) => {
        return (
          <ProItem
            key={index}
            number={item[0]}
            description={item[2]}
            heading={item[1]}
          />
        );
      })}
    </ul>
  );
};

export default Pros;
