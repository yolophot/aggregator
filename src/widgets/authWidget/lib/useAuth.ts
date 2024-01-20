import { useSession } from '@/entities/session';
import { useUser, UserInput } from '@/features/user';
import { useEffect } from 'react';

export const useAuth = () => {
    const { loadSession, createSession, currentSession } = useSession();
    const addUser = useUser((s) => s.addUser);

    const isAuth = !!currentSession;

    useEffect(() => {
        loadSession();
    }, []);

    const handleAuth = async (data: UserInput) => {
        if (isAuth) {
            createSession({ avatarId: '1', name: data.firstName, userId: '1' }); // TODO
            addUser(data);
        } else {
        }
    };
    const handleLogOut = () => {
        // TODO
    };

    return {
        isAuth,
        handleAuth,
        handleLogOut,
    };
};
