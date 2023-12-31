import { ClerkProvider,SignIn } from '@clerk/nextjs'
import './globals.css'
import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import { SignedIn } from '@clerk/nextjs/app-beta'
import { SignedOut } from '@clerk/nextjs/app-beta/client'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

const inter = Outfit({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'RentACar',
  description: 'Premium Car Rental Service',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
        <SignedIn>
          <NavBar/>
         {children}
         <Footer />
        </SignedIn>
        <SignedOut>
          <SignIn/>
        </SignedOut>
        
        </body>
    </html>
    </ClerkProvider>
  )
}
