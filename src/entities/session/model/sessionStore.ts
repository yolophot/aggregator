import { create } from 'zustand';
import { Session } from './types';
import { sessionRepository } from './sessionRepository';
import { nanoid } from 'nanoid';
type CreateSessionData = {
    name: string;
    avatarId: string;
    userId: string;
};

type SessionStore = {
    currentSession?: Session;
    loadSession: () => Promise<void>;
    createSession: (value: CreateSessionData) => void;
    removeSession: () => void;
};

export const useSession = create<SessionStore>((set) => ({
    currentSession: undefined,
    loadSession: async () => {
        const session = await sessionRepository.getSession();
        set({ currentSession: session });
    },
    createSession: async (data) => {
        const session: Session = { ...data, id: nanoid() };
        await sessionRepository.saveSession(session);
        set({ currentSession: session });
    },
    removeSession: async () => {
        await sessionRepository.clearSession();
        set({ currentSession: undefined });
    },
}));
