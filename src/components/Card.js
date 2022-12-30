function Card({ card, onCardClick }) {
  function handleClick() {
    onCardClick(card);
  }

  return (
    <li className="post">
      <img className="post__img" src={card.link} alt={card.name} onClick={handleClick} />
      <button className="post__btn-trash" type="button" aria-label="Удалить"></button>
      <div className="post__bar">
        <h2 className="post__caption">{card.name}</h2>
        <div className="post__likes">
          <button className="post__btn-like" type="button" aria-label="Поставить лайк"></button>
          <span className="post__total-likes">{card.likes.length}</span>
        </div>
      </div>
    </li>
  );
}

export default Card;
