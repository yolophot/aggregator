import { revalidatePath } from 'next/cache';
import { photographersRepository } from './photographersRepository';
import { PhotographerItem } from './ui/photographerItem';

export async function PhotographersList({ revalidatePagePath }: { revalidatePagePath: string }) {
    const coursesList = await photographersRepository.getPhotographersList();

    const handleDeleteAction = async (courseId: string) => {
        'use server';

        await photographersRepository.deletePhotographerElement({ id: courseId });
        revalidatePath(revalidatePagePath);
    };

    return (
        <div className="flex flex-col gap-3">
            {coursesList.map((photographer) => (
                <PhotographerItem
                    key={photographer.id}
                    photographer={photographer}
                    onDelete={handleDeleteAction.bind(null, photographer.id)}
                />
            ))}
        </div>
    );
}
