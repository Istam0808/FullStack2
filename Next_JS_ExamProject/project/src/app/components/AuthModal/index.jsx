'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { auth } from '@/firebase/config';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import './style.scss';

function AuthModal({ isOpen, onClose, mode = 'login' }) {
    const [isClosing, setIsClosing] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [error, setError] = useState('');
    const router = useRouter();

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            setIsClosing(false);
            onClose();
            setFormData({
                email: '',
                password: '',
            });
            setError('');
        }, 300);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        
        try {
            if (mode === 'register') {
                await createUserWithEmailAndPassword(auth, formData.email, formData.password);
            } else {
                await signInWithEmailAndPassword(auth, formData.email, formData.password);
            }
            handleClose();
            router.push('/profile');
        } catch (error) {
            setError(error.message);
        }
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

                <form onSubmit={handleSubmit} className="auth-form">
                    <h2>{mode === 'login' ? 'Вход' : 'Регистрация'}</h2>
                    
                    {error && <div className="error-message">{error}</div>}

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
                        {mode === 'login' ? 'Войти' : 'Зарегистрироваться'}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default AuthModal;