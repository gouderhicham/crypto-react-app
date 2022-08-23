import React, { useState } from "react";
import { useSelector } from "react-redux";
import NewsCardIcon from "../components/newsCardIcon";
import NewsDetails from "../components/NewsDetails";
import { useLocation } from "react-router-dom";
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
        <NewsDetails
          image={data.image}
          desc={data.desc}
          title={data.title}
          date={data.date}
          url = {data.url}
        />
      )}
      <section className="new-cards">
        {news?.map((n) => (
          <NewsCardIcon
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
    </>
  );
}
export default News;
