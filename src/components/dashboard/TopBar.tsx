'use client';

import { faGear, faHouse, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { usePerfilContext } from "@/contexts/PerfilContext"; // Importando o contexto
import { useRouter } from "next/navigation"; // Para redirecionamento

export const TopBar = () => {
    const { dataPerfil } = usePerfilContext(); // Consumindo o contexto
    const router = useRouter();

    // Função de logout
    const handleLogout = () => {
        localStorage.removeItem("isAuthenticated"); // Limpa o estado de autenticação
        router.push("/login"); // Redireciona para a página de login
    };

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
                    {/* Botão de logout */}
                    <div
                        className="cursor-pointer rounded-full h-10 w-10 flex justify-center items-center"
                        onClick={handleLogout} // Chama a função de logout ao clicar
                    >
                        <FontAwesomeIcon icon={faRightFromBracket} className="size-6 text-white" />
                    </div>
                </div>
            </div>
        </div>
    );
};
