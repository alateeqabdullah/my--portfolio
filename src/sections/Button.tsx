"use client"

import { useRouter } from "next/navigation"

type ButtonProps = {
  children: React.ReactNode
}

export default function Button({ children }: ButtonProps) {
  
  
  return (
    <button
      className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl"
    >
    {children}
    </button>
  );
}



        // <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl"></button>
