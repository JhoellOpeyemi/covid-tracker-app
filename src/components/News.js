import React from "react";
import "../styles/news.css";
import Items from "./Items";

const News = ({ newsList }) => {
  return (
    <section className="main news-page">
      <h3 className="news-header">Coronavirus News</h3>
      <ul className="news-group">
        {newsList.map((news) => {
          return <Items key={news.news_id} news={news} />;
        })}
      </ul>
    </section>
  );
};

export default News;
