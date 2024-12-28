// components/DisplayUser.tsx
'use client';

import { useAuth } from '@/context/TelegramAuthContext';
import { Button } from "@/components/ui/button"

export default function DisplayUser() {
	const { username } = useAuth();

	return (
		<div className="flex flex-col items-center justify-center min-h-screen text-center space-y-6 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-8">
			<img src="/img/logo.png" alt="SkillSwap Logo" width="150" className="mb-6 drop-shadow-lg"/>
			<h1 className="text-5xl font-extrabold text-white drop-shadow-lg">
				SkillSwap: A Web3-based Peer-to-Peer Learning Marketplace
			</h1>
			<p className="text-xl text-white drop-shadow-md">
				Focusing on blockchain and decentralized technology skills.
			</p>
			<div className="mt-10">
				<p className="text-2xl text-white drop-shadow-md">Username: {username || 'Not available'}</p>
				<p className="text-lg text-yellow-300 mt-4 drop-shadow-md">To Continue Please Connect Wallet</p>
			</div>
			<Button className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow-lg">
				Connect Wallet
			</Button>
		</div>
	);
}