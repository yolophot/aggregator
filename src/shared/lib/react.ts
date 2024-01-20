import { Context, useContext, createContext } from 'react';

export const useStrictContext = <T>(context: Context<T | null>) => {
    const value = useContext(context);
    if (value === null) {
        throw new Error('Context not passed');
    }
    return value as T;
};
export const createStrictContext = <T>() => {
    return createContext<T | null>(null);
};
