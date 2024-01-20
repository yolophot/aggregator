import * as Localforage from 'localforage';

export const persistStorage = {
    getItemSafe: async <T,>(key: string, defaultValue: T) => {
        return Localforage.getItem<T>(key).then((res) => (res === null ? defaultValue : res));
    },

    setItemSafe: <T,>(key: string, value: T) => {
        try {
            return Localforage.setItem(key, value);
        } catch (e) {
            return Promise.resolve(null);
        }
    },
    getItem: <T,>(key: string) => {
        return Localforage.getItem<T>(key);
    },
};
