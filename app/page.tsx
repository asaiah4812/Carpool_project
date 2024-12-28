'use client';

import { useAuth as useFlowAuth } from '@/context/AuthContext';
import { useAuth as useTelegramAuth } from '@/context/TelegramAuthContext';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Head from 'next/head';

export default function Home() {
  const flowAuth = useFlowAuth();
  const telegramAuth = useTelegramAuth();
  const loggedIn = flowAuth?.loggedIn;
  const logOut = flowAuth?.logOut;
  const logIn = flowAuth?.logIn;
  const user = flowAuth?.user;
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    try {
      setIsLoading(true);
      await logIn();
    } catch (error) {
      alert("Login failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      setIsLoading(true);
      await logOut();
    } catch {
      alert("Logout failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center space-y-6 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-8">
      <Head>
        <title>SkillSwap: Web3 Learning Marketplace</title>
        <meta name="description" content="SkillSwap: A Web3-based Peer-to-Peer Learning Marketplace focused on blockchain and decentralized technology skills." />
      </Head>
      <img src="/img/logo.png" alt="SkillSwap Logo" aria-label="SkillSwap Logo" width="150" className="mb-6 drop-shadow-lg"/>
      <h1 className="text-5xl font-extrabold text-white drop-shadow-lg">
        SkillSwap: A Web3-based Peer-to-Peer Learning Marketplace
      </h1>
      <p className="text-xl text-white drop-shadow-md">
        Focusing on blockchain and decentralized technology skills.
      </p>
      <div className="mt-10">
        <p className="text-lg text-yellow-300 mt-4 drop-shadow-md">To Continue Please Connect Wallet</p>
      </div>
      {telegramAuth?.username && (
        <div>
          <p className="text-lg text-white drop-shadow-md">Telegram Username: {telegramAuth.username}</p>
        </div>
      )}
      {loggedIn ? (
        <div>
          <p>Logged in as {user?.addr || "Unknown User"}</p>
          <Button 
            disabled={isLoading} 
            className={`mt-8 px-6 py-3 ${isLoading ? 'bg-gray-500 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'} text-white rounded-lg shadow-lg`} 
            onClick={handleLogout}
          >
            {isLoading ? "Logging Out..." : "Log Out"}
          </Button>
        </div>
      ) : (
        <Button 
          disabled={isLoading} 
          className={`mt-8 px-6 py-3 ${isLoading ? 'bg-gray-500 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'} text-white rounded-lg shadow-lg`} 
          onClick={handleLogin}
        >
          {isLoading ? "Connecting..." : "Connect Wallet"}
        </Button>
      )}
    </div>
  );
}