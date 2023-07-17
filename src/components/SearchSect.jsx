import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const SearchSect = () => {
  const navigate = useNavigate();

  function GetUserFormSearch() {
    const dateFrom = document.getElementById("dateFrom").value;
    const dateTo = document.getElementById("dateTo").value;
    const text = document.querySelector(".search").value;
    if (text === "") {
      return alert("Введите ваш запрос");
    }

    const userData = {
      value: document.querySelector(".form_radio_btn>input:checked").value,
      text: text,
      dateFrom: dateFrom != "" ? dateFrom : "None",
      dateTo: dateTo != "" ? dateTo : "None",
    };

    return navigate("/wait", {
      state: { query: userData },
    });
  }

  useEffect(() => {
    let offsetA = 0;
    // Слайдер
    document.addEventListener("click", function (event) {
      const sliderBtnNext = document.querySelector(".slider-next");
      const sliderBtnPrev = document.querySelector(".slider-prev");
      const sliderLine = document.querySelector(".slider-line");
      if (event.target.matches(".slider-next")) {
        offsetA = offsetA + 900;
        sliderLine.style.left = -offsetA + "px";

        sliderBtnNext.setAttribute("disabled", true);
        sliderBtnPrev.removeAttribute("disabled");
        sliderBtnNext.style.opacity = "0.0";
        sliderBtnPrev.style.opacity = "1.0";
      }
      if (event.target.matches(".slider-prev")) {
        offsetA = offsetA - 900;
        sliderLine.style.left = -offsetA + "px";

        sliderBtnNext.removeAttribute("disabled");
        sliderBtnPrev.setAttribute("disabled", true);
        sliderBtnPrev.style.opacity = "0.0";
        sliderBtnNext.style.opacity = "1.0";
      }
    });
    // Фильтры
    const filterBtn = document.getElementById("filter-btn");
    const filterOpen = document.querySelector(".filters-cont");
    let clicked = false;

    filterBtn.addEventListener("click", () => {
      if (clicked) {
        filterOpen.style.pointerEvents = "none";
        filterOpen.style.height = "0px";
        filterOpen.style.opacity = "0";
        clicked = false;
      } else {
        filterOpen.style.pointerEvents = "all";
        filterOpen.style.height = "300px";
        filterOpen.style.opacity = "1.0";
        clicked = true;
      }
    });

    // Лупа
    let input = document.querySelector(".search");
    input.onfocus = function () {
      document.querySelector(".search-icon").classList.add("search-focus");
    };
    input.onblur = function () {
      document.querySelector(".search-icon").classList.remove("search-focus");
    };
  });

  return (
    <div>
      <h3 className="test">Поисковая система надежных новостей</h3>
      <div className="search-sect">
        <button id="filter-btn" className="filter-button">
          <img src="/images/filter.png" alt="" />
        </button>
        <div className="search-bar">
          <img className="search-icon" src="/images/search-icon.png" alt="" />
          <input
            className="search"
            type="search"
            placeholder="Что вы хотите узнать"
          />
          <button onClick={GetUserFormSearch} className="search-btn">
            Поиск
          </button>
        </div>
      </div>

      {/* Фильтры */}
      <div className="filters-cont">
        <div className="size-filt-cont">
          <h3>Количество статей</h3>
          <div className="size-filter">
            <div className="form_radio_btn">
              <input
                id="radio-1"
                type="radio"
                name="limit-size"
                value="20"
                defaultChecked={true}
              />
              <label htmlFor="radio-1">20</label>
            </div>

            <div className="form_radio_btn">
              <input id="radio-2" type="radio" name="limit-size" value="40" />
              <label htmlFor="radio-2">40</label>
            </div>

            <div className="form_radio_btn">
              <input id="radio-3" type="radio" name="limit-size" value="60" />
              <label htmlFor="radio-3">60</label>
            </div>

            <div className="form_radio_btn">
              <input id="radio-4" type="radio" name="limit-size" value="80" />
              <label htmlFor="radio-4">80</label>
            </div>

            <div className="form_radio_btn">
              <input id="radio-5" type="radio" name="limit-size" value="100" />
              <label htmlFor="radio-5">100</label>
            </div>
          </div>
        </div>
        <div className="date-filt-cont">
          <h3>Фильтр по дате</h3>
          <div className="date-input-cont">
            <div className="date-cont">
              <h4>С:</h4>
              <input className="date-input" id="dateFrom" type="date" />
            </div>
            <div className="date-cont">
              <h4>До:</h4>
              <input className="date-input" id="dateTo" type="date" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
