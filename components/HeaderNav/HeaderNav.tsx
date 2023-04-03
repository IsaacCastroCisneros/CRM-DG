import React from 'react'
import UserMenuUltimate from '../NavbarUltimate/components/UserMenuUltimate/UserMenuUltimate';

export default function HeaderNav() {
  return (
    <nav className="min-h-[70px] shadow-[0_.1rem_1rem_0rem_#c5c7c5] w-[100%] bg-myWhite z-[999999999999] flex items-center justify-end">
      <UserMenuUltimate/>
    </nav>
  );
}
