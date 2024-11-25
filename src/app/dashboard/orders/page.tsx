'use client'

import { TopBar } from "@/components/dashboard/TopBar";
import { Footer } from "@/components/footer/Footer";

export default function Page() {
    return (
        <>
            <div className="w-screen h-screen gap-3">
                <TopBar />
                <div>Últimos pedidos</div>

            </div>
            <Footer />
        </>
    );
}