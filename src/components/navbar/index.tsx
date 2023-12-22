"use client";

import { Input } from "@mui/joy";
import Image from "next/image";
import Link from "next/link";
import React, { useMemo, useState } from "react";
import { IconType } from "react-icons";
import { FaBook, FaFire, FaNewspaper } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { TbReload } from "react-icons/tb";
import colors from "tailwindcss/colors";
import NavbarSearch from "./search";

export default function Navbar() {
  return (
    <div className="center w-full bg-gray-800">
      <div className="w-full content flex gap-2 justify-between items-center h-20">
        <div className="flex gap-10 h-full">
          <Link href="/" className="h-full py-2 selectDisable">
            <img
              src="/logo.png"
              className="cursor-pointer object-scale-down h-full min-w-20"
              alt="logo"
            />
          </Link>
          <div className="flex gap-2 h-full">
            <NavbarLink href="/about" Icon={FaBook}>
              Mangás
            </NavbarLink>
            <NavbarLink href="/recent" Icon={TbReload}>
              Recentes
            </NavbarLink>
            <NavbarLink href="/popular" Icon={FaFire}>
              Mais Lidos
            </NavbarLink>
            <NavbarLink href="/news" Icon={FaNewspaper}>
              Notícias
            </NavbarLink>
          </div>
        </div>
        <NavbarSearch />
      </div>
    </div>
  );
}

export function NavbarLink({
  href,
  children,
  Icon,
}: {
  href: string;
  children: React.ReactNode;
  Icon: IconType;
}) {
  const [isHover, setIsHover] = useState(false);

  const childrenStyles = useMemo(() => {
    if (isHover) {
      return "left-[-120%]";
    }

    return "left-0";
  }, [isHover]);

  const changeTextStyles = useMemo(() => {
    if (isHover) {
      return "left-0";
    }

    return "left-[-120%]";
  }, [isHover]);

  return (
    <Link
      href={href}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className="h-full text-gray-200 flex gap-2 px-2 items-center border-b-2 border-b-gray-200 hover:border-orange-600 hover:text-orange-600 transition-all duration-300"
    >
      <Icon className="text-xl relative z-10" />
      <div className="flex-1 overflow-hidden relative">
        <div
          className={
            "relative center w-full h-full transition-all duration-500 delay-100 " +
            childrenStyles
          }
        >
          {children}
        </div>
        <div
          className={
            "absolute top-0 w-full h-full transition-all duration-500 delay-100 text-orange-600 " +
            changeTextStyles
          }
        >
          Seguir
        </div>
      </div>
    </Link>
  );
}
