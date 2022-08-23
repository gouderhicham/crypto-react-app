import React from "react";
import { useNavigate } from "react-router-dom";
function NewsDetails({ title, image, desc, url, date }) {
  const navigate = useNavigate();
  return (
    <div
      onClick={(e) => {
        if (e.target.classList[0] === "align-center") {
          navigate(-1);
        }
      }}
      className="align-center"
    >
      <div className="news-card-zoom">
        <img src={image} alt="bit" />
        <h2 className="details-title">{title}</h2>
        <p className="desc">{desc}</p>
        <div className="details-news-buttons-box">
          <h3>Updated: {(date || "").substring(0, 17)} </h3>
          <a href={`${url}`} className="news-link" target={"_blank"}>
            Visit
          </a>
        </div>
      </div>
    </div>
  );
}
export default NewsDetails;
