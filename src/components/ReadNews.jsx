import { useLocation, useNavigate } from "react-router-dom";

export const ReadNews = () => {
  const { state } = useLocation();
  const newsData = state.data;

  let history = useNavigate();

  return (
    <div>
      {
        <button
          style={{ width: 80 + "px", marginLeft: 220 + "px" }}
          className="btn-style"
          onClick={() => history(-1)}
        >
          Назад
        </button>
      }
      <div className="content-container">
        <h1 className="content-title">{newsData.title}</h1>
        <img className="article-img" src={newsData.img} />
        <div className="content-main">{newsData.text}</div>
      </div>
    </div>
  );
};
