"use client";
import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Loader from '../components/Loader/Loader'; 
import AuroraBackgroundDemo from "@/components/Hero_Section/auroracomb";
import GoogleGeminiEffectDemo from "@/components/Top_Project/geminicomb";
import ThreeDCardDemo from "@/components/3DCard/3dcardcomb";
import HeroScrollDemo from "@/components/SkillSet/containerscrollcomb";
import MeteorsDemo from "@/components/Services/meteorcomb";
import { AnimatedTooltipPreview } from "@/components/ContactUs/animatedcomb";
import { CardStackDemo } from '@/components/Testimonials/cardstackcom';

interface FadeUpComponentProps {
  children: React.ReactNode;
}

const FadeUpComponent: React.FC<FadeUpComponentProps> = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`transition-opacity duration-1000 transform ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {children}
    </div>
  );
};

export default function Page() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2800);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    (function(c: Window, l: Document, a: string, r: string, i: string) {
      (c as any)[a] = (c as any)[a] || function() { ((c as any)[a].q = (c as any)[a].q || []).push(arguments) };
      const t: HTMLScriptElement = l.createElement(r) as HTMLScriptElement;
      t.async = true; 
      t.src = "https://www.clarity.ms/tag/" + i;
      const y = l.getElementsByTagName(r)[0] as HTMLElement; 
      y.parentNode!.insertBefore(t, y);
    })(window, document, "clarity", "script", "n79farsb72");
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="bg-black pb-[20px]">
      <FadeUpComponent>
        <AuroraBackgroundDemo />
      </FadeUpComponent>
      <FadeUpComponent>
        <GoogleGeminiEffectDemo />
      </FadeUpComponent>
      <h1 className="flex justify-center text-center text-4xl dark:text-white metallic-text">What I Offer</h1>
      <FadeUpComponent>
        <MeteorsDemo />
      </FadeUpComponent>
      <FadeUpComponent>
        <HeroScrollDemo />
      </FadeUpComponent>
      <h1 className="flex justify-center text-center text-4xl dark:text-white metallic-text">My Works</h1><br/>
      <p className="flex justify-center text-center mettalic-text font-mono">Touch the cards to view 3D effect</p><br/>
      <ThreeDCardDemo />
      <div className='pb-[100px] md:pb-0'>
        <FadeUpComponent>
          <h1 className='px-[15px] mt-[10%] flex justify-center text-center text-4xl dark:text-white metallic-text'>Collaborators Feedback</h1>
          <CardStackDemo />
        </FadeUpComponent>
      </div>
      <FadeUpComponent>
        <div className="mt-[10%]">
          <h1 className="text-bold md:text-4xl text-4xl dark:text-white metallic-text text-center">Contact Me</h1>
          <div className="mt-[5%]">
          </div>
        </div>
        <AnimatedTooltipPreview />
      </FadeUpComponent>
      <div>
        <p className="text-center text-gray-400 mt-40 text-[9px] font-mono">
         - Powered by <a href='https://foliolynkr.vercel.app/'><span className="text-white">@Folio Lynkr</span></a> -
        </p>
      </div>
    </div>
  );
}
