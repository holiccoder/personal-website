"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { FiMoon, FiSun } from "react-icons/fi";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import Image from 'next/image'
import WebsiteLogo from '@/app/assets/logo-cornflower-blue.png'
import WebsiteLightLogo from '@/app/assets/logo-light.png'
import {useTranslations} from "next-intl";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useEffect } from "react";


const Header = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations('home');
  const menuItems: { [key: string]: string } = t.raw('navigation')

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

    return (
    <div className="fixed top-0 left-0 right-0 flex justify-center z-50 pt-4 px-8">
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-background/80 backdrop-blur-md rounded-full shadow-lg py-2 px-2 flex items-center w-full max-w-5xl mx-auto justify-between"
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-full hover:bg-muted transition-colors mr-6"
          aria-label="Toggle menu"
        >
          {isOpen ? <HiOutlineX size={24} /> : <HiOutlineMenu size={24} />}
        </button>

        <div className="hidden md:flex flex-1 justify-center">

          <nav className="flex items-center gap-8 text-sm md:text-base">

            {Object.entries(menuItems).map(([key, value]) => (
            <a
                key={key}
                href={`#${key}`}
                className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors font-mono"
            >
              {value}
            </a>
            ))}
          </nav>

        </div>
        <LanguageSwitcher/>

        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 md:ml-2 ml-auto rounded-full hover:bg-muted transition-colors"
            aria-label="Toggle dark mode"
        >
          {theme === "dark" ? <FiSun size={20} /> : <FiMoon size={20} />}
        </button>
      </motion.header>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-16 left-4 right-4 bg-background/90 backdrop-blur-md shadow-lg rounded-lg py-4 flex flex-col items-center space-y-4"
          >
            {Object.entries(menuItems).map(([key, value]) => (
              <a
                key={key}
                href={`#${key}`}
                className="text-lg font-mono text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {value}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;
