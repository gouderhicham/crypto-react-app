import React from "react";
import { Link } from "react-router-dom";
function NewsCardIcon({ title, image, data, setData, desc, date }) {
  return (
    <Link
      onClick={() => {
        setData({
          ...data,
          title: title,
          desc: desc,
          date: date,
          image: image,
        });
      }}
      to={String(title || "").substring(0, 10)}
      className="news-card"
    >
      <img src={image} alt="bit" />
      <h2 className="title">{title}</h2>
      <div className="news-buttons-box">
        <h3>Updated: {(date || "").substring(0, 17)} </h3>
        <p>View</p>
      </div>
    </Link>
  );
}
export default NewsCardIcon;
