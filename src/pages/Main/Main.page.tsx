import { CreatePhotographerForm } from '@/features/photographers-list/createPhotographerForm';
import { PhotographersList } from '@/features/photographers-list/photographersList';

const MainPage = () => {
    return (
        <div>
            <CreatePhotographerForm />
            <PhotographersList />
        </div>
    );
};

export default MainPage;
