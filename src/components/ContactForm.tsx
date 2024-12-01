"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { contacts } from "../../lib/constant";
import Link from "next/link";

export default function ContactForm() {
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement> | any) {
    const { name, value } = e.target;
    setUserInput({
      ...userInput,
      [name]: value,
    });
  }

  async function handleSumit(e: React.ChangeEvent<HTMLInputElement> | any) {
    e.preventDefault();

    // const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    // const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    // const userID = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    const serviceID = "service_euxvqgp";
    const templateID = "template_9wuuzys";
    const userID = "R19bsXpvSv0l3TW9s";

    try {
      const emailParams = {
        name: userInput.name,
        email: userInput.email,
        message: userInput.message,
      };
      const res = await emailjs.send(
        serviceID,
        templateID,
        emailParams,
        userID
      );

      if (res.status === 200) {
        alert("Message sent successfully!");
        setUserInput({
          name: "",
          email: "",
          message: "",
        });
      }
    } catch (error) {
      alert("Failed to send message. Pls try again later ");
    }
  }

  return (
    <main className="container my-36 ">
      <h3 className=" font-bold my-4 text-center ">Write me a Message 👇</h3>

      <section className=" md:max-w-[60%]  flex justify-center flex-col-reverse text-white mx-auto  ">
        <section>
          <div className=" flex flex-row mt-10 gap-10 items-center justify-center   ">
            {contacts.map((contact) => (
              <Link
                key={contact.title}
                href={contact.href}
                target="_blank"
                className="text-3xl  "
              >
                {contact.icon}
              </Link>
            ))}
          </div>
        </section>
        <section className="py-4 flex flex-col rounded-lg  ">
          <form onSubmit={() => {}} className="font-semibold opacity-80 px-4 ">
            <div className=" flex flex-col  ">
              <input
                type="text"
                name="name"
                value={userInput.name}
                onChange={handleChange}
                placeholder="Full Name"
                required
                className="form-input p-2 "
              />
            </div>
            <div className="flex flex-col my-3 ">
              <input
                type="email"
                name="email"
                value={userInput.email}
                onChange={handleChange}
                placeholder="Email Address "
                required
                className=" form-input p-2 "
              />
            </div>
            <div className="flex flex-col my-3 ">
              <textarea
                name="message"
                value={userInput.message}
                onChange={handleChange}
                placeholder="Please enter your message "
                required
                className=" h-40 form-input p-2 "
              />
            </div>

            <button
              type="submit"
              className=" bg-emerald-400 text-gray-700 py-2 px-4 rounded-md w-full "
            >
              Send Message
            </button>
          </form>
        </section>
      </section>
    </main>
  );
}
