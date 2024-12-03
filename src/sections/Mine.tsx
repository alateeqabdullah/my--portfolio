import Image from "next/image";
import { socialLinks } from "../../lib/constant";
import Link from "next/link";

export default function Mine() {
  return (
    <main className=" container  ">
      <section className="gap-x-20 flex flex-col md:flex-row justify-center items-center mt-20 ">
        <Image
          src={"/avatar.jpg"}
          width={300}
          height={50}
          alt="myAvatar"
          className="mb-16 md:mb-0 rounded-xl "
        />
        <div className=" text-center font-semibold tracking-widest leading-10  ">
          <p className=" text-gray-400  font-bold ">Hello, This is </p>
          <h2 className=" justify-center  text-3xl md:text-5xl flex lg:flex-row ">
            Abdullah <span className=" md:hidden mx-4 lg:flex  ">Abubakar</span>{" "}
          </h2>
          <p className="text-2xl text-emerald-300  "> React Developer</p>
          <p className=" leading-4 text-xs md:text-sm ">
            I transform designs into funcitonal, high-performing web
            applications. Lets discuss your next project.
          </p>

          <div className="flex flex-row gap-16  justify-center mt-8 border-b md:border-none pb-4 border-emerald-300 ">
            {socialLinks.map((social) => (
              <Link key={social.href} href={social.href}>
                <i className=" text-3xl hover:text-emerald-300 ">
                  {" "}
                  {social.title}
                </i>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
