import { perfilList } from "@/data/perfilList";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export const TopBar = () => {
    const perfil = perfilList[0];
    const [dataPerfil, setDataPerfil] = useState(perfil);


    return (
        <div className="w-full flex items-center bg-zinc-800 h-20">
            <div className="boxed flex justify-between items-center w-full">
                <a href="/dashboard"><div className="text-white text-2xl">Olá, {dataPerfil.name}!</div></a>
                <a href="/dashboard/profile"><div className="cursor-pointer rounded-full h-10 w-10 flex justify-center items-center">
                    <FontAwesomeIcon icon={faGear} className="size-7 text-white" />
                </div></a>
            </div>
        </div>

    );
}