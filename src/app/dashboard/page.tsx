'use client'

import { BoxMenu } from "@/components/auth/dashboard/BoxMenu";
import { OrdersList } from "@/components/auth/dashboard/OrdersList/OrdersList";
import { TopBar } from "@/components/auth/dashboard/TopBar";
import { Footer } from "@/components/footer/Footer";

export default function Page() {

    return (
        <>
            <div className="w-screen h-screen gap-3">
                <TopBar />
                <div className="boxed flex flex-col gap-7">
                    <div className="flex flex-col mt-8 gap-3 md:flex-row">
                        <BoxMenu label="Cardápio" link="/dashboard/menu" />
                        <BoxMenu label="Mesas" link="/dashboard/tables" />
                        <BoxMenu label="Pedidos" link="/dashboard/orders" />
                    </div>

                    <OrdersList />
                </div>
            </div>
            <Footer />
        </>

    );
}