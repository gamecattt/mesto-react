import error from '../images/icon-error.svg';
import success from '../images/icon-success.svg';

function InfoTooltip({ message, onClose }) {
    return (
        <div className={`popup info-tooltip ${message.text ? 'popup_opened' : ''}`}>
            <div className="popup__container">
                <button
                    className="popup__btn-close"
                    type="button"
                    aria-label="Закрыть"
                    onClick={onClose}
                ></button>
                <img className="info-tooltip__icon" src={message.isSuccess ? success : error} alt="" />
                <h3 className="popup__title">{message.text}</h3>
            </div>
        </div>
    );
}

export default InfoTooltip;
