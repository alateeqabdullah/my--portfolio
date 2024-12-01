import memojiImage from "@/assets/images/memoji-computer.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import { HeroOrbit } from "@/components/HeroOrbit";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <main className="min-h-screen pt-40 " >
      <div className="container">
        <div className="flex flex-col items-center">
          <Image
            src={memojiImage}
            alt="Person peeking from behind laptop"
            className="size-[100px]"
          />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="bg-green-500 absolute inset-0 rounded-full animate-ping-large"></div>
            </div>
            <div className="text-sm font-medium">
              Available for new job opportunities
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-lg md:max-w-3xl mx-auto">
        <h1 className=" font-serif font-bold text-3xl md:text-5xl text-center mt-8 z-50 tracking-wide">
          Building Exceptional User Experiences
        </h1>
        <p className="mt-4 text-center text-xl font-bold text-emerald-300/90 md:text-2xl">
          {` Hi! I'm Abdullah, a Front-end React Developer.`}
       
        </p>
      </div>
      <div className="flex z-50 flex-col md:flex-row justify-center items-center mt-10 mb-32 gap-4">
        <Link
          target="_blank"
          href={"/avatar.jpg"}
          className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl"
        >
          <span className="font-semibold">My Resume</span>
          <ArrowDown className="size-4" />
        </Link>
        <Link
          href={"/#about"}
          download
          className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl"
        >
          <span className="">🖐</span>
          <span className="font-semibold">Lets Connect</span>
        </Link>
      </div>
    </main>
  );
};
