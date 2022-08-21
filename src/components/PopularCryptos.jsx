import React from "react";
import { useSelector } from "react-redux";
import { CryptoIcon } from "../components";
function PopularCryptos() {
  const cryptos = useSelector((data) => data.cryptos.popularCryptos);
  return (
    <>
    <h1 className="c-title" >World Most Popular Cryptos</h1>
      <section className="cards">
        {cryptos?.map((crypto) => (
          <CryptoIcon
            name={crypto.name}
            market_cap={crypto.marketCap}
            imgSource={crypto.iconUrl}
            price={crypto.price}
            key={crypto.uuid}
            daily_change={crypto.change}
            path={crypto.uuid}
          />
        ))}
      </section>
    </>
  );
}

export default PopularCryptos;
