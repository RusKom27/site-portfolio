import React from "react";
import { Inter } from 'next/font/google';
import {ChakraProvider} from "@chakra-ui/react";

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

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
