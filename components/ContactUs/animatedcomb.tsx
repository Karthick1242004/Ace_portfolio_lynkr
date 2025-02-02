"use client";
import React from "react";
import { AnimatedTooltip } from "./animated-tooltip";
import Link from "next/link";
import { useGetData } from "@/hooks/getData";

const images = {
  LinkedIn: "/linkedin.png",
  Github: "https://cdn4.iconfinder.com/data/icons/miu-black-social-2/60/github-1024.png",
  Gmail: "/gmail_logo.png",
  Instagram: "https://img.freepik.com/free-vector/instagram-vector-social-media-icon-7-june-2021-bangkok-thailand_53876-136728.jpg",
  Whatsapp: "https://img.freepik.com/free-vector/whatsapp-icon-design_23-2147900929.jpg",
  Thread: "https://img.freepik.com/free-vector/threads-app-logo-icon-isolated-white-background_1017-45264.jpg"
};

export function AnimatedTooltipPreview() {
  const { data, loading, error } = useGetData();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!data) return null;

  const people = data.contacts.map(contact => ({
    ...contact,
    link: '',
    image: images[contact.name as keyof typeof images]
  }));

  return (
    <>
      <div className="flex flex-row items-center justify-center mb-10 w-full">
        {people.map((person) => (
          <Link href={person.url} key={person.id} passHref>
            <div className="cursor-pointer">
              <AnimatedTooltip items={[person]} />
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
