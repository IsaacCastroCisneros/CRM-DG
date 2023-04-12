import HeaderNav from '@/components/HeaderNav/HeaderNav';
import NavbarUltimate from '@/components/NavbarUltimate/NavbarUltimate';
import MyPopUp from './components/MyPopUp';
import Link from 'next/link';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

    return (
      <>
        <Link href={'/lel'}>rrrr</Link>
        <Link href={'/login'}>rrrrñññ</Link>
        <MyPopUp />
        <header className="w-[5rem] mob:w-[3rem] h-[100%] relative z-[999]">
           <NavbarUltimate />
        </header>
        <main className="flex-1 overflow-hidden relative z-[9]">
           <HeaderNav />
          <div className="py-[1.2rem] px-[2.5rem] pt-[2rem]">{children}</div>
        </main>
      </>
    );

}
