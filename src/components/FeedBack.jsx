export const FeedBack = () => {
  return (
    <div className="feedback-popup">
      <div className="feedback">
        <button className="btn-style button-back" id="backBtnFeedback">
          Назад
        </button>
        <p>Обратная связь</p>
        <input type="email" className="name-input" placeholder="Эл. почта" />
        <br />
        <input type="name" className="name-input" placeholder="Имя" />
        <br />
        <br />
        <textarea placeholder="Сообщение" cols="30" rows="10"></textarea>
        <button
          onClick={() => alert("Ваше сообщение отправлено")}
          className="submit-btn"
        >
          Отправить
        </button>
      </div>
    </div>
  );
};
