import React from "react";

const Items = ({ news }) => {
  return (
    <li className="news-list">
      <img src={news.urlToImage} alt="News Headline" className="news-image" />
      <p className="title">{news.title}</p>
    </li>
  );
};

export default Items;
