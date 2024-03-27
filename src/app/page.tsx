"use client";
import DefauftLayout from "./layout/DefauftLayout";

import { useAppDispatch, useAppSelector } from "../contexts/hooks";
import { Hero } from "./home/Hero";

export default function Home() {
  const dispatch = useAppDispatch();
  const user = useAppSelector((s) => s.user.data);

  return (
    <main className="mx-auto max-w-screen-2xl bg-dot px-8 pb-32 text-gray-900 lg:px-12">
      <DefauftLayout>
        <Hero />
      </DefauftLayout>  
    </main>
  );
}
