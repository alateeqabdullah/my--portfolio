"use client"

import { Card } from "@/components/Card";
import bookImage from "@/assets/images/Quran.jpg";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReacIcon from "@/assets/icons/react.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import GithubIcon from "@/assets/icons/github.svg";
import Nextjs from "@/assets/icons/nextjs.svg";
import Sass from "@/assets/icons/sass.svg";
import Bootstrap from "@/assets/icons/bootstrap.svg";
import Git from "@/assets/icons/git.svg";
import MongoDb from "@/assets/icons/mongodb.svg";
import Prisma from "@/assets/icons/prisma-orm.svg";
import TailwindCss from "@/assets/icons/tailwindcss.svg";
import TypeScript from "@/assets/icons/typescript.svg";
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { motion } from "framer-motion";
import { useRef } from "react";


const toolboxItems = [
  {
    title: "HTML5",
    iconType: HTMLIcon,
    
  },
  {
    title: "CSS3",
    iconType: CssIcon,
  },
  {
    title: "Sass/Scss",
    iconType: Sass,
  },
  {
    title: "Bootstraps",
    iconType: Bootstrap,
  },
  {
    title: "TailwindCss",
    iconType: TailwindCss,
  },
  {
    title: "JavaScript",
    iconType: JavascriptIcon,
  },
  {
    title: "TypeScript",
    iconType: TypeScript,
  },
  {
    title: "React",
    iconType: ReacIcon,
  },
  {
    title: "Nextjs",
    iconType: Nextjs,
  },
  {
    title: "PrismaDB",
    iconType: Prisma,
  },
  {
    title: "MongoDb",
    iconType: MongoDb,
  },
  {
    title: "Chrome",
    iconType: ChromeIcon,
  },
  {
    title: "Github",
    iconType: GithubIcon,
  },
 
];

const hobbies = [
  {
    title: "Quran ",
    emoji: "📖",
    left: "5%",
    top: "5%",
  },
  {
    title: "Movies ",
    emoji: "🎬",
    left: "50%",
    top: "5%",
  },
  {
    title: "Gaming",
    emoji: "🎮",
    left: "10%",
    top: "35%",
  },
  {
    title: "Learning",
    emoji: "🏫",
    left: "35%",
    top: "40%",
  },
  {
    title: "Competition",
    emoji: "🧭",
    left: "70%",
    top: "10%",
  },
  {
    title: "Teaching",
    emoji: "👩‍🏫",
    left: "70%",
    top: "45%",
  },
  {
    title: "Fitness",
    emoji: "👟",
    left: "5%",
    top: "65%",
  },
  {
    title: "Reading",
    emoji: "📚",
    left: "45%",
    top: "70%",
  },
];


export default function AboutCard() {
      const constrainRef = useRef(null);

    return (
      <div className="mt-20 flex flex-col gap-8">
        <h2 className="text-center font-bold text-xl md:text-3xl text-white/80 ">
          {`I'm`} very Flexible with Time Zone <br />
          Communications
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
          <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
            <Image
              src={mapImage}
              alt="map"
              className="h-full w-full object-cover object-left-top"
            />
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full 
           after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2
            after:rounded-full after:outline-gray-950/30"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping-large [animation-duration:2s]"></div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
              <Image
                src={smileMemoji}
                alt="smiling memoji"
                className="size-20"
              />
            </div>
          </Card>

          {/* <Card className="h-[320px] md:col-span-2 lg:col-span-1">
          <CardHeader
            title="My Life"
            description="Explore the book shaping my perspectives."
          />
          <div className="w-40 mx-auto mt-2 md:mt-0">
            <Image src={bookImage} alt="Book cover" />
          </div>
        </Card> */}

          <Card className="h-[320px] md:col-span-3 lg:col-span-2">
            <CardHeader
              title="My Toolbox"
              description="Explore the technologies and tools I use to craft exceptional digital experiences."
              className=""
            />
            <ToolboxItems
              items={toolboxItems}
              className=""
              itemsWrapperClassName="animate-move-left [animation-duration:30s]"
            />
            <ToolboxItems
              items={toolboxItems}
              className="mt-6"
              itemsWrapperClassName="animate-move-right [animation-duration:20s]"
            />
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:grid-cols-3">
          <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
            <CardHeader
              title="Beyond the code"
              description="Explore my interests and hobbies beyond the digital realm."
              className="px-6 py-6"
            />
            <div className="relative flex-1" ref={constrainRef}>
              {hobbies.map((hobby) => (
                <motion.div
                  key={hobby.title}
                  className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                  style={{
                    left: hobby.left,
                    top: hobby.top,
                  }}
                  drag
                  dragConstraints={constrainRef}
                >
                  <span className="font-medium text-gray-950">
                    {hobby.title}
                  </span>
                  <span>{hobby.emoji}</span>
                </motion.div>
              ))}
            </div>
          </Card>

          <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
            <Image
              src={mapImage}
              alt="map"
              className="h-full w-full object-cover object-left-top"
            />
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full 
           after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2
            after:rounded-full after:outline-gray-950/30"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping-large [animation-duration:2s]"></div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
              <Image
                src={smileMemoji}
                alt="smiling memoji"
                className="size-20"
              />
            </div>
          </Card>
        </div>
      </div>
    );
}
