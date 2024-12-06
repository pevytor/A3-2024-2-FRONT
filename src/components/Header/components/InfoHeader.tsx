'use client';

import { usePerfilContext } from "@/contexts/PerfilContext";

export const InfoHeader = () => {
    const { dataPerfil } = usePerfilContext();

    if (!dataPerfil) {
        return <div>Carregando dados do perfil...</div>;
    }

    // Caminho do avatar, com fallback para a imagem padrão
    const avatarImage = dataPerfil.avatar ? `/assets/images/${dataPerfil.avatar}` : '/assets/images/avatar1.jpg';

    return (
        <div className="flex items-center gap-5 text-white">
            <div
                className="h-24 w-24 bg-white rounded-lg bg-cover bg-center"
                style={{
                    backgroundImage: `url('${avatarImage}')`, // Correção no uso da variável avatarImage
                }}
            ></div>
            <div>
                <div className="font-bold text-xl md:text-2xl">{dataPerfil.name}</div>
                <div className="hidden text-base md:block">
                    {dataPerfil.addres || 'Endereço não disponível'}
                </div>
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
