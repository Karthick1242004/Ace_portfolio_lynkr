"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./3d-card";
import Link from "next/link";
import { useGetData } from "@/hooks/getData";

export default function ThreeDCardDemo() {
  const { data, loading, error } = useGetData();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!data) return null;

  return (
    <div className="flex flex-row flex-wrap justify-center gap-[2%] px-[3%]">
      {data.projects.map((card, index) => (
        <CardContainer key={index} className="inter-var">
          <CardBody className="bg-black relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.1] border-white/[0.2] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
            <div className="flex flex-row justify-between">
              <CardItem translateZ="50" className="text-xl font-bold text-white dark:text-white metallic-text">
                {card.projectName}
              </CardItem>
              <CardItem className="text-white font-mono metallic-text">
                {card.projectType}
              </CardItem>
            </div>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-full mt-2 dark:text-white text-justify  "
            >
              {card.projectContent}
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src={card.projectImage}
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-20">
              <CardItem
                translateZ={20}
                as={Link}
                href={card.projectUrl}
                target="__blank"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white metallic-text"
              >
                Try Now →
              </CardItem>
              <CardItem
                translateZ={20}
                as={Link}
                href={card.githubUrl}
                target="__blank"
                className="px-4 py-2 rounded-xl bg-white dark:bg-white dark:text-black text-black text-xs font-bold"
              >
                GitHub
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      ))}
    </div>
  );
}
