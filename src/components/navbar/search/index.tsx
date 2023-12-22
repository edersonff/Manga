import { Input } from "@mui/joy";
import React, { useMemo, useState } from "react";
import { FiSearch } from "react-icons/fi";

export default function NavbarSearch() {
  const [isFocus, setIsFocus] = useState(false);

  const styleOverBg = useMemo(() => {
    return isFocus
      ? "opacity-100 pointer-events-auto"
      : "opacity-0 pointer-events-none";
  }, [isFocus]);
  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 transition-opacity duration-300 z-40 ${styleOverBg}`}
      ></div>
      <Input
        startDecorator={<FiSearch className="stroke-[3px] text-xl" />}
        placeholder="Procurar por mangá..."
        variant="outlined"
        className="rounded-full font-semibold relative z-50 focus-w"
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
      />
    </>
  );
}
