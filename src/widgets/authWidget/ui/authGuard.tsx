'use client';
import { CreateUserForm } from '@/features/user';
import { useAuth } from '../lib/useAuth';
import { ReactNode } from 'react';

type Props = {
    children: ReactNode;
};
export const AuthGuard = ({ children }: Props) => {
    const { isAuth, handleAuth } = useAuth();

    return (
        <>
            {isAuth ? { children } : <CreateUserForm onCreateUser={handleAuth} />}

            {/*<SubscriberList userActions={getUserActions} />*/}
        </>
    );
};
