"use client";
import React from "react";
import { ContainerScroll } from "./container-scroll-animation";
import Image from "next/image";
import { useGetData } from "@/hooks/getData";

export default function HeroScrollDemo() {
  const { data, loading, error } = useGetData();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!data) return null;

  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white metallic-text">
              Scroll Down to view my <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Skill Sets
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={data.skillset.image}
          alt="Skills"
          height={720}
          width={600}
          className="mx-auto rounded-2xl object-fit h-[100%] object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}

