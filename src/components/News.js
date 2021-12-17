import React, { useState, useEffect } from "react";
import "../styles/news.css";
import Items from "./Items";

const News = ({ api }) => {
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    getNews(`${api.base}${api.news}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getNews = (api) => {
    fetch(api, {
      method: "GET",
      headers: {
        "x-rapidapi-host":
          "vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com",
        "x-rapidapi-key": "652c66e0famsh0aadcac5e5a938fp196d32jsn0fe9e2225e0f",
      },
    })
      .then((res) => res.json())
      .then((news) => {
        console.log(news.news);
        setNewsList(news.news);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <section className="main news-page">
      <ul className="news-group">
        {newsList.map((news) => {
          return <Items key={news.news_id} news={news} />;
        })}
      </ul>
    </section>
  );
};

export default News;
