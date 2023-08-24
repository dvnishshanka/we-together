import styles from "./Footer.module.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div
      style={{
        borderTop: "1px solid rgba(0, 0, 0, 0.20)",
        display: "flex",
        margin: "0 8rem 0 8rem",
        padding: "4rem 5.6rem 4rem 5.6rem ",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <h4>Rechtliches</h4>
        <p>Über uns</p>
        <p>Impressum</p>
        <p>Datenschutz</p>
        <p>AGB</p>
        <p>Wiederufsrecht</p>
      </div>
    </div>
  );
};

export default Footer;
