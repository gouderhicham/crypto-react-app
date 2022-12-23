import React, { useState } from "react";
import { useSelector } from "react-redux";
import NewsDetails from "../components/NewsDetails";
import NewsCardIcon from "../components/NewsCardIcon";
import { useLocation } from "react-router-dom";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
function News() {
  const [data, setData] = useState({
    title: "",
    desc: "",
    date: "",

    url: "",
  });
  const news = useSelector((data) => data.news.news);
  console.log(news);
  const pathName = useLocation().pathname.substring(6);
  return (
    <>
      {pathName !== "" && data.title !== "" && (
        <AnimatePresence>
          <NewsDetails
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
              date={n.date}
              key={n.title}
              title={n.title}
              desc={n.description}
            />
          ))}
        </section>
      </AnimateSharedLayout>
    </>
  );
}
export default News;
