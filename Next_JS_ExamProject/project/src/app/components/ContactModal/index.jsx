'use client';
import { useState } from 'react';
import './style.scss';

function ContactModal({ isOpen, onClose }) {
    const [isClosing, setIsClosing] = useState(false);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            setIsClosing(false);
            onClose();
        }, 300);
    };

    if (!isOpen) return null;

    return (
        <div className={`modal-overlay ${isClosing ? 'closing' : ''}`} onClick={handleClose}>
            <div
                className={`modal-content ${isClosing ? 'closing' : ''}`}
                onClick={e => e.stopPropagation()}
            >
                <button className="close-button" onClick={handleClose}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                </button>

                <div className="contact-form">
                    <h2>Написать мне</h2>
                    <input type="text" placeholder="Ваше имя" className="form-input" />
                    <input type="email" placeholder="Ваш e-mail" className="form-input" />
                    <input type="text" placeholder="Тема" className="form-input" />
                    <button className="submit-button">Отправить</button>

                    <div className="contact-info">
                        <span>e-mail: <a href="mailto:info@mywebsite.ru">info@mywebsite.ru</a></span>
                        <span>тел: <a href="tel:+943-232-856-22">+943-232-856-22</a></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactModal;