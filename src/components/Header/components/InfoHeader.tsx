'use client';

import { usePerfilContext } from "@/contexts/PerfilContext"; // Importando o contexto

export const InfoHeader = () => {
    // Consumindo o contexto
    const { dataPerfil } = usePerfilContext();

    return (
        <div className="flex items-center gap-5 text-white">
            <div
                className="h-24 w-24 bg-white rounded-lg bg-cover bg-center"
                style={{
                    backgroundImage: `url('/assets/images/${dataPerfil.avatar}')`
                }}
            ></div>
            <div>
                <div className="font-bold text-xl md:text-2xl">{dataPerfil.name}</div>
                <div className="hidden text-base md:block">{dataPerfil.addres}</div>
                <div className="text-base">
                    <span
                        className={`font-bold ${dataPerfil.open ? 'text-green-300' : 'text-red-300'}`}
                    >
                        {dataPerfil.open ? 'Aberto! ' : 'Fechado. '}
                    </span>
                    {dataPerfil.open ? 'Faça seu pedido agora.' : 'Voltamos amanhã.'}
                </div>
            </div>
        </div>
    );
};
