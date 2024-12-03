import React from "react";

export function WorkFilter({ active, children, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`pb-4 text-sm font-normal tracking-wide transition-colors relative ${
        active
          ? "text-black after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-black"
          : "text-[#999999] hover:text-black"
      }`}
    >
      {children}
    </button>
  );
}
