import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
function NewsCardIcon({ title, id, image, url, data, setData, desc, date }) {
  return (
    <Link
      className="hyper-text"
      onClick={() => {
        setData({
          ...data,
          title: title,
          desc: desc,
          date: date,
          image: image,
          url: url,
        });
        console.log(id);
      }}
      to={String(title || "").substring(0, 10)}
    >
      <motion.div
        exit={{ transition: { duration: 0.3 } }}
        transition={{ duration: 0.3 }}
        className="news-card"
        layoutId={`container ${id}`}
      >
        <img src={image} alt="bit" />
        <h2 className="title">{title}</h2>
        <div className="news-buttons-box">
          <h3>Updated: {(date || "").substring(0, 17)} </h3>
          <p>View</p>
        </div>
      </motion.div>
    </Link>
  );
}
export default NewsCardIcon;
