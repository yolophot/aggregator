import {
    Card as ShadcnCard,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '../shadcn/sources/ui/card';
import { ReactNode } from 'react';

type Props = {
    firstName: string;
    lastName: string;
    actions?: ReactNode;
};
export const Card = ({ firstName, lastName, actions }: Props) => {
    return (
        <ShadcnCard>
            <CardHeader>
                <CardTitle>{firstName}</CardTitle>
                <CardDescription>{lastName}</CardDescription>
            </CardHeader>
            <CardContent>
                <p>Card Content</p>
            </CardContent>
            <CardFooter>{actions}</CardFooter>
        </ShadcnCard>
    );
};
