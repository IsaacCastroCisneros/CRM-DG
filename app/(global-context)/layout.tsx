import React from 'react'

import AppContenxt from '@/context/AppContenxt';
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-svg-core/styles.css';

import '../../styles/globals.css'
import "react-datepicker/dist/react-datepicker.css";
import '@flaticon/flaticon-uicons/css/all/all.css'
import Head from './head';
import MyMainContent from './components/MyMainContent/MyMainContent';
import Link from 'next/link';


export default async function RootLayout({
    children,
  }: {
    children: React.ReactNode,
  }) 
  {

    return (
      <MyMainContent>
        <>
          {/* <Link href={"/lel"} >hmmm</Link>
          <Link href="/lel" >yooo</Link>
          <Link href="/login" >login</Link> */}
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
