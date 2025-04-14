'use client';
import { useState, useEffect } from 'react';
import './style.scss';

function ShareModal({ isOpen, onClose }) {
    const [isClosing, setIsClosing] = useState(false);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            setIsClosing(false);
            onClose();
        }, 300); // Match animation duration
    };

    if (!isOpen) return null;

    return (
        <div className={`modal-overlay ${isClosing ? 'closing' : ''}`} onClick={handleClose}>
            <div 
                className={`modal-content ${isClosing ? 'closing' : ''}`} 
                onClick={e => e.stopPropagation()}
            >
                <button className="close-button" onClick={onClose}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                </button>
                <div className="share-buttons">
                    <button className="share-button facebook">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127c-.82-.088-1.643-.13-2.467-.127-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"/>
                        </svg>
                    </button>
                    <button className="share-button twitter">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
                        </svg>
                    </button>
                    <button className="share-button vk">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17h-1.372c-.516 0-.672-.432-1.596-1.356-.804-.804-1.164-.912-1.356-.912-.276 0-.36.072-.36.432v1.236c0 .336-.108.516-1.008.516-1.488 0-3.132-.9-4.296-2.556-1.74-2.448-2.208-4.284-2.208-4.668 0-.204.072-.396.432-.396h1.368c.36 0 .504.168.648.564.708 2.028 1.896 3.804 2.388 3.804.18 0 .264-.084.264-.552v-2.136c-.048-1.02-.588-1.08-.588-1.44 0-.18.144-.36.384-.36h2.148c.288 0 .396.156.396.516v2.892c0 .312.132.42.216.42.18 0 .324-.108.66-.444 1.116-1.236 1.92-3.132 1.92-3.132.108-.24.288-.456.72-.456h1.368c.42 0 .516.216.42.516-.168.78-1.764 3.024-1.764 3.024-.144.24-.204.348 0 .612.144.204.612.612.924.984.636.708 1.128 1.308 1.272 1.716.144.456-.096.684-.516.684z"/>
                        </svg>
                    </button>
                    <button className="share-button copy">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <rect x="9" y="9" width="13" height="13" rx="2" ry="2" strokeWidth="2"/>
                            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" strokeWidth="2"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ShareModal;