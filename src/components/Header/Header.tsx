import { Button } from "../ui/Button";
import { InfoHeader } from "./components/InfoHeader";
import { SubMenu } from "./components/SubMenu";
import { usePerfilContext } from "@/contexts/PerfilContext";

export const Header = () => {
    const { dataPerfil } = usePerfilContext();

    // Caminho da imagem de capa, com fallback para imagem padrão
    const coverImage = dataPerfil?.cover ? `/assets/images/${dataPerfil.cover}` : '/assets/images/cover1.jpg';

    const handleMeusPedidos = () => {
        alert("Meus pedidos");
    };

    return (
        <>
            <div
                className="w-full bg-black bg-cover bg-center opacity-99 px-1"
                style={{
                    backgroundImage: `url('${coverImage}')`,
                }}
            >
                <div className="boxed flex justify-between items-center h-44 md:h-52">
                    <InfoHeader />
                    <div className="hidden md:block">
                        <Button
                            label="Meus pedidos"
                            size="medium"
                            cor="light"
                            onClick={handleMeusPedidos}
                        />
                    </div>
                </div>
            </div>
            <SubMenu />
        </>
    );
};
``
