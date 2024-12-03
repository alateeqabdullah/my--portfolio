import ArrowDown from "@/assets/icons/arrow-down.svg";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaMessage, FaXTwitter } from "react-icons/fa6";
import { MdAttachEmail, MdEmail } from "react-icons/md";

export const navLinks = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Projects", href: "/projects" },
  { title: "contact", href: "/contact" },
];

export const buttonData = [
  {
    title: "Explore My Work ",
    icon: <ArrowDown />,
    href: "#projects",
  },

  {
    title: "Let's Connect",
    icon: "🖐",
    href: "#contact",
  },
];

export const socialLinks = [
  {
    title: <FaGithub />,
    href: "https://github.com/alateeqabdullah",
  },
  {
    title: <FaXTwitter />,
    href: "https://x.com/AbubakarAb72713",
  },
  {
    title: <FaLinkedin />,
    href: "/https://www.linkedin.com/in/abubakar-abdullah-18b009271",
  },
];

export const MediaLinks = [
  {
    title: "WhatsApp",
    href: "https://wa.me/+2347031170308",
  },
  {
    title: "Twitter",
    href: "https://x.com/AbubakarAb72713",
  },
 
  {
    title: "Linkedin",
    href: "/https://www.linkedin.com/in/abubakar-abdullah-18b009271",
  },
];

export const contacts = [
  {
    title: "Email",
    icon: <MdEmail />,
    href: "mailto:alateeqabdullah36@gmail.com",
   
  },
  {
    title: "WhatsApp",
    icon: <FaWhatsapp />,
    href: "https://wa.me/+2347031170308",
  },
  {
    title: "LinkedIn",
    icon: <FaLinkedin />,
    href: "https://www.linkedin.com/in/abubakar-abdullah-18b009271",
  },
];
