'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import './style.scss';

function RegisterModal({ isOpen, onClose }) {
    const [isClosing, setIsClosing] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        avatar: null
    });
    const router = useRouter();

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            setIsClosing(false);
            onClose();
            // Clear form data when modal closes
            setFormData({
                name: '',
                email: '',
                password: '',
                avatar: null
            });
        }, 300);
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData(prev => ({
                    ...prev,
                    avatar: reader.result
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('user', JSON.stringify(formData));
        handleClose(); // Close modal
        router.push('/profile');
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
                        <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                </button>

                <form onSubmit={handleSubmit} className="register-form">
                    <h2>Регистрация</h2>
                    
                    <div className="form-group">
                        <label htmlFor="avatar">Фото профиля</label>
                        <input 
                            type="file" 
                            id="avatar" 
                            accept="image/*"
                            onChange={handleImageChange}
                        />
                        {formData.avatar && (
                            <img 
                                src={formData.avatar} 
                                alt="Preview" 
                                className="avatar-preview"
                            />
                        )}
                    </div>

                    <input
                        type="text"
                        placeholder="Ваше имя"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                        className="form-input"
                    />

                    <input
                        type="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                        className="form-input"
                    />

                    <input
                        type="password"
                        placeholder="Пароль"
                        value={formData.password}
                        onChange={(e) => setFormData({...formData, password: e.target.value})}
                        required
                        className="form-input"
                    />

                    <button type="submit" className="submit-button">
                        Зарегистрироваться
                    </button>
                </form>
            </div>
        </div>
    );
}

export default RegisterModal;