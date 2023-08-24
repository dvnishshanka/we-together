import styles from "./Button.module.css";

const Button = ({ type, color, children }) => {
  const btnStyle = {
    background: color,
  };

  return (
    <button className={styles.stdBtn} type={type} style={btnStyle}>
      {children}
    </button>
  );
};

export default Button;
