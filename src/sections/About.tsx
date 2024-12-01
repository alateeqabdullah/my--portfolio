"use client";

import AboutHeader from "@/components/AboutHeader";
import AboutCard from "@/components/AboutCard";


export const AboutSection = () => {

  return (
    <section id="about" className="py-20 lg:py-28">
      <main className="container">
        <AboutHeader />
        <AboutCard />

      </main>
    </section>
  );
};
