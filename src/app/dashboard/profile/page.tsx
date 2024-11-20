'use client'

import { TopBar } from "@/components/auth/dashboard/TopBar";
import { Footer } from "@/components/footer/Footer";

export default function Page() {
    return (
        <>
            <div className="w-screen h-screen gap-3">
                <TopBar />
                <div>Editar perfil</div>
            </div>
            <Footer />
        </>
    );
}