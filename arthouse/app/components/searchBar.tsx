"use client";

import React from "react";
import searchImage from "../../public/search.png";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SearchBar = () => {
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;

    if (name) {
      // Use the router.push method to navigate
      router.push(`/list?name=${encodeURIComponent(name)}`);
    }
  };

  return (
    <div>
      <form
        className="flex ic justify-between flex-1 gap-4 bg-gray-100 rounded-md p-2"
        onSubmit={handleSearch}
      >
        <input
          type="text"
          name="name" // Add a name attribute so FormData can retrieve it
          placeholder="Search"
          className="p-1 flex-1 outline-none"
        />
        <button type="submit" className="cursor-pointer">
          <Image src={searchImage} alt="Search Icon" height={24} width={24} />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
