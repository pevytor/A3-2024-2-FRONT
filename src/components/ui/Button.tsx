import { IconDefinition } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
    label: string;
    size: 'medium' | 'large';
    icon?: IconDefinition;
    cor?: 'light' | 'dark';
    onClick: () => void;
}

export const Button = ({ label, size, cor, icon, onClick }: Props) => {
    return (
        <>

            <div
                onClick={onClick}
                className={`flex justify-center items-center cursor-pointer select-none bg-white font-bold rounded-3xl gap-2
                ${size === 'medium' && 'px-5 py-2 text-md'}
                ${size === 'large' && 'px-7 py-3 text-lg'}
                ${cor === 'light' && 'bg-white hover:opacity-70'}
                ${cor === 'dark' && 'bg-zinc-100 hover:opacity-70'}
                `}
            >
                {icon && <FontAwesomeIcon icon={icon} className="size-5" />}
                {label}
            </div>
        </>

    );
}