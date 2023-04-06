import React from 'react'

import AppContenxt from '@/context/AppContenxt';
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-svg-core/styles.css';

import '../../styles/globals.css'
import "react-datepicker/dist/react-datepicker.css";
import '@flaticon/flaticon-uicons/css/all/all.css'
import Head from './head';
import dynamic from 'next/dynamic';

const MyMainContent = dynamic(() => import("./components/MyMainContent/MyMainContent"), { ssr: false })

export default async function RootLayout({
    children,
  }: {
    children: React.ReactNode,
  }) 
  {

    return (
      <MyMainContent>
        <>
          <html lang="en" className="bg-myWhite">
            <Head></Head>
            <body className="flex my-container">
              <AppContenxt>{children}</AppContenxt>
            </body>
          </html>
        </>
      </MyMainContent>
    );

    
  }
