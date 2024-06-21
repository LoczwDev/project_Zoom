import React from "react";
import { GoSearch } from "react-icons/go";

export const FormSearch = () => {
  return (
    <form className="relative w-1/3">
      {/* Search */}
      <input
        className="w-full px-5 py-1.5 outline-none border border-hard dark:border-slate-500 rounded-full"
        placeholder="Search..."
      />
      <button className="absolute transform translate-y-1/2 top-0 right-3">
        <GoSearch size={20} />
      </button>
    </form>
  );
};
