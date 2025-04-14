"use client";
import React from "react";
import cartImage from "../../public/cart.png";
import accountImage from "../../public/account.png";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const NavIcons = () => {
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const router = useRouter();

  const isLoggedIn = false;

  const handleAccount = () => {
    if (!isLoggedIn) {
      router.push("/login");
    }
    setIsAccountOpen((prev) => !prev);
  };

  return (
    <div className="flex items-center gap-4 xl:gap-6 relative">
      <Image
        src={accountImage}
        alt=""
        width={24}
        height={24}
        className="cursor-pointer"
        onClick={handleAccount}
      />
      {isAccountOpen && (
        <div className="absolute p-4 ronded-md top-12 left-0 text-sm shadow-md z-20">
          <Link href="/">Account</Link>
          <div className="mt-2 cursor-pointer">Logout</div>
        </div>
      )}
      <Image
        src={cartImage}
        alt=""
        width={24}
        height={24}
        className="cursor-pointer"
        onClick={() => setIsCartOpen((prev) => !prev)}
      />
      {isCartOpen && <CartModal />}
      </div>
  );
};

export default NavIcons;
