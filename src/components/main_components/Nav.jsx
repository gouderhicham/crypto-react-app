import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../images/logo.png";
import homeIcon from "../../images/home.svg";
import chartIcon from "../../images/chart.svg";
import exchangeIcon from "../../images/ex.svg";
import newsIcon from "../../images/news.svg";
function Nav() {
  const navigate = useNavigate();
  return (
    <div className="sidebar">
      <div
        onClick={() => {
          navigate("/");
        }}
        className="logo"
      >
        <img className="logo-img" src={logo} alt="logo" />
      </div>
      <div className="nav-link-res">
        <Link to={"/"}>
          <div className="push nav-links">
            <img width={25} src={homeIcon} alt="home-icon" />
            <p>Home</p>
          </div>
        </Link>
        <Link to={"/cryptos"}>
          <div className="nav-links">
            <img width={25} src={chartIcon} alt="home-icon" />
            <p>Crypto Currencies</p>
          </div>
        </Link>
        <Link to={"/exchange"}>
          <div className="nav-links">
            <img width={25} src={exchangeIcon} alt="home-icon" />
            <p>Exchange</p>
          </div>
        </Link>
        <Link to={"/news"}>
          <div className="nav-links">
            <img width={25} src={newsIcon} alt="home-icon" />
            <p>News</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Nav;
