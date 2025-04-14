import Image from "next/image";
import Img1 from '../../../assets/images/img1.jpeg';
import Img2 from '../../../assets/images/img2.jpeg';
import Img3 from '../../../assets/images/img3.jpeg';
import Img4 from '../../../assets/images/img4.jpeg';
import Post1 from '../../../assets/images/1post.jpeg';
import Post2 from '../../../assets/images/2post.jpeg';
import Post3 from '../../../assets/images/3post.jpeg';
import './style.scss';

function Main() {
    return (
        <>
            <main className="content">
                <div className="posts-grid">
                    <div className="post-item">
                        <Image
                            src={Img1}
                            alt="Nature"
                            width={280}
                            height={200}
                        />
                        <div className="post-date">21.09.2020</div>
                        <h3>От природы</h3>
                    </div>

                    <div className="post-item">
                        <Image
                            src={Img2}
                            alt="Project"
                            width={280}
                            height={200}
                        />
                        <div className="post-date">15.09.2020</div>
                        <h3>Заканчиваю сложный проект</h3>
                    </div>

                    <div className="post-item">
                        <Image
                            src={Img3}
                            alt="Apartment"
                            width={280}
                            height={200}
                        />
                        <div className="post-date">11.09.2020</div>
                        <h3>Переезжаю в новую квартиру</h3>
                    </div>

                    <div className="post-item">
                        <Image
                            src={Img4}
                            alt="Autumn"
                            width={280}
                            height={200}
                        />
                        <div className="post-date">28.08.2020</div>
                        <h3>Осень пришла!</h3>
                    </div>
                </div>

                <div className="comment-section">
                    <div className="comment-input">
                        <input
                            type="text"
                            placeholder="Напишите что-нибудь"
                            className="text-input"
                        />

                        <div className="input-actions">
                            <button className="send-btn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-send" viewBox="0 0 16 16" color="white">
                                    <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className="comments">
                        <div className="comment">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit.</p>
                            <div className="comment-date">21.06.2020</div>
                        </div>

                        <div className="post">
                            <Image
                                src={Post1}
                                alt="Code"
                                width={560}
                                height={300}
                            />
                            <div className="post-text">
                                <h2>Как писать код быстро и безболезненно?</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit.</p>
                            </div>
                        </div>

                        <div className="post">
                            <Image
                                src={Post2}
                                alt="Code"
                                width={560}
                                height={300}
                            />
                            <div className="post-text">
                                <h2>Купил новый ноутбук за 150 000 руб</h2>
                            </div>
                        </div>

                        <div className="post">
                            <Image
                                src={Post3}
                                alt="Code"
                                width={560}
                                height={300}
                            />
                            <div className="post-text">
                                <h2>Как я сходил на FrontEnd Conf 2021</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <div className="pagination">
                <button className="page-item ">&lt;</button>
                <button className="page-item">1</button>
                <button className="page-item active">2</button>
                <button className="page-item">3</button>
                <button className="page-item">&gt;</button>
            </div>
        </>
    );
}

export default Main;