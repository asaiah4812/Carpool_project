"use client";

import { useAuth as useFlowAuth } from "@/context/AuthContext";
import { useTelegramAuth } from "@/context/TelegramAuthContext";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  const telegramAuth = useTelegramAuth();

  return (
    <div className="min-h-screen">
      <Head>
        <title>SkillSwap: Web3 Learning Marketplace</title>
        <meta
          name="description"
          content="SkillSwap: A Web3-based Peer-to-Peer Learning Marketplace focused on blockchain and decentralized technology skills."
        />
      </Head>

      {/* Hero Section */}
      <section className="relative py-20">
        <div className="w-[90%] md:w-[350px] mx-auto relative h-[250px]">
          <Image src="/bro.png" alt="SkillSwap Logo" fill={true} />
        </div>
        <div>
          <h2 className="text-2xl lg:text-4xl font-bold text-btn text-center py-4">Carpool</h2>
          <p className="text-center text-sm md:text-md text-gray-500 w-[90%] md:w-[400px] lg:w-[300px]  mx-auto">Join a transparent communication Driven ride sharing experience leveraging blockchain technology</p>
        </div>
      </section>

      {telegramAuth?.username && (
        <div className="text-center mt-4 text-gray-600">
          Connected Telegram: @{telegramAuth.username}
        </div>
      )}
    </div>
  );
}
