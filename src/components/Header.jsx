export const Header = () => {
  return (
    <header>
      <img
        id="specialButton"
        style={{
          cursor: "pointer",
          position: "absolute",
          margintop: -40 + "px",
        }}
        src="https://lidrekon.ru/images/special.png"
        alt="ВЕРСИЯ ДЛЯ СЛАБОВИДЯЩИХ"
        title="ВЕРСИЯ ДЛЯ СЛАБОВИДЯЩИХ"
      />
      <img className="logo" src="/images/logo2.png" alt="" />
      <div className="d-flex justify-content-around">
        <a href="blog/main.html">
          <button className="blog-link">Блог</button>
        </a>
      </div>
    </header>
  );
};
