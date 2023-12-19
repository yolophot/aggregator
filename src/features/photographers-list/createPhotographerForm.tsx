import { Button, Form, Input } from 'ui-kit';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import useSWRMutation from 'swr/mutation';
import { photographersRepository } from './photographersRepository';
const createPhotographerFormSchema = z.object({
    firstName: z.string(),
    lastName: z.string(),
});

export const CreatePhotographerForm = () => {
    const { trigger, isMutating } = useSWRMutation(
        '/api/user',
        (_, { arg }: { arg: CreateListElementCommand }) =>
            photographersRepository.createPhotographerElement(arg),
    );

    console.log(isMutating);

    const form = useForm<CreateListElementCommand>({
        resolver: zodResolver(createPhotographerFormSchema),
        defaultValues: {
            firstName: '',
            lastName: '',
        },
    });
    const onSubmit = (data: CreateListElementCommand) => {
        trigger(data);
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
                <Button type={'submit'}>Добавить</Button>
            </form>
        </Form>
    );
};
