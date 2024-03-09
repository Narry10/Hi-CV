"use client";
import { Hero } from "home/Hero";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../contexts/hooks";
import { authLoginWithEmail } from "../contexts/auth";
import DefauftLayout from "layout/DefauftLayout";
import { Steps } from "home/Steps";
import { Features } from "home/Features";
import { Testimonials } from "home/Testimonials";

export default function Home() {
  const dispatch = useAppDispatch();
  const user = useAppSelector((s) => s.user.data);

  useEffect(() => {
    dispatch(
      authLoginWithEmail({
        email: "dominhnhat.dlc@gmail.com",
        password: "dominhnhat.dlc@gmail.com",
      })
    );
  }, []);

  return (
    <main className="mx-auto max-w-screen-2xl bg-dot px-8 pb-32 text-gray-900 lg:px-12">
      <DefauftLayout>
        <Hero />
        <Steps/>
        <Features />
      </DefauftLayout>
    </main>
  );
}
