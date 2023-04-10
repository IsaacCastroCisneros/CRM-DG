import { getServerSession } from "next-auth/next"
import { authOptions } from "pages/api/auth/[...nextauth]"
import { redirect } from 'next/navigation';

import HeaderNav from '@/components/HeaderNav/HeaderNav';
import NavbarUltimate from '@/components/NavbarUltimate/NavbarUltimate';
import MyPopUp from './components/MyPopUp';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const session = await getServerSession(authOptions)

  return (
    <>
      <MyPopUp />
      <header className="w-[5rem] h-[100%] relative z-[999]">
         <NavbarUltimate />
      </header>
      <main className="flex-1 overflow-hidden relative z-[9]">
         <HeaderNav />
        <div className="py-[1.2rem] px-[2.5rem] pt-[2rem]">{children}</div>
      </main>
    </>
  );
/*   if(session)
  {
  }

  return redirect('/login') */
}
