'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import './style.scss';

export default function Profile() {
    const [userData, setUserData] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const user = localStorage.getItem('user');
        if (!user) {
            router.push('/');
        } else {
            setUserData(JSON.parse(user));
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('user');
        router.push('/');
    };

    if (!userData) return null;

    return (
        <div className="profile-page">
            <div className="profile-card">
                {userData.avatar && (
                    <img 
                        src={userData.avatar} 
                        alt="Profile" 
                        className="profile-avatar"
                    />
                )}
                <h1>{userData.name}</h1>
                <p className="profile-email">{userData.email}</p>
                <button className="logout-button" onClick={handleLogout}>
                    Выйти
                </button>
            </div>
        </div>
    );
}