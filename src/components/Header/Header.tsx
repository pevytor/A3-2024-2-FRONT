import { Button } from "../ui/Button";
import { InfoHeader } from "./components/InfoHeader";
import { SubMenu } from "./components/SubMenu";
import { perfilList } from "@/data/perfilList";

const perfil = perfilList[0];

export const Header = () => {
    const headleMeusPedidos = () => {
        alert('Meus pedidos');
    }

    return (
        <>
            <div className="w-full bg-black bg-cover bg-center opacity-99"
                style={{
                    backgroundImage: `url('/assets/images/${perfil.cover}')`
                }}
            >
                <div className="boxed flex justify-between items-center h-44 md:h-52">
                    <InfoHeader perfil={perfil} />
                    <div className="hidden md:block">
                        <Button
                            label="Meus pedidos"
                            size="medium"
                            onClick={headleMeusPedidos}
                        />
                    </div>
                </div>
            </div>
            <SubMenu />
        </>
    );
}
