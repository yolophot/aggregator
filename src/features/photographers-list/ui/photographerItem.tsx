'use client';
import { Button, Card } from 'ui-kit';
import { useTransition } from 'react';
import { PhotographerListElement } from '../model/types';

export function PhotographerItem({
    photographer,
    onDelete,
}: {
    photographer: PhotographerListElement;
    onDelete: () => Promise<void>;
}) {
    const [isLoadingDelete, startDeleteTransition] = useTransition();
    const handleDelete = () => {
        startDeleteTransition(async () => {
            await onDelete();
        });
    };

    return (
        <Card
            firstName={photographer.firstName}
            lastName={photographer.lastName}
            actions={
                <Button disabled={isLoadingDelete} onClick={handleDelete}>
                    Удалить
                </Button>
            }
        />
    );
}
