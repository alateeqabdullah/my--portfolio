"use client";

import { contacts } from "../../lib/constant";
import Link from "next/link";
import { useForm, ValidationError } from "@formspree/react";
import Thanks from "./Thanks";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("manyarjq")
  
  if (state.succeeded) {
    return  <Thanks />
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
          <form
            onSubmit={handleSubmit}
            className="font-semibold opacity-80 px-4 "
          >
            <div className=" flex flex-col  ">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                className="form-input p-2 "
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <div className="flex flex-col my-3 ">
              <input
                type="email"
                name="email"
                placeholder="Email Address "
                required
                className=" form-input p-2 "
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <div className="flex flex-col my-3 ">
              <textarea
                name="message"
                placeholder="Please enter your message "
                required
                className=" h-40 form-input p-2 "
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>

            <button
              type="submit"
              disabled={state.submitting}
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
