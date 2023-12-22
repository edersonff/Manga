"use client";

import React from "react";
import SidebarSocial from "./social";
import { FaDiscord, FaYoutube, FaFacebook } from "react-icons/fa";
import { Tab, TabList, Tabs } from "@mui/joy";
import colors from "tailwindcss/colors";

export default function Sidebar() {
  return (
    <>
      <div className="flex gap-2 bg-slate-800 p-1.5 mb-4 rounded-2xl">
        <SidebarSocial
          Icon={FaDiscord}
          href="/"
          title="Discord"
          color="#7289da"
        />
        <SidebarSocial
          Icon={FaYoutube}
          href="/"
          title="Youtube"
          color="#ff0000"
        />
        <SidebarSocial
          Icon={FaFacebook}
          href="/"
          title="Facebook"
          color="#3b5998"
        />
      </div>
      <div className="bg-grey-900 px-3 py-3">
        <div className="">
          <h3 className="font-bold">Os 10 mais lidos</h3>
        </div>
        <hr className="border-grey-700 my-3" />
        <Tabs
          variant="outlined"
          className="bg-transparent color-white font-bold"
          sx={{
            "--variant-plainActiveBg": "transparent",
            "--variant-plainActiveColor": colors.orange[500],
            "--variant-plainHoverBg": "transparent",
            "--variant-plainHoverColor": colors.orange[500],
            "--variant-borderWidth": "0px",
          }}
        >
          <TabList>
            {["Semana", "Mês", "Ano", "Todos"].map((tab) => (
              <Tab
                sx={{
                  transition: "all 0.3s ease",
                }}
                key={tab}
              >
                {tab}
              </Tab>
            ))}
          </TabList>
        </Tabs>
      </div>
    </>
  );
}
