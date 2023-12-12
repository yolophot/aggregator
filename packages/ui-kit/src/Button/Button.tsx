type IButtonProps = {
    disabled?: boolean;
    label?: string;
};

export const Button = ({ disabled = false, label }: IButtonProps) => {
    return (
        <button className={'-bottom-1/3 bg-red-950'} disabled={disabled}>
            {label}
        </button>
    );
};
