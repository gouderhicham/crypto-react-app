import React from "react";
function CryptoIcon({ name, market_cap, imgSource, price, daily_change }) {
  return (
    <div className="cards">
      <div className="card">
        <div className="title">
          <h3 className="name">{name}</h3>
          <img width={30} src={imgSource} alt={name || "crypto name"} />
        </div>
        <p className="push-me">Price:{price}$</p>
        <p>Market cap :{market_cap}$</p>
        <p>Daily Change:{daily_change}%</p>
      </div>
    </div>
  );
}

export default CryptoIcon;
