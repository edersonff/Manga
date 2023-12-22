"use client";
import { animeLoad } from "@/static/lottie";
import { CircularProgress } from "@mui/joy";
import Lottie from "lottie-react";
import React from "react";
import colors from "tailwindcss/colors";
export default function Loading() {
  return (
    <div className="h-full w-full center">
      <CircularProgress
        sx={{
          "--CircularProgress-size": "100px",
          "--CircularProgress-progressColor": colors.orange[600],
        }}
        thickness={10}
        className="absolute p-5"
      >
        <Lottie animationData={animeLoad} loop={true} autoplay={true} />
      </CircularProgress>
    </div>
  );
}
