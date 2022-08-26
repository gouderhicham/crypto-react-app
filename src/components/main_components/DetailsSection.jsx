import React from "react";
import { price, ex, high, markets, rank, thunder } from "../../components";
function DetailsSection({coin}) {
  return (
    <div className="details-column">
      <div className="details-left-stats flex">
        <h1 className="details-title">{coin.name} Value Statistics</h1>
        <p className="details-desc">
          An overview showing the statistics of {coin.name}, such as the base
          and quote currency, the rank, and trading volume.
        </p>
        <div className="info">
          <div className="info-line">
            <div className="img-label">
              <img src={price} alt="" />
              <p>Price to USD</p>
            </div>
            <div className="right-info">{`$ ${Number(coin.price).toFixed(
              2
            )}`}</div>
          </div>
          <div className="info-line">
            <div className="img-label">
              <img src={rank} alt="" />
              <p>Rank</p>
            </div>
            <div className="right-info">{`#${coin.rank}`}</div>
          </div>
          <div className="info-line">
            <div className="img-label">
              <img src={thunder} alt="" />
              <p>24h Volume</p>
            </div>
            <div className="right-info">{`$ ${Number(coin["24hVolume"]).toFixed(
              2
            )}`}</div>
          </div>
          <div className="info-line">
            <div className="img-label">
              <img src={price} alt="" />
              <p>Market Cap</p>
            </div>
            <div className="right-info">{`$ ${Number(coin.marketCap).toFixed(
              2
            )}`}</div>
          </div>
          <div className="info-line">
            <div className="img-label">
              <img src={high} alt="" />
              <p> Highest price reached</p>
            </div>
            <div className="right-info">{`$ ${Number(
              coin.allTimeHigh?.price
            ).toFixed(2)}`}</div>
          </div>
        </div>
      </div>
      <div className="details-right-stats flex">
        <h1 className="details-title">Other Stats Info</h1>
        <p className="details-desc">
          An overview showing the statistics of {coin.name}, such as the base
          and quote currency, the rank, and trading volume.
        </p>
        <div className="info">
          <div className="info-line">
            <div className="img-label">
              <img src={markets} alt="" />
              <p>Number Of Markets</p>
            </div>
            <div className="right-info">{`$ ${coin.numberOfMarkets}`}</div>
          </div>
          <div className="info-line">
            <div className="img-label">
              <img src={ex} alt="" />
              <p>Number Of Exchanges</p>
            </div>
            <div className="right-info">{`${coin.numberOfExchanges}`}</div>
          </div>
          <div className="info-line">
            <div className="img-label">
              <img src={price} alt="" />
              <p>Total supply</p>
            </div>
            <div className="right-info">{`$ ${Number(
              coin.supply?.total
            ).toFixed(2)}`}</div>
          </div>
        </div>
      </div>
      <div className="details-three">
        <h1 className="details-title">What is {coin.name} ? </h1>
        <div
          className="coin-info-p"
          dangerouslySetInnerHTML={{ __html: coin?.description }}
        ></div>
      </div>
      <div className="flex">
        <h1 className="details-title">{coin.name} Links</h1>
        {coin.links?.map((link) => (
          <div key={link.url} className="info-line">
            <p>{link.name}</p>
            <a target={"_blank"} href={`${link.url}`}>
              {
                link.url
                  .replace("http://", "")
                  .replace("https://", "")
                  .split(/[/?#]/)[0]
              }
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DetailsSection;
