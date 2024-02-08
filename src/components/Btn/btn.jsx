import React from "react";
import Login from "../../assets/icons/login";
import "./btn.css";
const Btn = ({ className, children }) => {
  return (
    <button className={className}>
      <Login />
      {children}
    </button>
  );
};

export default Btn;
