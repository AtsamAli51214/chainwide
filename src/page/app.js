// pages/_app.js

// import React, { useState } from 'react';
// import RootLayout from '@/components/RootLayout'; // Update the path accordingly
// import React from 'react';
// import { ThemeProvider } from '../Context/themeContext';

// function MyApp({ Component, pageProps }) {
//   const [isDark, setIsDark] = useState(false); // Initialize the isDark state

//   // Function to update the isDark state
//   const toggleDarkMode = () => {
//     setIsDark((prevState) => !prevState);
//     console.log("You Clicked me")
//   };

//   return (
//     <ThemeProvider>
//     <RootLayout isDark={isDark} toggleDarkMode={toggleDarkMode}>
//       <Component {...pageProps} />
//     </RootLayout>
//     </ThemeProvider>
//   );
// }

// export default MyApp;

// pages/_app.js
"use client"
import { ThemeProvider } from '../Context/themeContext';
// import RootLayout from '@/components/RootLayout'; // Update the path accordingly
import RootLayout from "../../app/layout";
import { useState } from 'react';
function MyApp({ Component, pageProps }) {
  const [isDark, setIsDark] = useState(false); // Initialize the isDark state using useClient

  // Function to update the isDark state
  const toggleDarkMode = () => {
    setIsDark((prevState) => !prevState);
  };

  return (
    <ThemeProvider>
    <RootLayout isDark={isDark} toggleDarkMode={toggleDarkMode}>
      <Component {...pageProps} />
    </RootLayout>
    </ThemeProvider>
  );
}

export default MyApp;




//import '../styles/globals.css';

// function MyApp({ Component, pageProps }) {
//   return (
//     <ThemeProvider>
//       <Component {...pageProps} />
//     </ThemeProvider>
//   );
// }

// export default MyApp;
