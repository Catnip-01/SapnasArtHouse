import Link from "next/link";
import React from "react";
import Menu from "./menu";
import artHouseLogo from "../../public/artHouse.svg";
import Image from "next/image";
import NavIcons from "./navIcons";
import SearchBar from "./searchBar";

const Header = () => {
  return (
    <div className="h-20 px-4 md:px-8 relative">
      {/* mobile pages */}
      <div className="md:hidden h-full flex items-center justify-between">
        <div className="text-2xl tracking-wide">
          <Link href="/">
            <Image
              src={artHouseLogo}
              alt=""
              width={100}
              height={100}
              className="filter invert"
            />
          </Link>
        </div>
        <Menu />
      </div>

      {/* tablet screens */}
      <div className="hidden md:flex items-center justify-between h-full">
        <div className="w-1/3 left={0}">
          <Link href="/">
            <Image
              src={artHouseLogo}
              alt=""
              width={100}
              height={100}
              className="filter invert"
            />
          </Link>
        </div>

        <div className="w-2/3 flex items-center justify-between gap-8">
          <div className="flex-1">
            <SearchBar />
          </div>

          <NavIcons />
        </div>
      </div>
    </div>
  );
};

export default Header;
