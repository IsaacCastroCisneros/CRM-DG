import HeaderNav from '@/components/HeaderNav/HeaderNav';
import NavbarUltimate from '@/components/NavbarUltimate/NavbarUltimate';
import MyPopUp from './components/MyPopUp';
import { MyNotification } from './components/MyNotification';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

    return (
      <>
        <MyPopUp />
        <MyNotification/>
        <header className="w-[5rem] mob:w-[3rem] h-[100%] relative z-[999]">
           <NavbarUltimate />
        </header>
        <main className="flex-1 overflow-hidden relative z-[9] bg-[#F8F9FB]">
           <HeaderNav />
          <div className="py-[1.2rem] px-[2.5rem] pt-[2rem]">{children}</div>
        </main>
      </>
    );

}
