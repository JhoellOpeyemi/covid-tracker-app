import React from "react";
import { useParams } from "react-router-dom";

const NewsDetails = ({ newsList }) => {
  let params = useParams();
  let newsDisplayed;

  newsList.forEach((news) => {
    if (news.news_id === params.id) {
      newsDisplayed = news;
    }
  });
  console.log(newsDisplayed);

  return (
    <section className="news-displayed-wrapper">
      {typeof newsDisplayed != "undefined" ? (
        <>
          <div className="news-displayed">
            <img
              src={newsDisplayed.urlToImage}
              alt="News Headline"
              className="news-image"
            />
            <h4 className="news-displayed-heading">{newsDisplayed.title}</h4>
          </div>

          <p className="news-displayed-content">{newsDisplayed.content}</p>
        </>
      ) : (
        ""
      )}
    </section>
  );
};

export default NewsDetails;
