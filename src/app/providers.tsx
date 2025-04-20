"use client"

import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { ThemeProvider } from "next-themes";
import { ClerkProvider } from '@clerk/nextjs';


export default function Providers(props: { children: React.ReactNode }) {
    return (
        <ClerkProvider>
            <ChakraProvider value={defaultSystem}>
                <ThemeProvider attribute="class" disableTransitionOnChange>
                    {props.children}
                </ThemeProvider>
            </ChakraProvider>
        </ClerkProvider>
    )
}