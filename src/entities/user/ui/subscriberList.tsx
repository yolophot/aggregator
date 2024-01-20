import { ReactNode } from 'react';
import { useSubscribers } from '../model/subscribersStore';
import { SubscriberItem } from './subscriberItem';
import { Subscriber } from '../model/types';

type Props = {
    userActions?: (user: Subscriber) => ReactNode;
};
export const SubscriberList = ({ userActions }: Props) => {
    const { subscribers } = useSubscribers();

    return (
        <div>
            {subscribers.map((user) => (
                <SubscriberItem key={user.id} user={user} userActions={userActions} />
            ))}
        </div>
    );
};
