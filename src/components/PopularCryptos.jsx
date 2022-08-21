import React from "react";
import { useSelector } from "react-redux";
import { CryptoIcon } from "../components";
function PopularCryptos() {
  const cryptos = useSelector((data) => data.cryptos.popularCryptos);
  return (
    <section>
      {cryptos?.map((crypto) => (
        <CryptoIcon
          name={crypto.name}
          market_cap = {crypto.marketCap}
          imgSource={crypto.iconUrl}
          price = {crypto.price}
          key={crypto.uuid}
          daily_change = {crypto.change}
        />
      ))}
    </section>
  );
}

export default PopularCryptos;
