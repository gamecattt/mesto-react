function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <li className="post">
      <img
        className="post__img"
        src={props.card.link}
        alt={props.card.name}
        onClick={handleClick}
      />
      <button className="post__btn-trash" type="button" aria-label="Удалить"></button>
      <div className="post__bar">
        <h2 className="post__caption">{props.card.name}</h2>
        <div className="post__likes">
          <button className="post__btn-like" type="button" aria-label="Поставить лайк"></button>
          <span className="post__total-likes">{props.card.likes.length}</span>
        </div>
      </div>
    </li>
  );
}

export default Card;
