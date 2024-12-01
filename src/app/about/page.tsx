import AboutHeader from "@/components/AboutHeader";
import AboutCard from "@/components/AboutCard";
import Mine from "@/sections/Mine";

export default function page() {
  return (
    <section className="py-20 container justify-center items-center lg:py-28">
      <main className=" min-h-screen ">
        <AboutHeader />
        <Mine />
        <AboutCard />
      </main>
    </section>
  );
}
