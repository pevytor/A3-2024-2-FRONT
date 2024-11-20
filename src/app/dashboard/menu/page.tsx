'use client'

import { Navbar } from "@/components/auth/dashboard/menu/Navbar";
import { TopBar } from "@/components/auth/dashboard/TopBar";
import { Products } from "@/components/main/components/Products";

export default function Page() {
    return (
        <div className="w-screen h-screen gap-3">
            <TopBar />
            <div className="boxed flex flex-col mt-5 gap-7">
                <Navbar />
            </div>

            PRODUCTS AQUI
        </div>
    );
}