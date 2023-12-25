import { CreatePhotographerForm } from '@/features/photographers-list/createPhotographerForm';
import { PhotographersList } from '@/features/photographers-list/photographersList';

export default async function Home() {
    return (
        <main className="flex min-h-screen flex-col  p-8">
            <CreatePhotographerForm revalidatePath="/" />
            <PhotographersList revalidatePagePath="/" />
        </main>
    );
}
