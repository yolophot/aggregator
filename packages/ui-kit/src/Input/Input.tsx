import { Input as ShadcnInput } from '../shadcn/sources/ui/input';

type Props = {
    placeholder?: string;
};
export const Input = ({ placeholder }: Props) => {
    return <ShadcnInput placeholder={placeholder} />;
};
