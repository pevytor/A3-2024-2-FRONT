export const OrdersList = () => {
    return (
        <>
            <div className="text-xl font-bold">ÚLTIMOS PEDIDOS</div>

            <div className="flex flex-col gap-3">
                <div className="w-full h-16 bg-zinc-300 rounded-lg animate-pulse"></div>
                <div className="w-full h-16 bg-zinc-200 rounded-lg animate-pulse"></div>
            </div>
        </>
    );
}