'use client';
import {
    Form as ShadcnForm,
    FormControl,
    FormDescription,
    FormField,
    FormLabel,
    FormMessage,
    FormItem,
} from '../shadcn/sources/ui/form';
import { FieldValues, UseFormReturn } from 'react-hook-form';
import { ReactNode } from 'react';

type FormCompoundComponent = {
    FormItem: typeof FormItem;
    FormField: typeof FormField;
    FormControl: typeof FormControl;
    FormLabel: typeof FormLabel;
    FormDescription: typeof FormDescription;
    FormMessage: typeof FormMessage;
};

// Props for the Form component
type FormProps<TFieldValues extends FieldValues = FieldValues> = {
    form: UseFormReturn<TFieldValues>;
    children: ReactNode;
};

export const Form: FormCompoundComponent &
    (<TFieldValues extends FieldValues = FieldValues>(
        props: FormProps<TFieldValues>,
    ) => JSX.Element) = ({ form, children }) => {
    return <ShadcnForm {...form}>{children}</ShadcnForm>;
};

// Define the compound component properties
Form.FormItem = FormItem;
Form.FormDescription = FormDescription;
Form.FormField = FormField;
Form.FormControl = FormControl;
Form.FormLabel = FormLabel;
Form.FormMessage = FormMessage;
