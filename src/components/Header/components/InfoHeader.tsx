import { Perfil } from "@/types/Perfil/Perfil";

type Props = {
    perfil: Perfil;
}

export const InfoHeader = ({ perfil }: Props) => {
    return (
        <div className="flex items-center gap-5 text-white">
            <div
                className="h-24 w-24 bg-white rounded-lg bg-cover bg-center"
                style={{
                    backgroundImage: `url('/assets/images/${perfil.avatar}')`
                }}
            ></div>
            <div>
                <div className="font-bold text-xl md:text-2xl">{perfil.name}</div>
                <div className="hidden text-base md:block">{perfil.addres}</div>
                <div className="text-base">
                    <span className={`font-bold ${perfil.open ? 'text-green-300' : 'text-red-300'}`}>
                        {perfil.open ? 'Aberto! ' : 'Fechado. '}
                    </span>
                    {perfil.open ? 'Faça seu pedido agora.' : 'Voltamos amanhã.'}
                </div>

            </div>
        </div>
    );
};
