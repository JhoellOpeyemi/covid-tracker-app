import React from "react";

const Items = ({ news }) => {
  const currentMilliSeconds = new Date().valueOf();

  // Get Api Date and Time and set to a variable
  const splitDateAndTime = news.pubDate.split(".");
  const apiDateAndTime = splitDateAndTime[0];
  const apiMilliSeconds = Number(Date.parse(apiDateAndTime));

  // Function to calculate the time the news was published
  const setPublishedTime = () => {
    const difference = Number(currentMilliSeconds - apiMilliSeconds);
    const hoursAgo = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutesAgo = Math.floor((difference / (1000 * 60)) % 60);

    if (hoursAgo > 1) {
      return `${hoursAgo} hours ${minutesAgo} minutes ago`;
    } else if (hoursAgo === 1) {
      return `${hoursAgo} hour ${minutesAgo} minutes ago`;
    } else {
      return `${minutesAgo} minutes ago`;
    }
  };

  return (
    <li className="news-list">
      <a href={`${news.link}`} target={"_blank"} rel="noreferrer">
        <img src={news.urlToImage} alt="News Headline" className="news-image" />
        <div className="news-title-date">
          <h4 className="news-title">{news.title}</h4>
          <p className="news-time">{setPublishedTime()}</p>
        </div>
      </a>
    </li>
  );
};

export default Items;
