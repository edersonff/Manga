import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="bg-neutral-800 w-full mt-12 py-4">
      <div className="content mx-auto">
        <div className="flex justify-between">
          <Link href="/" className="h-full py-2 selectDisable">
            <Image
              src="/logo.png"
              className="cursor-pointer object-scale-down h-full min-w-20"
              width={100}
              height={100}
              alt="logo"
            />
          </Link>
          <div>
            <h2 className="text-white text-2xl font-bold">Sobre</h2>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              cursus, risus id ultrices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
