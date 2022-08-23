import React, { useState } from "react";
import { useSelector } from "react-redux";
import NewsCardIcon from "../components/newsCardIcon";
import NewsDetails from "../components/NewsDetails";
import { useParams, useLocation } from "react-router-dom";
function News() {
  const [data, setData] = useState({
    title: "",
    desc: "",
    date: "",
    image: "",
  });
  const news = useSelector((data) => data.news.news);
  const pathName = useLocation().pathname.substring(6);
  return (
    <>
      {pathName !== "" && <NewsDetails />}
      <section className="new-cards">
        {news?.map((n) => (
          <NewsCardIcon
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
    </>
  );
}
export default News;
