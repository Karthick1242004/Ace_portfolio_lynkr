"use client";
import { CardStack } from "./card-stack";
import { useGetData } from "@/src/hooks/usePortfolioData";
import { cn } from "@/utils/cn";
export function CardStackDemo() {
  const { data, loading, error } = useGetData();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!data) return null;

  const cards = data.testimonials.map(testimonial => ({
    id: testimonial.id,
    name: testimonial.name,
    designation: testimonial.designation,
    content: <p>{testimonial.content}</p>
  }));

  return (
    <div className="h-[40rem] flex items-center justify-center w-full px-4 mt-[-60%] md:mt-[-13%]">
      <CardStack items={cards} />
    </div>
  );
}

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold  text-[#4ade80] bg-[#042f2e]  px-1 py-0.5 rounded-[0.2rem]",
        className
      )}
    >
      {children}
    </span>
  );
};
