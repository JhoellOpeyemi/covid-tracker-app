import React from "react";

const Items = ({ news }) => {
  // Get Date elements and set to a variable
  let day = new Date().getDate();
  let month = new Date().getMonth() + 1;
  let year = new Date().getFullYear();
  let hour = new Date().getHours();
  let minute = new Date().getMinutes();
  let seconds = new Date().getSeconds();

  const currentDateFormat = `${year}-0${month}-0${day}T${hour}:${minute}:${seconds}`;

  const currentMilliSeconds = Number(Date.parse(currentDateFormat));

  // Get Api Date and Time and set to a variable
  const splitDateAndTime = news.pubDate.split(".");
  const apiDateAndTime = splitDateAndTime[0];
  const apiMilliSeconds = Number(Date.parse(apiDateAndTime));

  // Function to calculate the time the news was published
  const setPublishedTime = () => {
    const difference = currentMilliSeconds - apiMilliSeconds;
    // console.log(apiMilliSeconds);
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

  setPublishedTime();

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
