function ImagePopup(props) {
  return (
    <div className={`popup popup_for_img ${props.card ? 'popup_opened' : ''}`} id="imagePopup">
      <div className="popup-img">
        <button
          className="popup__btn-close"
          type="button"
          aria-label="Закрыть"
          onClick={props.onClose}
        ></button>
        <img className="popup-img__image" src={props.card?.link} alt="" />
        <p className="popup-img__caption"></p>
      </div>
    </div>
  );
}

export default ImagePopup;
