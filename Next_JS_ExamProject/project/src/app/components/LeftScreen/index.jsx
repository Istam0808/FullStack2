"use client";
import Image from 'next/image';
import Link from 'next/link';
import './style.scss';
import AvatarImg from '../../../assets/images/avatar.jpeg';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import ContactModal from '../ContactModal';

function Left() {
    const router = useRouter();
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);

    return (
        <div className="profile-container">
            <div className="profile-header">
                <div className="profile-image">
                    <Image
                        src={AvatarImg}
                        alt="Profile"
                        width={120}
                        height={120}
                    />
                </div>
                <h1 className="profile-name">Дмитрий Валак</h1>
                <p className="profile-title">блог front-end разработчика</p>
                
                <div className="social-links">
                    <Link href="https://instagram.com" className="social-icon">
                        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png' alt="Instagram" width={24} height={24}/>
                    </Link>
                    <Link href="https://vk.com" className="social-icon">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/VK_Compact_Logo_%282021-present%29.svg/1200px-VK_Compact_Logo_%282021-present%29.svg.png" alt="VK" width={24} height={24} />
                    </Link>
                    <Link href="https://pinterest.com" className="social-icon">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Pinterest.svg/1200px-Pinterest.svg.png" alt="Pinterest" width={24} height={24} />
                    </Link>
                </div>

                <p className="profile-description">
                    Front-end разработчик. Практик верстки сайтов. Созданием сайтов занимаюсь с 
                    2012 года. Работал в нескольких ИТ компаниях и наработал более 10 000 часов в 
                    создании сайтов различной сложности.
                </p>

                <div className="profile-buttons">
                    <button className="btn btn-primary" onClick={() => router.push('/mywork')}>Мои работы</button>
                    <button 
                        className="btn btn-secondary" 
                        onClick={() => setIsContactModalOpen(true)}
                    >
                        Написать мне
                    </button>
                </div>
            </div>

            <ContactModal 
                isOpen={isContactModalOpen} 
                onClose={() => setIsContactModalOpen(false)} 
            />
        </div>
    );
}

export default Left;