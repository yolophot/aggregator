'use client';
type IButtonProps = {
    disabled?: boolean;
    children?: string;
    type?: 'submit' | 'reset' | 'button';
};

export const Button = ({ disabled = false, children, type }: IButtonProps) => {
    return (
        <div>
            <button type={type} disabled={disabled}>
                {children}
            </button>
        </div>
    );
};
