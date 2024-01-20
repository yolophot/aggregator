export type UserInput = {
    firstName: string;
    lastName: string;
    role: string;
    login: string;
    password: string;
};
export type Photographer = {
    id: string;
    name: string;
    avatar: string;
    role: string;
};
export type Admin = {
    id: string;
    name: string;
    avatar: string;
    role: string;
};

export type Subscriber = {
    id: string;
    name: string;
    avatar: string;
    role: string; // TODO - добавить роли Фотографа, Админа и Дефолтного пользователя
};

export type User = Subscriber | Admin | Photographer;
