import {
    Card as ShadcnCard,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '../shadcn/sources/ui/card';
import { ReactNode } from 'react';
import { Button } from '../shadcn/sources/ui/button';

type Props = {
    title: string;
    description: string;
    actions?: ReactNode;
    onDelete: (id: string) => Promise<void>;
    id: string;
};
export const Card = ({ title, description, onDelete, id }: Props) => {
    const handleDelete = () => {
        onDelete(id);
    };
    return (
        <ShadcnCard>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>
                <p>Card Content</p>
            </CardContent>
            <CardFooter>
                <Button onClick={handleDelete}>Удалить</Button>
            </CardFooter>
        </ShadcnCard>
    );
};
