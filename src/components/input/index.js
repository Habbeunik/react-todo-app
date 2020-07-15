import React from "react";
import styles from "./input.module.css";

const InputField = ({ placeholder, value, onChange }) => {
  return (
    <input
      placeholder={placeholder}
      className={styles.input}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default InputField;
