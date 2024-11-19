'use client'

import { BoxMenu } from "@/components/auth/dashboard/BoxMenu";
import { TopBar } from "@/components/auth/dashboard/TopBar";

export default function Page() {

    return (
        <div className="w-screen h-screen gap-3">
            <TopBar />
            <div className="boxed flex flex-col gap-3 mt-8 md:flex-row">
                <BoxMenu label="Cardápio" link="/dashboard/menu" />
                <BoxMenu label="Mesas" link="/dashboard/tables" />
                <BoxMenu label="Pedidos" link="/dashboard/orders" />
            </div>
        </div>
    );
}