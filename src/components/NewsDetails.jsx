import React from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
function NewsDetails({ title, image, desc, url, date }) {
  const navigate = useNavigate();
  return (
    <AnimatePresence>
      <div
        onClick={(e) => {
          if (e.target.classList[0] === "align-center") {
            navigate("/news");
          }
        }}
        className="align-center"
      >
        <motion.div
          layoutId={`container ${date}`}
          transition={{ duration: 0.3 }}
          exit={{ transition: { duration: 0.2 } }}
          className="news-card-zoom"
        >
          
          <h2 className="details-title">{title}</h2>
          <p className="desc">{desc}</p>
          <div className="details-news-buttons-box">
            <h3>Updated: {(date || "").substring(0, 17)} </h3>
            <a href={`${url}`} className="news-link" target={"_blank"}>
              Visit
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
export default NewsDetails;
