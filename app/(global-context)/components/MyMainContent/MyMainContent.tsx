'use client'
import { SessionProvider} from 'next-auth/react';

export default function MyMainContent({children}:{children:JSX.Element|null}) 
{
  return (
    <SessionProvider>
       <MyContent>
         { children }
       </MyContent>
    </SessionProvider>
  )
}

function MyContent({children}:{children:JSX.Element|null})
{
  return <>{children}</>;
}
