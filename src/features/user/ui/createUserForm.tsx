import { Button, Form, Input } from 'ui-kit';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { UserInput } from '../model/types';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, FormControl } from 'ui-kit';

const createUserFormSchema = z.object({
    firstName: z.string(),
    lastName: z.string(),
    role: z.string(),
    login: z.string(),
    password: z.string(),
});

type Props = {
    onCreateUser: (data: UserInput) => void;
};
export const CreateUserForm = ({ onCreateUser }: Props) => {
    const form = useForm<UserInput>({
        resolver: zodResolver(createUserFormSchema),
        defaultValues: {
            firstName: '',
            lastName: '',
            role: '',
            login: '',
            password: '',
        },
    });
    const onSubmit = (data: UserInput) => {
        onCreateUser(data);
    };

    return (
        <Form<UserInput> form={form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <Form.FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                        <Form.FormItem>
                            <Form.FormLabel>Имя</Form.FormLabel>
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
                            <Form.FormLabel>Фамилия</Form.FormLabel>
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
                    name="login"
                    render={({ field }) => (
                        <Form.FormItem>
                            <Form.FormLabel>Логин</Form.FormLabel>
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
                    name="password"
                    render={({ field }) => (
                        <Form.FormItem>
                            <Form.FormLabel>Пароль</Form.FormLabel>
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
                    name="role"
                    render={({ field }) => (
                        <Form.FormItem>
                            <Form.FormLabel>Роль</Form.FormLabel>
                            <Form.FormControl>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select a verified email to display" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="m@example.com">m@example.com</SelectItem>
                                        <SelectItem value="m@google.com">m@google.com</SelectItem>
                                        <SelectItem value="m@support.com">m@support.com</SelectItem>
                                    </SelectContent>
                                </Select>
                            </Form.FormControl>
                            <Form.FormDescription>
                                This is your public display name.
                            </Form.FormDescription>
                            <Form.FormMessage />
                        </Form.FormItem>
                    )}
                />
                <Button className="mt-8" type="submit">
                    Добавить
                </Button>
            </form>
        </Form>
    );
};
