// import { dbClient } from '@/shared/lib/db';
// import {
//     DeleteListElementCommand,
//     CreateListElementCommand,
//     PhotographerListElement,
// } from './model/types';
// class PhotographersRepository {
//     getPhotographersList = async (): Promise<PhotographerListElement[]> => {
//         return dbClient.photographer.findMany();
//     };
//     createPhotographerElement = async (
//         command: CreateListElementCommand,
//     ): Promise<PhotographerListElement> => {
//         return dbClient.photographer.create({ data: command });
//     };
//     deletePhotographerElement = async (
//         command: DeleteListElementCommand,
//     ): Promise<PhotographerListElement> => {
//         return dbClient.photographer.delete({ where: { id: command.id } });
//     };
// }
// export const photographersRepository = new PhotographersRepository();
