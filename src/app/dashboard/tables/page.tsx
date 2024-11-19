'use client'

import { Tables } from "@/components/auth/dashboard/tables/Tables";
import { TopBar } from "@/components/auth/dashboard/TopBar";

export default function Page() {
    return (
        <div className="w-screen h-screen gap-3">
            <TopBar />
            <div className="boxed flex flex-col mt-5 gap-7">
                <Tables />
            </div>
        </div>
    );
}