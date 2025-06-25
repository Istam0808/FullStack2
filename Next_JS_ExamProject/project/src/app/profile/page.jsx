'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { auth } from '@/firebase/config';
import { signOut } from 'firebase/auth';
import './style.scss';

export default function Profile() {
    const [user, setUser] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                setUser(user);
            } else {
                router.push('/');
            }
        });

        return () => unsubscribe();
    }, []);

    const handleLogout = async () => {
        try {
            await signOut(auth);
            router.push('/');
        } catch (error) {
            console.error('Ошибка при выходе:', error);
        }
    };

    if (!user) return null;

    return (
        <div className="profile-page">
            <div className="profile-card">
                <h1>{user.email}</h1>
                <p className="profile-email">ID: {user.uid}</p>
                <button className="logout-button" onClick={handleLogout}>
                    Выйти
                </button>
            </div>
        </div>
    );
}