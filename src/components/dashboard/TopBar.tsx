'use client';

import { faGear, faHouse, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { usePerfilContext } from "@/contexts/PerfilContext"; // Importando o contexto

export const TopBar = () => {
    // Consumindo o contexto
    const { dataPerfil } = usePerfilContext();

    return (
        <div className="w-full flex items-center bg-zinc-800 h-20">
            <div className="boxed flex justify-between items-center w-full">
                {/* Exibindo o nome do perfil do contexto */}
                <a href="/dashboard">
                    <div className="text-white text-2xl">Olá, {dataPerfil?.name}!</div>
                </a>
                <div className="flex">

                    <a href="/dashboard/profile">
                        <div className="cursor-pointer rounded-full h-10 w-10 flex justify-center items-center">
                            <FontAwesomeIcon icon={faGear} className="size-6 text-white" />
                        </div>
                    </a>
                    <a href="/login">
                        <div className="cursor-pointer rounded-full h-10 w-10 flex justify-center items-center">
                            <FontAwesomeIcon icon={faRightFromBracket} className="size-6 text-white" />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};
