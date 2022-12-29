import React from 'react';
import api from '../utils/api';
import Card from './Card';

function Main(props) {
  const [userName, setUserName] = React.useState('GameCattt');
  const [userDescription, setUserDescription] = React.useState(
    'Королева паддингов, расхитительница попапов, укротительница гридов'
  );
  const [userAvatar, setUserAvatar] = React.useState('#');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getProfile(), api.getInitialCards()])
      .then(([userData, cards]) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
        setCards(cards);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar">
          <img className="profile__avatar-img" src={userAvatar} alt="Жак-Ив Кусто" />
          <button
            className="profile__avatar-edit"
            type="button"
            aria-label="Изменить фото"
            onClick={props.onEditAvatar}
          ></button>
        </div>
        <div className="profile__info">
          <div className="profile__heading">
            <h1 className="profile__nickname">{userName}</h1>
            <button
              className="profile__btn-edit"
              type="button"
              aria-label="Редактировать профиль"
              onClick={props.onEditProfile}
            ></button>
          </div>
          <p className="profile__description">{userDescription}</p>
        </div>
        <button
          className="profile__btn-add"
          type="button"
          aria-label="Добавить фото"
          onClick={props.onAddPlace}
        ></button>
      </section>
      <section className="showcase">
        <ul className="showcase__list">
          {cards.map((card, i) => (
            <Card card={card} key={i} onCardClick={props.onCardClick}></Card>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
