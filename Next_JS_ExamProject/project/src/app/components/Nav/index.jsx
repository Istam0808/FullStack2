'use client';
import { useState } from 'react';
import Link from 'next/link';
import styles from './style.scss';

function Nav() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        document.body.style.overflow = !isMobileMenuOpen ? 'hidden' : 'auto';
    };

    return (
        <nav className={`navbar ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
            <div className="nav-container">
                <div className="burger-menu" onClick={toggleMobileMenu}>
                    <span className={`burger-line ${isMobileMenuOpen ? 'active' : ''}`}></span>
                </div>

                <div className={`nav-items ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
                    <Link href="/" className="nav-link">ГЛАВНАЯ</Link>
                    
                    <div 
                        className="nav-dropdown"
                        onMouseEnter={() => setIsDropdownOpen(true)}
                        onMouseLeave={() => setIsDropdownOpen(false)}
                    >
                        <button className="nav-link dropdown-toggle">
                            СТАТЬИ
                        </button>
                        <div className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
                            <Link href="/articles/websites" className="dropdown-item">
                                Создание сайтов
                            </Link>
                            <Link href="/articles/marketing" className="dropdown-item">
                                Интернет-маркетинг
                            </Link>
                            <Link href="/articles/video" className="dropdown-item">
                                Продвижение видео
                            </Link>
                        </div>
                    </div>

                    <Link href="/about" className="nav-link">ОБО МНЕ</Link>
                    <Link href="/advertising" className="nav-link">РЕКЛАМА</Link>
                    <Link href="/profile" className="nav-link">ПРОФИЛЬ</Link>
                </div>

                <div className="search-container">
                    <input 
                        type="text" 
                        placeholder="Поиск по блогу"
                        className="search-input"
                    />
                </div>
            </div>
        </nav>
    );
}

export default Nav;