'use client'

import { TopBar } from "@/components/auth/dashboard/TopBar";

export default function Page() {
    return (
        <div className="w-screen h-screen gap-3">
            <TopBar />
            <div>Mesas</div>
        </div>
    );
}