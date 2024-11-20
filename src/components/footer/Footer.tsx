import { Logo } from "../ui/Logo";

export const Footer = () => {
    return (
        <div className="bg-zinc-800 py-10 mt-8">
            <div className="boxed flex flex-col items-center md:flex-row md:justify-between gap-5">
                <div>
                    <Logo />
                </div>
                <div className="text-zinc-400 font-bold text-sm">Todos os direitos reservados</div>
            </div>

        </div>
    );
}