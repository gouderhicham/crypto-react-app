import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PopularCryptos, numberWithCommas } from "../components";
function Homepage() {
  const dispatch = useDispatch()
  const data = useSelector((newData) => newData.cryptos);
  useEffect(()=> {
    dispatch({type : "set-loading"})
  },[])
  return (
    <div className="home-page-content">
      <h1 className="title">Global Crypto Stats</h1>
      <section className="stats">
        <div className="left">
          <div className="small-title">
            <h4>Total Cryptocurrencies: </h4>
            <h3>{numberWithCommas(data.totalCoins || "") || 0}</h3>
          </div>
          <div className="small-title">
            <h4>Total Market Cap: </h4>
            <h3>
              {`$${numberWithCommas(data.totalMarketCap || "").substring(
                0,
                4
              )}T` || 0}
            </h3>
          </div>
          <div className="small-title">
            <h4>Total Exchanges: </h4>
            <h3>{data.totalExchanges || "XX,XX"}</h3>
          </div>
        </div>
        <div className="right">
          <div className="small-title">
            <h4>Total 24h Volume: </h4>
            <h3>
              {`$${numberWithCommas(data.total24hVolume || "").substring(
                0,
                5
              )}B` || 0}
            </h3>
          </div>
          <div className="small-title">
            <h4>Total Markets:</h4>
            <h3>
              {`${numberWithCommas(data.totalMarkets || "").substring(
                0,
                4
              )}k` || 0}
            </h3>
          </div>
        </div>
      </section>
      <PopularCryptos />
    </div>
  );
}
export default Homepage;
