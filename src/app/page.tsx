'use client'

import { Header } from "@/components/header/Header";
import { Main } from "@/components/main/Main";

export default function Home() {
  return (
    <div className="w-screen h-screen">
      <Header />
      <Main />
    </div>
  );
}
