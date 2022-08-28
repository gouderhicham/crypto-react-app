import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../images/logo.png";
import homeIcon from "../../images/home.svg";
import chartIcon from "../../images/chart.svg";
import exchangeIcon from "../../images/ex.svg";
import newsIcon from "../../images/news.svg";
import menu from "../../images/menu.png";

function Nav() {
  const navigate = useNavigate();
  const [active, setActive] = useState(false);
  return (
    <div className="sidebar">
      <img
        onClick={() => {
          setActive(!active);
        }}
        className="menu-pic"
        src={menu}
        alt="mneupix"
      />
      <div
        onClick={() => {
          navigate("/");
        }}
        className="logo"
      >
        <img style={{zIndex:`${active ? "12"  : "auto"}`}} className="logo-img" src={logo} alt="logo" />
      </div>
      <div
        className={`nav-link-res ${
          active ? "fade" : ""
        }`}
      >
        <Link
          onClick={() => {
            setActive(false);
          }}
          className="push nav-links"
          to={"/"}
        >
          <img width={25} src={homeIcon} alt="home-icon" />
          <p>Home</p>
        </Link>
        <Link
          onClick={() => {
            setActive(false);
          }}
          className="nav-links"
          to={"/cryptos"}
        >
          <img width={25} src={chartIcon} alt="home-icon" />
          <p>Crypto Currencies</p>
        </Link>
       
        <Link
          onClick={() => {
            setActive(false);
          }}
          className="nav-links"
          to={"/news"}
        >
          <img width={25} src={newsIcon} alt="home-icon" />
          <p>News</p>
        </Link>
      </div>
    </div>
  );
}

export default Nav;
