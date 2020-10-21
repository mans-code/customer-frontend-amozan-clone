import React from "react";
import { Link } from "react-router-dom";
import imgLogo from "../../assets/images/logo.png";
import "./Logo.css";

const logo = (props) => (
  <div className="logo" style={{ height: props.height }}>
    <Link to="/">
      <img src={imgLogo} alt="MyStore" />
    </Link>
  </div>
);

export default logo;
