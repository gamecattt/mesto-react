import React from 'react';
import api from '../utils/api';
import Card from './Card';
import { useState, useEffect } from 'react';

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
  const [userName, setUserName] = useState('GameCattt');
  const [userDescription, setUserDescription] = useState(
    'Королева паддингов, расхитительница попапов, укротительница гридов'
  );
  const [userAvatar, setUserAvatar] = useState('#');
  const [cards, setCards] = useState([]);

  useEffect(() => {
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
            onClick={onEditAvatar}
          ></button>
        </div>
        <div className="profile__info">
          <div className="profile__heading">
            <h1 className="profile__nickname">{userName}</h1>
            <button
              className="profile__btn-edit"
              type="button"
              aria-label="Редактировать профиль"
              onClick={onEditProfile}
            ></button>
          </div>
          <p className="profile__description">{userDescription}</p>
        </div>
        <button
          className="profile__btn-add"
          type="button"
          aria-label="Добавить фото"
          onClick={onAddPlace}
        ></button>
      </section>
      <section className="showcase">
        <ul className="showcase__list">
          {cards.map((card) => (
            <Card card={card} key={card._id} onCardClick={onCardClick}></Card>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
