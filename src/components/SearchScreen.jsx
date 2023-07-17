import { useState, useEffect } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { SearchSect } from "./SearchSect.jsx";
import loaderSearch from "./preLoader.jsx";

export const SearchScreen = () => {
  const [searchNews, setSearchNews] = useState();
  let history = useNavigate();
  let news = useLocation();

  function Search() {
    if (!sessionStorage.getItem("userSearch")) {
      let userSearch = news.state.query;
      fetch(
        `https://xn--e1aajdfofi2cf.xn--p1ai:3000/api/query=${userSearch.text}&Limit=${userSearch.value}&from=${userSearch.dateFrom}&to=${userSearch.dateTo}`
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          let newsData = [];

          let trueNews = data.filter((item) => {
            return item.label === "True";
          });
          let falseNews = data.filter((item) => {
            return item.label === "False";
          });

          newsData = {
            trueNewsLabel: trueNews,
            falseNewsLabel: falseNews,
          };

          sessionStorage.setItem("userSearch", JSON.stringify(newsData));
          return setSearchNews(newsData);
        });
    } else {
      setSearchNews(JSON.parse(sessionStorage.getItem("userSearch")));
    }
  }

  useEffect(() => {
    {
      !searchNews && Search();
    }
  }, []);

  function anims() {
    const btnTrue = document.getElementById("true-news-btn");
    const btnFake = document.getElementById("fake-news-btn");
    const fakeCont = document.querySelector(".fake-cont");
    const trueCont = document.querySelector(".true-cont");
    const typeNews = document.getElementById("news-type-title");

    btnTrue.addEventListener("click", () => {
      btnFake.style =
        "background-color: #fff; color: #0f82da; pointer-events: all;";
      btnTrue.style =
        "background-color: #0f82da; color: #fff; pointer-events: none;";
      fakeCont.style.display = "none";
      trueCont.style.display = "flex";
      btnTrue.style.pointerEvents = "none";
      btnFake.style.pointerEvents = "all";
      typeNews.textContent = "Достоверные новости";
    });

    btnFake.addEventListener("click", () => {
      btnFake.style =
        "background-color: #0f82da; color: #fff; pointer-events: none;";
      btnTrue.style =
        "background-color: #fff; color: #0f82da; pointer-events: all;";
      trueCont.style.display = "none";
      fakeCont.style.display = "flex";
      btnTrue.style.pointerEvents = "all";
      btnFake.style.pointerEvents = "none";
      typeNews.textContent = "Стоит перепроверить";
    });
  }

  useEffect(() => {
    {
      searchNews && anims();
    }
  });

  return (
    <div>
      <SearchSect />
      <div className="content">
        {searchNews && (
          <button
            className="button-back"
            onClick={() => history("/")}
            id="backBtnSearch"
            style={{ display: "block" }}
          >
            Назад
          </button>
        )}
        {!searchNews && loaderSearch()}
        {searchNews && (
          <div>
            <div className="news-type-cont">
              <h2 className="h2-title" id="news-type-title">
                Достоверные новости
              </h2>
              <div className="fake-true-btn-cont">
                <button className="fake-true-btn" id="true-news-btn">
                  Достоверные новости
                </button>
                <button className="fake-true-btn" id="fake-news-btn">
                  Стоит перепроверить
                </button>
              </div>
            </div>
            <div className="search-response-cont true-cont">
              {searchNews["trueNewsLabel"].map((item) => (
                <div key={item.num} className="card-cont">
                  <img src={item.img} />
                  <div className="card-content">
                    <h2 className="main-screen-title">{item.title}</h2>
                    <span className="line-btn-time">
                      <p>{item.time}</p>

                      <Link
                        className="btn-style"
                        to="/read"
                        state={{ data: item }}
                      >
                        Читать
                      </Link>
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="search-response-cont fake-cont">
              {searchNews["falseNewsLabel"].map((item) => (
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
        )}
      </div>
    </div>
  );
};
