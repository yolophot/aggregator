export type PhotographerListElement = {
    id: string;
    firstName: string;
    lastName: string;
};

export type CreateListElementCommand = {
    firstName: string;
    lastName: string;
};
export type DeleteListElementCommand = {
    id: string;
};
