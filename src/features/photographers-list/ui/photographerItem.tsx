import { Card } from 'ui-kit';

type Props = {
    photographer: PhotographerListElement;
    onDelete: (id: string) => Promise<void>;
    id: string;
};

export const PhotographerItem = (props: Props) => {
    return (
        <Card
            id={props.id}
            onDelete={props.onDelete}
            title={props.photographer.firstName}
            description={'Gay'}
        />
    );
};
