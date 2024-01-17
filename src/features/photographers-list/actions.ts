'use server';

import { revalidatePath } from 'next/cache';
// import { photographersRepository } from './photographersRepository';
import { CreateListElementCommand } from './model/types';

export const createPhotographerAction = async (
    command: CreateListElementCommand,
    revalidatePagePath: string,
) => {
    // await photographersRepository.createPhotographerElement(command);
    revalidatePath(revalidatePagePath);
};
