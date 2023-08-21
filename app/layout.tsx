import React from 'react'

import AppContenxt from '@/context/AppContenxt';
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-svg-core/styles.css';
import '../styles/globals.css'
import '@flaticon/flaticon-uicons/css/all/all.css'
import Head from './head';
import MyMainContent from './components/MyMainContent/MyMainContent';




export default async function RootLayout({
    children,
  }: {
    children: React.ReactNode,
  }) 
  {

    return (
      <MyMainContent>
        <>
          <html lang="en" className="bg-bg">
            <body>
              <AppContenxt>{children}</AppContenxt>
            </body>
          </html>
        </>
      </MyMainContent>
    );

    
  }
