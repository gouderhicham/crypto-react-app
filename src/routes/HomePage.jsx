import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PopularCryptos, formateNumber } from "../exports";
function Homepage() {
  const dispatch = useDispatch();
  const data = useSelector((newData) => newData.cryptos);
  useEffect(() => {
    dispatch({ type: "set-loading" });
  }, []);
  return (
    <div className="home-page-content">
      <h1 className="title">Global Ah Crypto Stats</h1>
      <section className="stats">
        <div className="left">
          <div className="small-title">
            <h4>Total Cryptocurrencies: </h4>
            <h3>{formateNumber(data.totalCoins)}</h3>
          </div>
          <div className="small-title">
            <h4>Total Market Cap: </h4>
            <h3>{`$${formateNumber(data.totalMarketCap)}`}</h3>
          </div>
          <div className="small-title">
            <h4>Total Exchanges: </h4>
            <h3>{data.totalExchanges}</h3>
          </div>
        </div>
        <div className="right">
          <div className="small-title">
            <h4>Total 24h Volume: </h4>
            <h3>{`$${formateNumber(data.total24hVolume)}`}</h3>
          </div>
          <div className="small-title">
            <h4>Total Markets:</h4>
            <h3>
              {`${formateNumber(data.totalMarkets)}`}
            </h3>
          </div>
        </div>
      </section>
      <PopularCryptos />
    </div>
  );
}
export default Homepage;
