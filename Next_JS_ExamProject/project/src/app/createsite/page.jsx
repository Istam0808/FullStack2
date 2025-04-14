'use client';
import "./style.scss"
import Image from "next/image";
import Img5 from "../../assets/images/img5.jpeg"
import ShareModal from "../components/ShareModal";
import { useState } from "react";

function CreateSite() {
    const [isShareModalOpen, setIsShareModalOpen] = useState(false);

    return (
        <div className="article-container">
            <div className="article-header">
                <h1>Как создавать сайты легко</h1>
                <div className="article-meta">
                    <span className="date">21.06.2020</span>
                    <span className="category">создание сайтов</span>
                </div>
                <button className="share-button" onClick={() => setIsShareModalOpen(true)}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 8C19.6569 8 21 6.65685 21 5C21 3.34315 19.6569 2 18 2C16.3431 2 15 3.34315 15 5C15 6.65685 16.3431 8 18 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M6 15C7.65685 15 9 13.6569 9 12C9 10.3431 7.65685 9 6 9C4.34315 9 3 10.3431 3 12C3 13.6569 4.34315 15 6 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M18 22C19.6569 22 21 20.6569 21 19C21 17.3431 19.6569 16 18 16C16.3431 16 15 17.3431 15 19C15 20.6569 16.3431 22 18 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M8.59 13.51L15.42 17.49" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M15.41 6.51L8.59 10.49" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
            </div>

            <div className="article-content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.</p>
                
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.</p>

                <div className="code-block">
                    <Image 
                        src={Img5} 
                        alt="code-block"
                        width={800}
                        height={400}
                        layout="responsive"
                    />
                </div>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.</p>

                <div className="related-articles">
                    <h2>Интересно почитать</h2>
                    <div className="articles-grid">
                        <div className="article-card">
                            <span className="date">21.06.2020</span>
                            <h3>Как я сходил на FrontEnd Conf 2021</h3>
                        </div>
                        <div className="article-card">
                            <span className="date">21.06.2020</span>
                            <h3>Купил новый ноутбук за 150 000 руб</h3>
                        </div>
                    </div>
                </div>

                <div className="comments-section">
                    <h2>Обсуждение</h2>
                    <div className="comment-form">
                        <textarea placeholder="Текст комментария" className="comment-input"></textarea>
                        <button className="submit-button">Отправить</button>
                    </div>
                    
                    <div className="comments-list">
                        <div className="comment">
                            <div className="comment-header">
                                <span className="author">Дмитрий Валак</span>
                                <span className="time">1 неделю назад</span>
                            </div>
                            <p>Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id.</p>
                            <button className="reply-button">ответить</button>
                        </div>

                        <div className="comment">
                            <div className="comment-header">
                                <span className="author">Джонни</span>
                                <span className="time">1 неделю назад</span>
                            </div>
                            <p>Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas.</p>
                            <button className="reply-button">ответить</button>
                        </div>
                    </div>
                </div>
            </div>
            <ShareModal 
                isOpen={isShareModalOpen} 
                onClose={() => setIsShareModalOpen(false)} 
            />
        </div>
    );
}

export default CreateSite;