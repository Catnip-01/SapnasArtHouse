"use client";
import React from "react";
import cartImage from "../../public/cart.png";
import accountImage from "../../public/account.png";
import Image from "next/image";

const NavIcons = () => {
  return <div className = "flex items-center gap-4 xl:gap-6">
    <Image src = {accountImage} alt = "" width = {24} height = {24} className = "cursor-pointer"/>
    <Image src = {cartImage} alt = "" width = {24} height = {24} className = "cursor-pointer"/>

  </div>;
};

export default NavIcons;
