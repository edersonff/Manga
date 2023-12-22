import Image from "next/image";
import Link from "next/link";
import React, { useMemo, useState } from "react";
import { IconType } from "react-icons";
import { FaDiscord } from "react-icons/fa";

export default function SidebarSocial({
  Icon,
  href,
  title,
  color,
}: {
  Icon: IconType;
  href: string;
  title: string;
  color: string;
}) {
  const [hover, setHover] = useState(false);

  const backgroundStyle = useMemo(() => {
    return hover
      ? { backgroundColor: color }
      : { backgroundColor: "transparent" };
  }, [hover, color]);

  const iconStyle = useMemo(() => {
    return hover ? { opacity: 1, bottom: 0 } : { opacity: 0, bottom: -20 };
  }, [hover]);

  const titleStyle = useMemo(() => {
    return hover
      ? { letterSpacing: -6, opacity: 0 }
      : { letterSpacing: 0, opacity: 1 };
  }, [hover]);
  return (
    <Link
      href={href}
      className="center py-4 overflow-hidden hover:text-white rounded-lg relative flex-1 transition-all duration-300"
      style={backgroundStyle}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="flex gap-2 items-center">
        <div
          className="w-full h-full absolute left-0 transition-all duration-500 delay-100"
          style={iconStyle}
        >
          <Icon className="absolute-center text-2xl " />
        </div>
        <span
          className="text-center font-semibold text-sm text-white transition-all duration-500 delay-100"
          style={titleStyle}
        >
          {title}
        </span>
      </div>
    </Link>
  );
}
