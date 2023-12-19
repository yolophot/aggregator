type PhotographerListElement = {
    id: string;
    firstName: string;
    lastName: string;
};

type CreateListElementCommand = {
    firstName: string;
    lastName: string;
};
type DeleteListElementCommand = {
    id: string;
};
