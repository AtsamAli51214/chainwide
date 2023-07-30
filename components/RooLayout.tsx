// components/RootLayout.js (adjust the path based on your folder structure)

'use client' 
import React, { useState } from 'react';
import '../app/css/style.css';
import '../app/css/scss/theme.scss';
import '../app/css/scss/app.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Inter, Architects_Daughter } from 'next/font/google';
import Header from '@/components/ui/header';
import Banner from '@/components/banner';



const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const architects_daughter = Architects_Daughter({
  subsets: ['latin'],
  variable: '--font-architects-daughter',
  weight: '400',
  display: 'swap',
});

export const metadata = {
  title: 'Chainwide',
  description: 'Chainwide - API Security & Visibility',
};

export default function RootLayout({
  children,
  isDark, // Access the 'isDark' prop directly
  toggleDarkMode, // Access the 'toggleDarkMode' function from MyApp
}: {
  children: React.ReactNode;
  isDark: boolean; // Add the type for 'isDark' if it's boolean
  toggleDarkMode: () => void; // Add the type for 'toggleDarkMode' function
}) {
 
    const [isDarkMode , setIsDarkMode]=useState(true)

    function handleClick(state:any){
        setIsDarkMode(state)
    }
  return (
    <html lang="en">
      
      <body className={`${inter.variable} ${architects_daughter.variable} font-inter antialiased ${isDarkMode ? 'bg-gray-900 text-gray-200' : 'bg-white text-black'} tracking-tight`}>
        <div className="flex flex-col min-h-screen overflow-hidden">
          <Header callback={handleClick} />
          {children}
          <Banner />
        </div>
      </body>
    </html>
  );
}
