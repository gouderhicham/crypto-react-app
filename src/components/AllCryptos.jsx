import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { CryptoIcon } from "../exports";
function AllCryptos() {
  const [cryps, setCryps] = useState([]);
  const cryptos = useSelector((data) => data.cryptos.All_CRYPTOS);
  const SEARCH_TEXT = useSelector((data) => data.searchedCryps) || "";
  useEffect(() => {
    let newArr = cryptos?.filter((crypto) => {
      if (
        String(crypto.name)
          .toLowerCase()
          .includes(String(SEARCH_TEXT.input).toLowerCase())
      ) {
        return { ...crypto };
      }
    });
    setCryps(newArr)
  }, [SEARCH_TEXT]);
  return (
    <>
      <section className="cards" style={{ marginTop: "5rem" }}>
        {cryps?.map((crypto) => (
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

export default AllCryptos;
