import React from "react";
import { useSelector } from "react-redux";
import Converter from "timestamp-conv";
import Loader from "../components/main_components/Loader";
import { price, ex, high, markets, rank, thunder } from "../components";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
function CryptoDetails() {
  const loadingStatus = useSelector((stats) => stats.cryptoDetails.loading);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const converDate = (time) => {
    const Date = new Converter.date(time);
    // moths data is a index of them so we create an array of month and we select months[index]
    return `${months[Date.getMonth() - 1]} ${Date.getYear()}`;
  };
  // select coin price history from redux store
  const historData = useSelector(
    (single_history_data) =>
      single_history_data.cryptoDetails.priceDetails.history
  );
  // the filtered pricehistory list that contain the price and time values formatted
  const newArr = historData?.map((ele) => ({
    price: (Math.round(Number(ele.price) * 100) / 100).toFixed(2),
    time: converDate(Number(ele.timestamp)),
  }));
  const coin = useSelector((a_data) => a_data.cryptoDetails.cryptDetails);
  if (loadingStatus) {
    return <Loader />;
  }
  return (
    <div className="details-container">
      <div className="details-title-coin">
        <strong>
          <img width={40} src={coin.iconUrl} alt={coin.name} />
          {`${coin.name}`}
          <span style={{ color: coin.color }}>{` (${coin.symbol}) `}</span>
          Price
        </strong>
        <h3>{`${coin.name} live price in US Dollar (USD). View value statistics, market cap and supply.`}</h3>
      </div>
      <div className="chart-label">
        <h1>{`${coin.name} Price Chart :`}</h1>
        <div className="label-right">
          <p>
            Change:
            <span
              style={{
                color: `${coin.change < 0 ? "red" : "green"}`,
              }}
            >
              {` ${coin.change}`}%
            </span>
          </p>
          <p>
            Current {coin.name} Price:{` $ ${coin.price}`}
          </p>
        </div>
      </div>
      <ResponsiveContainer
        className="chart-container"
        width="100%"
        height={400}
      >
        <AreaChart className="chart" data={newArr}>
          <CartesianGrid strokeDasharray="0 0 5" />
          <XAxis angle={-10} reversed dataKey="time" />
          <YAxis interval={0} />
          <Tooltip />
          <Area dataKey="price" stroke="#444444" fill={coin.color} />
        </AreaChart>
      </ResponsiveContainer>
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
              <div className="right-info">{`$ ${(
                Math.round(Number(coin.price) * 100) / 100
              ).toFixed(2)}`}</div>
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
              <div className="right-info">{`$ ${(
                Math.round(Number(coin["24hVolume"]) * 100) / 100
              ).toFixed(2)}`}</div>
            </div>
            <div className="info-line">
              <div className="img-label">
                <img src={price} alt="" />
                <p>Market Cap</p>
              </div>
              <div className="right-info">{`$ ${(
                Math.round(Number(coin.marketCap) * 100) / 100
              ).toFixed(2)}`}</div>
            </div>
            <div className="info-line">
              <div className="img-label">
                <img src={high} alt="" />
                <p> Highest price reached</p>
              </div>
              <div className="right-info">{`$ ${(
                Math.round(Number(coin.allTimeHigh?.price) * 100) / 100
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
              <div className="right-info">{`$ ${coin.supply?.total}`}</div>
            </div>
          </div>
        </div>
        <div className="details-three">
          <h1 className="details-title">What is {coin.name} ? </h1>
          <div className="coin-info-p" dangerouslySetInnerHTML={{ __html: coin?.description }}></div>
        </div>
        <div className="flex">
          <h1 className="details-title">{coin.name} Links</h1>
          {coin.links?.map((link) => (
            <div key={link.url} className="info-line">
              <p>{link.name}</p>
              <a href={`${link.url}`}>{link.url}</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CryptoDetails;
