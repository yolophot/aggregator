import { CreatePhotographerForm } from '@/features/photographers-list';
import { PhotographersList } from '@/features/photographers-list';

export default async function Home() {
    return (
        <main className="flex min-h-screen flex-col  p-8">
            <CreatePhotographerForm revalidatePath="/" />
            <PhotographersList revalidatePagePath="/" />
        </main>
    );
}
