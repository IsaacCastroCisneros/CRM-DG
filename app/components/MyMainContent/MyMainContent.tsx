'use client'
import { SessionProvider} from 'next-auth/react';

const MyMainContent=({children}:{children:JSX.Element|null})=> 
{
  return (
    <SessionProvider>
       <MyContent>
         { children }
       </MyContent>
    </SessionProvider>
  )
}

const MyContent=({children}:{children:JSX.Element|null})=>
{
  return <>{children}</>;
}

export default MyMainContent