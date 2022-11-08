import Head from 'next/head';
import React from 'react';
import '../styles/globals.css';;
import { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
     <>
     <Head>
      <title>Next - проект по NextJS</title>
          <link rel='icon' href='/favicon.ico' />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap" rel="stylesheet" />
          <meta property="og:locale" content="ru_RU" />    
     </Head>
     <Component {...pageProps} />
     </> 
  )
}

export default MyApp;
