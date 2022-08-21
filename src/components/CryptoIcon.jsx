import React from "react";
import { numberWithCommas } from "../components";
function CryptoIcon({ name, market_cap, imgSource, price, daily_change }) {
  return (
    <div className="card">
      <div className="card-title">
        <h3 className="name">{name}</h3>
        <img width={30} src={imgSource} alt={name || "crypto name"} />
      </div>
      <p className="push-me">Price:{String(price || 0).substring(0,6)}$</p>
      <p>Market cap :{market_cap}$</p>
      <p>Daily Change:{daily_change}%</p>
    </div>
  );
}

export default CryptoIcon;
