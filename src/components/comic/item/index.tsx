import { Comic } from "@/@types/model/comic";
import { Badge, ColorPaletteProp, Skeleton } from "@mui/joy";
import Link from "next/link";
import React, { useMemo } from "react";
import { FaEye } from "react-icons/fa";

export const flagColors: { [key: string]: ColorPaletteProp } = {
  novo: "warning",
  popular: "success",
  atualizou: "primary",
  top: "danger",
};

export default function ComicItem({
  comic: {
    image,
    title,
    description,
    episode,
    views,
    languages,
    owner,
    rating,
  },
  flag,
}: {
  comic: Comic;
  flag?: keyof typeof flagColors;
}) {
  const flagColor = useMemo(() => {
    return flag ? flagColors[flag] : "neutral";
  }, [flag]);

  return (
    <Link
      href={`/comic/`}
      className="relative w-44 comic-parent hover:border-white border-transparent border transition-all duration-300 pb-2"
    >
      <div className="relative">
        <Skeleton variant="rectangular" className="absolute w-full h-full" />
        <div className="relative z-10">
          {flag && (
            <Badge
              badgeContent={flag}
              className={"absolute top-2 left-5 -rotate-12 stroke-2"}
              slotProps={{
                badge: {
                  className: "text-[10px] font-bold uppercase",
                },
              }}
              color={flagColor}
            />
          )}
          <img
            src={image}
            alt={title + " image"}
            className="w-44 h-60"
            // width={176}
            // height={240}
          />
          <div className="w-full bottom-0 absolute overflow-hidden">
            <div className="absolute-title flex flex-col pt-10 pb-2 px-2 transition-all duration-300 bg-gradient-to-b from-transparent via-black/70 to-black">
              <span className="text-white font-bold text-xs whitespace-nowrap overflow-ellipsis block title">
                {title}
              </span>
              <span className="text-gray-400 text-[10px] whitespace-nowrap">
                {owner}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="px-2 w-full relative z-10">
        <div className="flex justify-between text-xs items-center">
          <span className="text-base font-bold">#{episode}</span>
          <span className="text-gray-400">
            <FaEye className="inline-block mr-1" />
            {views}
          </span>
        </div>
        <span className="text-gray-400 text-[10px] block whitespace-nowrap overflow-ellipsis w-full overflow-hidden">
          {description}
        </span>
      </div>
    </Link>
  );
}
