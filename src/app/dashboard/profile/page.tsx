'use client'

import { Profile } from "@/components/dashboard/profile/Profile";
import { TopBar } from "@/components/dashboard/TopBar";
import { Footer } from "@/components/footer/Footer";

export default function Page() {
    return (
        <>
            <div className="w-screen h-screen">
                <TopBar />
                <div className="boxed flex flex-col mt-5 gap-7">
                    <Profile />
                </div>
            </div>
            <Footer />
        </>
    );
}