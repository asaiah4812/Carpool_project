import './globals.css';
import { AuthContextProvider } from '@/context/AuthContext';
import { TelegramAuthContextProvider } from '@/context/TelegramAuthContext';
import '../flow-config';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body suppressHydrationWarning={true}>
                <AuthContextProvider>
                    <TelegramAuthContextProvider>
                        {children}
                    </TelegramAuthContextProvider>
                </AuthContextProvider>
            </body>
        </html>
    );
}