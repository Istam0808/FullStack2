'use client';
import Image from 'next/image';
import './style.scss';
import Img6 from '../../assets/images/img6.jpeg';
import Img7 from '../../assets/images/img7.jpeg';

export default function PortfolioPage() {
  return (
    <div className="portfolio">
      <h1 className="portfolio__title">Мои работы</h1>
      <div className="portfolio__list">

        {/* Card 1 */}
        <div className="portfolio__card">
          <div className="portfolio__image-container">
            <Image 
              src={Img6} 
              alt="altermone.com" 
              fill 
              style={{ objectFit: 'cover' }} 
            />
          </div>
          <div className="portfolio__content">
            <h2 className="portfolio__site">altermone.com</h2>
            <p className="portfolio__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit.
              Sagittis porttitor orci auctor in at tincidunt arcu egestas.
            </p>
            <div className="portfolio__tags">
              <span className="portfolio__tag">дизайн</span>
              <span className="portfolio__tag">создание сайта</span>
              <span className="portfolio__tag">SMM</span>
            </div>
            <a href="#" className="portfolio__button">Перейти на сайт</a>
          </div>
        </div>

        {/* Card 2 */}
        <div className="portfolio__card">
          <div className="portfolio__image-container">
            <Image 
              src={Img7} 
              alt="codedoco.com" 
              fill 
              style={{ objectFit: 'cover' }} 
            />
          </div>
          <div className="portfolio__content">
            <h2 className="portfolio__site">codedoco.com</h2>
            <p className="portfolio__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit.
              Sagittis porttitor orci auctor in at tincidunt arou egestas.
            </p>
            <div className="portfolio__tags">
              <span className="portfolio__tag">дизайн</span>
              <span className="portfolio__tag">создание сайта</span>
              <span className="portfolio__tag">SMM</span>
            </div>
            <a href="#" className="portfolio__button">Перейти на сайт</a>
          </div>
        </div>

      </div>
    </div>
  );
}
