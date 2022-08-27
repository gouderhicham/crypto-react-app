import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { cryptDetailsAction } from "../actions/cryptoDetailsAction";
import { useDispatch } from "react-redux";
import { formateNumber } from "../exports";
function CryptoIcon({
  name,
  path,
  market_cap,
  imgSource,
  price,
  daily_change,
}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const pathName = useLocation().pathname;
  return (
    <div
      onClick={() => {
        if (pathName === "/" || pathName === "") {
          navigate(`cryptos/${path}`);
        } else {
          navigate(path);
        }
        dispatch(cryptDetailsAction(path));
      }}
      className="card"
    >
      <div className="card-title">
        <h3 className="name">{name}</h3>
        <img width={30} src={imgSource} alt={name || "crypto name"} />
      </div>
      <p className="push-me">
        Price:
        {`$ ${Number(price) > 0.001
          ? formateNumber(Number(price))
          : Number(price).toFixed(7)}`}
      </p>
      <p>Market cap :$ {formateNumber(Number(market_cap))}</p>
      <p>
        Daily Change:
        <span
          style={{
            color: `${daily_change < 0 ? "red" : "green"}`,
            fontWeight: "bold",
          }}
        >
          {` ${daily_change}`}%
        </span>
      </p>
    </div>
  );
}

export default CryptoIcon;
