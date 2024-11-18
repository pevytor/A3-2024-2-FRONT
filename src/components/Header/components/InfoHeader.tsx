import Image from "next/image"

export const InfoHeader = () => {
    return (
        <div className="flex items-center gap-5 text-white">
            <div className="h-24 w-24 bg-white rounded-lg">
                <Image className="rounded-lg" src={'/assets/images/PERFIL.jpg'} alt="PERFIL" width={96} height={96} quality={100} />
            </div>
            <div>
                <div className="font-bold text-2xl">Burger King</div>
                <div className="text-base">Av. Salgado Filho, 1234 - Lagoa Nova, Natal, RN 59056005</div>
                <div className="text-base">Aberto, faça seu pedido</div>
            </div>
        </div>
    );
}