import React from "react";
import { useSelector } from "react-redux";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

function CryptoDetails() {
  // select coin price history from redux store
  const historData = useSelector(
    (single_history_data) =>
      single_history_data.cryptoDetails.priceDetails.history
  );
  const newArr = historData?.map((ele) => ({
    price: Number(ele.price),
    time: Number(ele.timestamp),
  }));
  return (
    <AreaChart
      width={500}
      height={400}
      data={newArr}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0,
      }}
    >
      <CartesianGrid strokeDasharray="0 0 5" />
      <XAxis dataKey="time" />
      <YAxis />
      <Tooltip />
      <Area dataKey="price" stroke="#444444" fill="#bbbbbb" />
    </AreaChart>
  );
}

export default CryptoDetails;
