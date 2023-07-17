import { useEffect } from "react";
import { FeedBack } from "./FeedBack";
import { PolitConf } from "./PoliticConf";
export const Footer = () => {
  useEffect(() => {
    const polConfBtn = document.getElementById("pol-conf");
    const backBtnpolConf = document.getElementById("backBtnPolit");
    const backBtnFeedback = document.getElementById("backBtnFeedback");
    const popUp = document.querySelector(".conf-popup");
    const feedBackBtn = document.getElementById("feedback-btn");
    const feedBack = document.querySelector(".feedback-popup");

    feedBackBtn.addEventListener("click", () => {
      feedBack.style.display = "block";
    });

    polConfBtn.addEventListener("click", () => {
      popUp.style.display = "flex";
    });

    backBtnpolConf.addEventListener("click", () => {
      popUp.style.display = "none";
    });

    backBtnFeedback.addEventListener("click", () => {
      feedBack.style.display = "none";
    });
  });
  return (
    <footer>
      <div className="footer-cont">
        <FeedBack />
        <PolitConf />
        <a href="../FAQ.html" target="_blank">
          <h2>Часто задаваемые вопросы</h2>
        </a>
        <button id="feedback-btn">
          <h2>Обратная связь</h2>
        </button>
        <button id="pol-conf">
          <h2>Политика конфиденциальности</h2>
        </button>
      </div>
      <h6>2022-2023 © «НеФейкИнфо.рф»</h6>
      <script src="smart-cookies/js/smart-cookies.js"></script>
      <script src="script/footer.js"></script>
    </footer>
  );
};
