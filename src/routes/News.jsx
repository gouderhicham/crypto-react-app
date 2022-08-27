import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NewsCardIcon, NewsDetails } from "../exports";
import { useLocation } from "react-router-dom";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
function News() {
  const [data, setData] = useState({
    title: "",
    desc: "",
    date: "",
    image: "",
    url: "",
  });
  const news = useSelector((data) => data.news.news);
  const pathName = useLocation().pathname.substring(6);
  return (
    <>
      {pathName !== "" && data.title !== "" && (
        <AnimatePresence>
          <NewsDetails
            image={data.image}
            desc={data.desc}
            title={data.title}
            date={data.date}
            url={data.url}
          />
        </AnimatePresence>
      )}
      <AnimateSharedLayout type="crossfade">
        <section className="new-cards">
          {news?.map((n) => (
            <NewsCardIcon
              id={n.date}
              url={n.url}
              data={data}
              setData={setData}
              image={n.image}
              date={n.date}
              key={n.title}
              title={n.title}
              desc={n.desc}
            />
          ))}
        </section>
      </AnimateSharedLayout>
    </>
  );
}
export default News;
