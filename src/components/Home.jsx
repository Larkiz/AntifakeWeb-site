import { useState, useEffect } from "react";
import loaderSearch from "./preLoader.jsx";
import { Link } from "react-router-dom";

export const LastNewsBlock = () => {
  const [news, setnews] = useState();

  function getApiData() {
    if (!sessionStorage.getItem("lastNews")) {
      fetch("https://xn--e1aajdfofi2cf.xn--p1ai:3000/api/lastnews")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          sessionStorage.setItem("lastNews", JSON.stringify(data));
          return setnews(data);
        });
    } else {
      setnews(JSON.parse(sessionStorage.getItem("lastNews")));
    }
  }

  useEffect(() => {
    !news && getApiData();
  }, []);

  const LastNews = () => {
    return (
      <div className="last-news-screen">
        <h2 className="h2-title">Последние новости</h2>
        <div className="slider">
          <button className="slider-prev slider-btn">
            <img src="/images/arrow.png" />
          </button>
          <div className="last-arts-cont">
            <div className="slider-line">
              {!news && loaderSearch()}
              {news &&
                news.map((item) => (
                  <div key={item.num} className="card-cont">
                    <img src={item.img} />
                    <div className="card-content">
                      <h2 className="main-screen-title">{item.title}</h2>
                      <span className="line-btn-time">
                        <p>{item.time}</p>

                        <button className="button-read btn-style">
                          <Link to="/read" state={{ data: item }}>
                            Читать
                          </Link>
                        </button>
                      </span>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <button className="slider-next slider-btn">
            <img src="/images/arrow.png" />
          </button>
        </div>
      </div>
    );
  };

  return <LastNews />;
};
