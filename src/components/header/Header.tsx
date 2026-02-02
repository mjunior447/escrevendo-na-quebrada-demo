'use client';

import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";

const Header = () => {
  return (
    <header className="w-full z-50">
      <HeaderDesktop />
      <HeaderMobile />
    </header>
  )
}

export default Header;