export const InfoHeader = () => {
    return (
        <div className="flex items-center gap-5 text-white">
            <div
                className="h-24 w-24 bg-white rounded-lg bg-cover bg-center"
                style={{
                    backgroundImage: `url('/assets/images/PERFIL.jpg')`
                }}
            ></div>
            <div>
                <div className="font-bold text-xl md:text-2xl">Burger King</div>
                <div className="hidden text-base md:block">Av. Salgado Filho, 1234 - Lagoa Nova, Natal, RN 59056005</div>
                <div className="text-base"><span className="font-bold">Aberto</span>, faça seu pedido</div>
            </div>
        </div>
    );
};
