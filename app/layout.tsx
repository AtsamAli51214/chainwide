// // components/RootLayout.js (adjust the path based on your folder structure)
// import React from 'react';
// import './css/style.css';
// import '../app/css/scss/theme.scss';
// import '../app/css/scss/app.scss';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';
// import { Inter, Architects_Daughter } from 'next/font/google';
// import Header from '@/components/ui/header';
// import Banner from '@/components/banner';

// const inter = Inter({
//   subsets: ['latin'],
//   variable: '--font-inter',
//   display: 'swap',
// });

// const architects_daughter = Architects_Daughter({
//   subsets: ['latin'],
//   variable: '--font-architects-daughter',
//   weight: '400',
//   display: 'swap',
// });

// export const metadata = {
//   title: 'Chainwide',
//   description: 'Chainwide - API Security & Visibility',
// };

// export default function RootLayout({
//   children,
//   isDark, // Access the 'isDark' prop directly
//   toggleDarkMode, // Access the 'toggleDarkMode' function from MyApp
// }: {
//   children: React.ReactNode;
//   isDark: boolean; // Add the type for 'isDark' if it's boolean
//   toggleDarkMode: () => void; // Add the type for 'toggleDarkMode' function
// }) {
//   return (
//     <html lang="en">
      
//       <body className={`${inter.variable} ${architects_daughter.variable} font-inter antialiased ${isDark ? 'bg-gray-900 text-gray-200' : 'bg-white text-black'} tracking-tight`}>
//         <div className="flex flex-col min-h-screen overflow-hidden">
//           <Header />
//           {children}
//           <Banner />
//         </div>
//       </body>
//     </html>
//   );
// }


// app/layout.tsx (adjust the path based on your folder structure)
// "use Client"
// import RootLayout from '@/components/RooLayout';
// import React from 'react';
// import { useClient } from 'react-server-dom-webpack'; // Import the useClient hook


// function Layout({ children }: { children: React.ReactNode }) {
//   // Mark the component as a client entry
//   useClient();

//   return <RootLayout>{children}</RootLayout>;
// }

// export default Layout;





// app/layout.tsx (adjust the path based on your folder structure)
// import RootLayout from '@/components/RooLayout';
// import React, { useState } from 'react';
//  // Update the path accordingly

// export const useDarkMode = () => {
//   const [isDark, setIsDark] = useState(true);

//   const toggleDarkMode = () => {
//     setIsDark((prevState) => !prevState);
//   };

//   return { isDark, toggleDarkMode };
// };

// function Layout({ children }: { children: React.ReactNode }) {
//   const darkModeState = useDarkMode();

//   return <RootLayout {...darkModeState}>{children}</RootLayout>;
// }

// export default Layout;


// app/layout.tsx (adjust the path based on your folder structure)
'use client' 
import RootLayout from '@/components/RooLayout';
import { useDarkMode } from '@/hooks/useDarkMode';
import React from 'react';
 // Import the custom hook

function Layout({ children }: { children: React.ReactNode }) {
  // Use the custom hook to get the dark mode state and toggle function
  const darkModeState = useDarkMode();

  return <RootLayout {...darkModeState}>{children}</RootLayout>;
}

export default Layout;

