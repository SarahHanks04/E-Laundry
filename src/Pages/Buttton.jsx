import React from "react";
import { NavLink } from "react-router-dom";

const Button = ({ text, to, className }) => {
  return (
    <div>
      <NavLink to={to} className={className}>
        {text}
      </NavLink>
    </div>
  );
};

export default Button;
