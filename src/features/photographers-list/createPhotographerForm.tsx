'use client';
import { Button, Form, Input } from 'ui-kit';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { CreateListElementCommand } from './model/types';
import { useTransition } from 'react';
import { createPhotographerAction } from '@/features/photographers-list/actions';
const createPhotographerFormSchema = z.object({
    firstName: z.string(),
    lastName: z.string(),
});

type Props = {
    revalidatePath: string;
};
export const CreatePhotographerForm = ({ revalidatePath }: Props) => {
    const [isCreateTransiton, startCreateTransition] = useTransition();
    const form = useForm<CreateListElementCommand>({
        resolver: zodResolver(createPhotographerFormSchema),
        defaultValues: {
            firstName: '',
            lastName: '',
        },
    });
    const onSubmit = (data: CreateListElementCommand) => {
        startCreateTransition(async () => {
            createPhotographerAction(data, revalidatePath);
        });
    };

    return (
        <Form<CreateListElementCommand> form={form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <Form.FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                        <Form.FormItem>
                            <Form.FormLabel>Username</Form.FormLabel>
                            <Form.FormControl>
                                <Input placeholder="shadcn" {...field} />
                            </Form.FormControl>
                            <Form.FormDescription>
                                This is your public display name.
                            </Form.FormDescription>
                            <Form.FormMessage />
                        </Form.FormItem>
                    )}
                />
                <Form.FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                        <Form.FormItem>
                            <Form.FormLabel>Username</Form.FormLabel>
                            <Form.FormControl>
                                <Input placeholder="shadcn" {...field} />
                            </Form.FormControl>
                            <Form.FormDescription>
                                This is your public display name.
                            </Form.FormDescription>
                            <Form.FormMessage />
                        </Form.FormItem>
                    )}
                />
                <Button className="mt-8" type="submit" disabled={isCreateTransiton}>
                    Добавить
                </Button>
            </form>
        </Form>
    );
};
