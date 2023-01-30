import {useState} from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup(props) {
    const [name, setName] = useState('');
    const [link, setLink] = useState('');

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleLinkChange(e) {
        setLink(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        props.onPlaceAdd({
            name,
            link,
        });
    }

    return (
        <PopupWithForm
            name="newPost"
            title="Новое место"
            buttonText="Создать"
            isOpen={props.isOpen}
            onClose={props.onClose}
            onSubmit={handleSubmit}
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
                value={name}
                onChange={handleNameChange}
            />
            <span className="popup-form__error-msg name-input-error"></span>
            <input
                className="popup-form__input"
                name="link"
                type="url"
                placeholder="Ссылка на картинку"
                required
                id="link-input"
                value={link}
                onChange={handleLinkChange}
            />
            <span className="popup-form__error-msg link-input-error"></span>
        </PopupWithForm>
    );
}

export default AddPlacePopup;
