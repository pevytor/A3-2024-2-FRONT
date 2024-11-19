import { perfilList } from "@/data/perfilList";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const TopBar = () => {
    const perfil = perfilList[0];

    const handleMenu = () => {
        alert('Menu');
    }


    return (
        <div className="w-full flex items-center bg-zinc-800 h-20">
            <div className="boxed flex justify-between items-center w-full">
                <div className="text-white text-2xl">Olá, {perfil.name}!</div>
                <div onClick={handleMenu} className="cursor-pointer rounded-full h-10 w-10 flex justify-center items-center">
                    <FontAwesomeIcon icon={faBars} className="size-7 text-white" />
                </div>
            </div>
        </div>

    );
}