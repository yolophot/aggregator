import { create } from 'zustand';
import { Subscriber } from './types';

type SubscribersStore = {
    subscribers: Subscriber[];
    loadSubscribers: () => Promise<void>;
    addSubscriber: (user: Subscriber) => void;
    updateSubscriber: (user: Subscriber) => void;
    deleteSubscriber: (id: string) => void;
};

// TODO - Заменить логику на вызовы users repository
export const useSubscribers = create<SubscribersStore>((set) => ({
    subscribers: [],
    loadSubscribers: async () => {
        set({ subscribers: [] });
    },
    addSubscriber: (user) => {
        set((state) => ({ subscribers: [...state.subscribers, user] }));
    },
    updateSubscriber: (user) => {
        set((state) => ({
            subscribers: state.subscribers.map((u) => (u.id === user.id ? user : u)),
        }));
    },
    deleteSubscriber: (id) => {
        set((state) => ({
            subscribers: state.subscribers.filter((u) => u.id !== id),
        }));
    },
}));
