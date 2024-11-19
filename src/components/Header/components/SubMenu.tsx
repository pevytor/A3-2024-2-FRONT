import { Button } from "@/components/ui/Button";
import { faBagShopping, faChair, faPerson, faPersonWalking } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SubMenu = () => {
    const handleMesa = () => {
        alert('"Na mesa" já selecionado.')
    }

    const handleRetirada = () => {
        alert('"Retirada" Indisponível no momento')
    }

    const handlePedidos = () => {
        alert('Meus pedidos')
    }

    return (
        <>
            <div className="w-full bg-white border-b border-zinc-300 sticky top-0 z-50">
                <div className="boxed flex justify-center md:justify-normal items-center h-16 gap-3">
                    <Button label="Na mesa" size="medium" cor="dark" icon={faChair} onClick={handleMesa} />
                    <Button label="Retirada" size="medium" cor="light" icon={faPersonWalking} onClick={handleRetirada} />
                    <div className="px-5 py-2 cursor-pointer md:hidden" onClick={handlePedidos}>
                        <FontAwesomeIcon icon={faBagShopping} className="size-5 hover:opacity-70" />
                    </div>
                </div>
            </div>
        </>
    );
}