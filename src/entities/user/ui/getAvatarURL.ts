export const getAvatarURL = (avatarId: string) => {
    return new URL(`../assets/avatars/${avatarId}.png`, import.meta.url).href;
};
