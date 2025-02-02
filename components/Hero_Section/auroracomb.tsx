"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "./aurora-background";
import Link from "next/link";
import { useGetData } from "@/src/hooks/usePortfolioData";

export default function AuroraBackgroundDemo() {
  const { data, loading, error } = useGetData();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!data) return null;

  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-3xl md:text-7xl font-bold text-center metallic-text">
          {data.hero.name}
        </div>
        <div className="text-center font-extralight text-base md:text-2xl py-4 metallic-text">
          {data.hero.tagline}
        </div>
        <Link 
          href={data.hero.resumeUrl} 
          className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-5 py-4"
        >
          <span className="metallic-text">{data.hero.resumeText}</span>
        </Link>
      </motion.div>
    </AuroraBackground>
  );
}
