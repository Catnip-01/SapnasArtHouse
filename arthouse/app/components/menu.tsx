"use client";

import React, { useState } from "react";
import Image from "next/image";
import menuImage from "../../public/menu.png";
import Link from "next/link";

const Menu = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Image
        src={menuImage}
        alt=""
        width={28}
        height={28}
        className="cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className="absolute bg-black text-white left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col items-center gap-8 justify-center text-xl z-10">
          <Link href="/">Home</Link>
          <Link href="/">Cart</Link>
          <Link href="/">Paintings</Link>
          <Link href="/">Login</Link>
        </div>
      )}
    </div>
  );
};

export default Menu;
