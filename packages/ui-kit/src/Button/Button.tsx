type IButtonProps = {
    disabled?: boolean;
    label?: string;
};

export const Button = ({ disabled = false, label }: IButtonProps) => {
    return (
        <div>
            <button disabled={disabled}>{label}</button>
        </div>
    );
};
