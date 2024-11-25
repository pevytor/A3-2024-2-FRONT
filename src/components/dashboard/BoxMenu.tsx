type Props = {
    label: string;
    link: string;
};

export const BoxMenu = ({ label, link }: Props) => {
    return (
        <a
            href={link}
            className="w-full bg-sky-600 text-white text-2xl rounded-lg p-7 cursor-pointer hover:opacity-80 block"
        >
            {label}
        </a>
    );
};
