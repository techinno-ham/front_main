"use client"
import type { Metadata } from "next"
import "./globals.css"
import localFont from "next/font/local"
import Script from "next/script"
import { Toaster, toast } from "sonner"
import { usePathname } from "next/navigation"
import { GoogleTagManager } from "@next/third-parties/google"

const myFont = localFont({
    src: "../public/fonts/iranyekanwebbold.woff2",
})

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    const pathname = usePathname()
    const isMyBotsPath =
        pathname.startsWith("/mybots") ||
        pathname.startsWith("/panel") ||
        pathname.startsWith("/createbot") ||
        pathname.startsWith("/profile") ||
        pathname.startsWith("/invite")

    return (
        <html lang="fa" dir="rtl">
            <GoogleTagManager gtmId="GTM-T2X2G5KR" />
            <body
                className={`${myFont.className} ${isMyBotsPath && "bg-[#F6F8FB]"}`}
            >
                <Toaster position="top-center" richColors />
                {children}
                <script
                    src="http://84.46.250.91:9000/widget/hamyarchat-embeded.js"
                    id="myChatbotScript"
                    nonce="XUENAJFW"
                    defer
                    data-token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiYm90SWQiOiJjNjhhZjUxMC04YTU3LTRjMDMtYmVhOC0zYTJlMDQzY2UyMzkifSwiaWF0IjoxNzI0NTAyNTAyLCJleHAiOjE3MjcwOTQ1MDJ9.pSiO4ml8cH7yba83-T-RK_6JU1TnVSt5Y1biZPHNbyY"
                  ></script>
                <noscript>
                    <iframe
                        src="https://www.googletagmanager.com/ns.html?id=GTM-T2X2G5KR"
                        height="0"
                        width="0"
                        style={{ display: "none", visibility: "hidden" }}
                    ></iframe>
                </noscript>
            </body>
        </html>
    )
}
