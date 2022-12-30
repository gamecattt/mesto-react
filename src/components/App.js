import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import { useState } from 'react';
import ImagePopup from './ImagePopup';
import PopupWithForm from './PopupWithForm';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <>
      <div className="page__wrapper">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
        <Footer />
      </div>
      <PopupWithForm
        name="profile"
        title="Редактировать профиль"
        buttonText="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          className="popup-form__input"
          name="name"
          type="text"
          placeholder="Имя"
          required
          minLength="2"
          maxLength="40"
          id="nickname-input"
        />
        <span className="popup-form__error-msg nickname-input-error"></span>
        <input
          className="popup-form__input"
          name="about"
          type="text"
          placeholder="О себе"
          required
          minLength="2"
          maxLength="200"
          id="about-input"
        />
        <span className="popup-form__error-msg about-input-error"></span>
      </PopupWithForm>
      <PopupWithForm
        name="newPost"
        title="Новое место"
        buttonText="Создать"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          className="popup-form__input"
          name="name"
          type="text"
          placeholder="Название"
          required
          minLength="2"
          maxLength="30"
          id="name-input"
        />
        <span className="popup-form__error-msg name-input-error"></span>
        <input
          className="popup-form__input"
          name="link"
          type="url"
          placeholder="Ссылка на картинку"
          required
          id="link-input"
        />
        <span className="popup-form__error-msg link-input-error"></span>
      </PopupWithForm>
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      <PopupWithForm
        name="avatar"
        title="Обновить аватар"
        buttonText="Сохранить"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <input
          className="popup-form__input"
          name="avatar"
          type="url"
          placeholder="Ссылка на картинку"
          required
          id="avatar-input"
        />
        <span className="popup-form__error-msg avatar-input-error"></span>
      </PopupWithForm>
      <PopupWithForm name="confirm" title="Вы уверены?" buttonText="Да"></PopupWithForm>
    </>
  );
}

export default App;
