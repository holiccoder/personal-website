"use client"

import Image from "next/image"
import profilePic from "@/app/assets/avatar.png"
import { useTranslations } from "next-intl"


const About = () => {
  const t = useTranslations('home');
  return (
    <section id="about" className="py-20 bg-gray-100 dark:bg-black relative">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col items-center">
        <div className="bg-white dark:bg-black shadow-lg rounded-2xl p-6 md:p-10 max-w-5xl w-full flex flex-col md:flex-row items-center border border-gray-200 dark:border-gray-800">
          <div className="w-40 h-60 md:w-60 md:h-80 flex-shrink-0 rounded-lg overflow-hidden shadow-md">
            <Image 
              src={profilePic} 
              alt="sachu" 
              className="w-full h-full object-cover" 
            />
          </div>
          <div className="mt-6 md:mt-0 md:ml-10 text-center md:text-left flex flex-col">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">About Me</h2>
            <div dangerouslySetInnerHTML={{__html: t.raw('about.description')}}/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About