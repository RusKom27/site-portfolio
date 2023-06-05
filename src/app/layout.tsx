import React from "react";
import { JetBrains_Mono } from 'next/font/google';

import './globals.css';

const inter = JetBrains_Mono({subsets: ["latin"] });

export const metadata = {
    title: 'Ruslan Zhurnyy',
    description: 'Portfolio site ',
};

export default function RootLayout({
    children,
}: {
  children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                {children}
            </body>
        </html>
    );
}
