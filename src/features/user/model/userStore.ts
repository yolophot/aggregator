import { create } from 'zustand';
import { User } from './types';
import { nanoid } from 'nanoid';
type UserInput = {
    firstName: string;
    lastName: string;
    role: string;
    login: string;
    password: string;
};
type UserStore = {
    addUser: (user: UserInput) => void;
    users: User[];
};
export const useUser = create<UserStore>((set) => ({
    users: [],
    addUser: (user) => {
        set((state) => ({
            users: [
                ...state.users,
                {
                    avatar: '',
                    id: nanoid(),
                    role: user.role,
                    name: `${user.firstName} ${user.lastName}`,
                },
            ],
        }));
    },
}));
