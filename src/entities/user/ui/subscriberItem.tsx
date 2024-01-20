import { ReactNode } from 'react';
import { Subscriber } from '../model/types';
import Image from 'next/image';
import { getAvatarURL } from './getAvatarURL';

type Props = {
    user: Subscriber;
    userActions?: (user: Subscriber) => ReactNode;
};

export const SubscriberItem = ({ userActions, user }: Props) => {
    return (
        <div>
            <div>{user.name}</div>
            <Image src={getAvatarURL(user.avatar)} alt={'user'} />
            <div>{userActions?.(user)}</div>
        </div>
    );
};
