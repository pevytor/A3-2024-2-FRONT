import { Button } from "../ui/Button";
import { InfoHeader } from "./components/InfoHeader";
import { SubMenu } from "./components/SubMenu";


export const Header = () => {

    const headleMeusPedidos = () => {
        alert('Meus pedidos');
    }

    return (
        <>
            <div className="w-full bg-black bg-cover bg-center opacity-99"
                style={{
                    backgroundImage: `url('/assets/images/backg.png')`
                }}
            >
                <div className="boxed flex justify-between items-center h-52">
                    <InfoHeader />
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