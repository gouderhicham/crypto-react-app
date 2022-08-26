import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Converter from "timestamp-conv";
import Loader from "../components/main_components/Loader";
import { cryptDetailsAction } from "../actions/cryptoDetailsAction";
import { DetailsSection } from "../components";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useParams } from "react-router-dom";
function CryptoDetails() {
  const [date_state, setdate_state] = useState("1y");
  const params = useParams();
  const dispatch = useDispatch();
  const loadingStatus = useSelector((stats) => stats.cryptoDetails.loading);
  const change = Number(
    useSelector(
      (single_history_data) =>
        single_history_data.cryptoDetails.priceDetails.change
    )
  );
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
  const converDate = (time, option) => {
    // if time === yearly / monthly / weekly / 24h
    const Date = new Converter.date(time);
    // moths data is a index of them so we create an array of month and we select months[index]
    if (option === "full-date") {
      return `${Date.getDay()} ${
        months[Date.getMonth() - 1]
      } ${Date.getYear()}`;
    } else {
      return `${months[Date.getMonth() - 1]} ${Date.getYear()}`;
    }
  };
  // select dates p
  const ps = document.querySelectorAll(".dates p");
  useEffect(() => {
    ps?.forEach((p) => {
      if (p.textContent === date_state) {
        p.classList.add("selected");
        console.log("ah");
      } else {
        p.classList.remove("selected");
        console.log("ahh");
      }
    });
  }, [date_state]);

  // select coin price history from redux store
  const historData = useSelector(
    (single_history_data) =>
      single_history_data.cryptoDetails.priceDetails.history
  );
  // the filtered pricehistory list that contain the price and time values formatted
  const newArr = historData?.map((ele) => ({
    price: Number(ele.price),
    time: converDate(Number(ele.timestamp)),
    fulltime: converDate(Number(ele.timestamp), "full-date"),
  }));
  // select the clicked crypto coin
  const coin = useSelector((a_data) => a_data.cryptoDetails.cryptDetails);
  // the fucntion that's  gonna render different tooltip on chart hover
  const renderTooltip = (props) => {
    if (props && props.payload !== null && props.payload[0]) {
      return (
        <div>
          <div style={{ color: "black" }}>
            {/* display two digits after decimal if number is bigger than 0.01 */}
            Price:$
            {Number(props.payload[0].payload.price) > 2.01
              ? Number(props.payload[0].payload.price).toFixed(2)
              : Number(props.payload[0].payload.price)}
          </div>
          <div style={{ color: "black" }}>
            Date: {props.payload[0].payload.fulltime}
          </div>
        </div>
      );
    }
  };
  useEffect(() => {
    dispatch(cryptDetailsAction(params.coinId));
  }, []);
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
                color: `${change < 0 ? "red" : "green"}`,
              }}
            >
              {` ${change}`}%
            </span>
          </p>
          <p>
            Current {coin.name} Price:{` $ ${Number(coin.price).toFixed(2)}`}
          </p>
        </div>
      </div>
      <div
        onClick={(e) => {
          if (e.target.classList[0] !== "dates") {
            let date = e.target.textContent;
            setdate_state(date);
            dispatch(cryptDetailsAction(coin.uuid, date));
          }
        }}
        className="dates"
      >
        <p>3h</p>
        <p>24h</p>
        <p>7d</p>
        <p>30d</p>
        <p>3m</p>
        <p className="selected">1y</p>
        <p>3y</p>
        <p>5y</p>
      </div>
      <ResponsiveContainer
        className="chart-container"
        width="100%"
        height={400}
      >
        <AreaChart className="chart" data={newArr}>
          <CartesianGrid strokeDasharray="0 0 5" />
          <XAxis angle={-10} reversed dataKey="time" />
          <YAxis domain={["min", "auto"]} type="number" interval={0} />
          <Tooltip content={renderTooltip} />
          <Area dataKey="price" stroke="#444444" fill={coin.color} />
        </AreaChart>
      </ResponsiveContainer>
      <DetailsSection coin={coin} />
    </div>
  );
}
export default CryptoDetails;
