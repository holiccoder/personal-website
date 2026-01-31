"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import profilePic from "@/app/assets/karan-ghibli.png";
import {useTranslations} from "next-intl";
import heroPic from "@/app/assets/hero.png";

const Hero = () => {
  // useEffect(() => {
  //   (async function () {
  //     const cal = await getCalApi({ namespace: "introductory-meet" });
  //     cal("floatingButton", {
  //       calLink: "karanshingde/introductory-meet",
  //       config: { layout: "month_view" },
  //     });
  //     cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
  //   })();
  // }, []);

  const t = useTranslations('home');

  return (
    <section id="home" className="min-h-screen pt-28 flex items-center justify-center relative overflow-hidden">
      <div className="text-center flex flex-col gap-4 z-10 items-center mx-8">

        <div>

          <motion.h1
              initial={{opacity: 0, y: -20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.5}}
              className="text-xl md:text-4xl font-bold mb-4 flex items-center justify-center"
          >
            <div dangerouslySetInnerHTML={{__html: t.raw('hero.title')}}/>
          </motion.h1>

          {/* Typing Effect */}
          <motion.div
              initial={{opacity: 0, y: -20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.8, delay: 0.1}}
              className="text-xl md:text-2xl mb-8 h-16 flex flex-col md:flex-row justify-center items-center"
          >
            <span className="mr-2">{t('hero.initial')}</span>
            <TypedText phrases={t.raw('hero.phrases')}/>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
              initial={{opacity: 0, scale: 0.8}}
              animate={{opacity: 1, scale: 1}}
              transition={{duration: 0.5, delay: 0.4}}
              className="flex justify-center space-x-4"
          >
            <a
                href="#contact"
                className="bg-white text-black px-6 py-2 rounded-full shadow-lg hover:bg-gray-200 transition-colors"
            >
              {t.raw('hero.buttons')[0]}
            </a>
            <a
                href="#services"
                className="bg-black text-white px-6 py-2 rounded-full shadow-lg hover:bg-gray-800 transition-colors"
            >
              {t.raw('hero.buttons')[1]}
            </a>
          </motion.div>

        </div>


        <motion.div
            initial={{opacity: 0, y: -20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5}}
            className="mx-auto mb-4"
        >
          <Image
              src={heroPic}
              alt="tycoon"
              className="mx-auto"
          />
        </motion.div>


      </div>
    </section>
  );
};

// Waving hand component with animation
const WavingHand = () => {
  const waveAnimation = {
    rotate: [0, 14, -8, 14, -4, 10, 0, 0],
  };

  return (
      <motion.span
          className="inline-block mx-2 transform-origin-bottom-right text-4xl md:text-5xl"
          animate={waveAnimation}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
            repeatDelay: 1,
          }}
          style={{originY: 0.7, originX: 0.7}}
      >
        👋
      </motion.span>
  );
};

// Typing effect component
const TypedText = ({phrases}: { phrases: string[] }) => {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const speed = isDeleting ? 30 : 50; // Faster typing speed
    const delay = isDeleting ? 20 : 50; // Delay for smooth effect
    const current = phrases[currentPhrase];

    const timer = setTimeout(() => {
      if (isDeleting) {
        setCurrentText(current.substring(0, currentText.length - 1));
      } else {
        setCurrentText(current.substring(0, currentText.length + 1));
      }

      if (!isDeleting && currentText === current) {
        setTimeout(() => setIsDeleting(true), 1200);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentPhrase((prev) => (prev + 1) % phrases.length);
      }
    }, isDeleting ? delay : speed);

    return () => clearTimeout(timer);
  }, [currentText, currentPhrase, isDeleting, phrases]);

  return (
    <span className="text-green-500 dark:text-green-400 inline-block text-left min-w-[180px]">
      {currentText}
      <span className="animate-blink">|</span>
    </span>
  );
};

export default Hero;
