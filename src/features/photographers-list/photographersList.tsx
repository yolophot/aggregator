import { useEffect, useState } from 'react';
import { photographersRepository } from '@/features/photographers-list/photographersRepository';
import { PhotographerItem } from './ui/photographerItem';

export const PhotographersList = () => {
    const [photographersList, setPhotographersList] = useState<PhotographerListElement[]>([]);

    useEffect(() => {
        async function fetchPhotographers() {
            const list = await photographersRepository.getPhotographersList();
            setPhotographersList(list);
        }
        fetchPhotographers();
    }, []);

    const handleDelete = async (photogprapherId: string) => {
        await photographersRepository.deletePhotographerElement({ id: photogprapherId });
    };
    return (
        <div className={'flex flex-col gap-3'}>
            {photographersList &&
                photographersList.map((photographer) => (
                    <PhotographerItem
                        photographer={photographer}
                        onDelete={() => handleDelete(photographer.id)}
                        key={photographer.id}
                        id={photographer.id}
                    />
                ))}
        </div>
    );
};
