import type { Metadata, Viewport } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import BootstrapClient from "@/hooks/BootstrapClient";
import SmoothScroll from "@/hooks/SmoothScroll";
import "./globals.scss";

export const metadata: Metadata = {
    title: "Godwin — Developer & Creative Director",
    description:
        "Full-stack developer and creative director. Eight years shipping products end to end — web, brand, and AI-powered systems. Based in Los Angeles, CA.",
    authors: [{ name: "The Creatorie" }],
    icons: {
        icon: "/assets/images/logo/favicon.svg",
        apple: "/assets/images/logo/favicon.svg",
    },
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en-US" suppressHydrationWarning>
            <body>
                <BootstrapClient />
                <SmoothScroll>
                    <ThemeProvider>{children}</ThemeProvider>
                </SmoothScroll>
            </body>
        </html>
    );
}
