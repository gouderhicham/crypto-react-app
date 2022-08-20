import React from "react";
import {useSelector} from "react-redux"
function Homepage() {
  const data = useSelector(newData => newData.cryptos)
  return (
    <div className="home-page-content">
      <h1 className="title">Global Crypto Stats</h1>
      <section className="stats">
        <div className="left">
          <div className="small-title">
            <h3>Total Cryptocurrencies</h3>
            <h3>{data.totalCoins || 15000}</h3>
          </div>
          <div className="small-title">
            <h3>Total Market Cap:</h3>
            <h3>17.124</h3>
          </div>
          <div className="small-title">
            <h3>Total Exchanges</h3>
            <h3>17.124</h3>
          </div>
        </div>
        <div className="right">
          <div className="small-title">
            <h3>Total 24h Volume</h3>
            <h3>17.124</h3>
          </div>
          <div className="small-title">
            <h3>Total Markets</h3>
            <h3>17.124</h3>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Homepage;