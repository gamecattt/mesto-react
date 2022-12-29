function PopupWithForm(props) {
  return (
    <div
      className={`popup popup_${props.name} ${props.isOpen ? 'popup_opened' : ''}`}
      id={`${props.name}Popup`}
    >
      <div className="popup__container">
        <h3 className="popup__title">{props.title}</h3>
        <form className="popup-form" action="#" name={`${props.name}Form`} noValidate>
          {props.children}
        </form>
        <button
          className="popup__btn-close"
          type="button"
          aria-label="Закрыть"
          onClick={props.onClose}
        ></button>
      </div>
    </div>
  );
}

export default PopupWithForm;
