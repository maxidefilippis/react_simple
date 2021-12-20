import React from "react";
import "./index.scss";

const Button = (props) => (
  <button className="button" {...props}>
    {props.name}
  </button>
);

export default Button;
