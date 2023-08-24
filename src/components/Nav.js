import Button from "./Button";
import { primaryColor } from "../utils/colors";
import styles from "./Nav.module.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Nav = ({ currentPg, isRegister }) => {
  const navItems = [
    { description: "Startseite", path: "/" },
    { description: "Gruppen", path: "/" },
    { description: "Blog", path: "/" },
    { description: "Preisübersicht", path: "/" },
    { description: "Über uns", path: "/about" },
  ];

  return (
    <nav className={styles.navBar}>
      <ul className={styles.navList}>
        {navItems
          .filter((item) => item.description !== currentPg)
          .map((item, index) => (
            <li key={index}>
              <Link to={item.path}>{item.description}</Link>
            </li>
          ))}
      </ul>
      <Link to="/" style={{ flexGrow: 2 }}>
        <img src={logo} alt="Logo" />
      </Link>
      {isRegister ? <Link to="/">Anmelden</Link> : <Link to="/">Log in</Link>}
      <Button type="default" color={primaryColor}>
        Mitglied werden
      </Button>
    </nav>
  );
};

export default Nav;
