// components/DisplayUser.tsx
'use client';

import { useAuth } from '@/context/AuthContext';

export default function DisplayUser() {
	const { userID, username, windowHeight } = useAuth();

	return (
		<div className="flex flex-col items-center justify-center min-h-screen text-center space-y-4">
			<h1>Welcome to SkillSwap a Web3-based peer-to-peer learning marketplace focusing on blockchain and decentralized technology skills. </h1>
			<img src="/img/logo.png" alt=""  width="150"/>
			<h1 className="text-4xl font-bold">
				Welcome to the Telegram Web App!
			</h1>
			<p>User ID: {userID || 'Not available'}</p>
			<p>Username: {username || 'Not available'}</p>
			<p>Window Height: {windowHeight}</p>
		</div>
	);
}