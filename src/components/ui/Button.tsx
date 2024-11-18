type Props = {
    label: string;
    size: 'small' | 'medium' | 'large';
    icon?: IconDefinition;
    onClick: () => void;
}

export const Button = ({ label, size, icon, onClick }: Props) => {
    return (
        <>

            <div
                onClick={onClick}
                className={`flex justify-center items-center cursor-pointer bg-white font-bold rounded-3xl
                ${size === 'small' && 'h-7 text-xs'}
                ${size === 'medium' && 'h-10 text-md'}
                ${size === 'large' && 'h-14 text-lg'}
                `}
            >
                {label}
            </div>
        </>

    );
}