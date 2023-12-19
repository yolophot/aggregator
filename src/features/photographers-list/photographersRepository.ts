import { dbClient } from '@/shared/lib/db';

class PhotographersRepository {
    getPhotographersList = async (): Promise<PhotographerListElement[]> => {
        return dbClient.photographer.findMany();
    };
    createPhotographerElement = async (
        command: CreateListElementCommand,
    ): Promise<PhotographerListElement> => {
        return dbClient.photographer.create({ data: command });
    };
    deletePhotographerElement = async (
        command: DeleteListElementCommand,
    ): Promise<PhotographerListElement> => {
        return dbClient.photographer.delete({ where: { id: command.id } });
    };
}
export const photographersRepository = new PhotographersRepository();
