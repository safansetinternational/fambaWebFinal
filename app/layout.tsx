import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import LayoutShell from "@/components/layout-shell"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Famba247 - Your Journey. Your Way. Anytime, Anywhere.",
  description: "Zimbabwe's proudly local ride-hailing app — built for our roads, our people, and our hustle.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        <LayoutShell>
          {children}
        </LayoutShell>
        <Analytics />
      </body>
    </html>
  )
}
