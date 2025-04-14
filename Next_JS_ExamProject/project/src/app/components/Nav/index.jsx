'use client';
import { useState, useEffect } from 'react'; // Add useEffect import
import Link from 'next/link';
import styles from './style.scss';
import { useRouter } from 'next/navigation';
import RegisterModal from '../RegisterModal';

function Nav() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
    const router = useRouter();

    // Add handleProfileClick function
    const handleProfileClick = () => {
        const user = localStorage.getItem('user');
        if (user) {
            router.push('/profile');
        } else {
            setIsRegisterModalOpen(true);
        }
        setIsMobileMenuOpen(false);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        if (isDropdownOpen) setIsDropdownOpen(false);
        document.body.style.overflow = !isMobileMenuOpen ? 'hidden' : 'auto';
    };

    const toggleDropdown = (e) => {
        e.stopPropagation(); // Prevent event bubbling
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleTouchStart = (e) => {
        // Only close if touching outside nav-items and burger-menu
        if (!e.target.closest('.nav-items') && !e.target.closest('.burger-menu')) {
            setIsDropdownOpen(false);
            setIsMobileMenuOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('touchstart', handleTouchStart);
        return () => {
            document.removeEventListener('touchstart', handleTouchStart);
        };
    }, []);

    return (
        <>
            <nav className={`navbar ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
                <div className="nav-container">
                    <div className="burger-menu" onClick={toggleMobileMenu}>
                        <span className={`burger-line ${isMobileMenuOpen ? 'active' : ''}`}></span>
                    </div>

                    <div className={`nav-items ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
                        <Link href="/" className="nav-link">ГЛАВНАЯ</Link>
                        
                        <div className="nav-dropdown">
                            <button 
                                className="nav-link dropdown-toggle"
                                onClick={toggleDropdown}
                                onTouchEnd={(e) => e.preventDefault()}
                            >
                                СТАТЬИ
                            </button>
                            <div className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
                                <button 
                                    className="dropdown-item" 
                                    onClick={() => {
                                        router.push('/createsite');
                                        setIsMobileMenuOpen(false);
                                        setIsDropdownOpen(false);
                                    }}
                                > 
                                    Создание сайтов
                                </button>
                                <button className="dropdown-item">
                                    Интернет-маркетинг
                                </button>
                                <button className="dropdown-item">
                                    Продвижение видео
                                </button>
                            </div>
                        </div>

                        <Link href="/about" className="nav-link">ОБО МНЕ</Link>
                        <Link href="/advertising" className="nav-link">РЕКЛАМА</Link>
                        <button onClick={handleProfileClick} className="nav-link">ПРОФИЛЬ</button>
                    </div>
                </div>
            </nav>
            <RegisterModal 
                isOpen={isRegisterModalOpen} 
                onClose={() => setIsRegisterModalOpen(false)}
            />
        </>
    );
}

export default Nav;