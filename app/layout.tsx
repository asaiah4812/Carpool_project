// app/layout.tsx
import './globals.css';
// import { AuthContextProvider } from '../context/TelegramAuthContext';
import { AuthContextProvider } from '@/context/AuthContext';
import '../flow-config';
export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body suppressHydrationWarning={true}>

				<AuthContextProvider>{children}</AuthContextProvider>
			</body>
		</html>
	);
}