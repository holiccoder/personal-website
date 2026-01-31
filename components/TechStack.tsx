"use client"

import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { FaPython, FaHtml5, FaCss3Alt, FaWordpress, FaShopify, FaReact, FaMagento } from "react-icons/fa"
import { SiTypescript, SiNextdotjs, SiLaravel, SiMysql, SiGraphql, SiTailwindcss, SiWoocommerce } from "react-icons/si"
import { RiJavascriptFill, RiPhpFill, RiVuejsFill } from "react-icons/ri";
import { useState, useEffect } from "react";

const techStack = [
  { name: "HTML", icon: FaHtml5, color: "#E34F26" },
  { name: "CSS", icon: FaCss3Alt, color: "#1572B6" },
  { name: "Javascript", icon: RiJavascriptFill, color: "#009688" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "PHP", icon: RiPhpFill, color: "#777BB4" },
  { name: "Python", icon: FaPython, color: "#3776AB" },
  { name: "Next.js", icon: SiNextdotjs, color: { light: "#000000", dark: "#FFFFFF" } },
  { name: "TailwindCSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
  { name:"SQL", icon: SiMysql, color: "#00758F"},
  { name: "WordPress", icon: FaWordpress, color: "#21759B" },
  { name: "Shopify", icon: FaShopify, color: "#95A5A6" },
  { name: "Vue.js", icon: RiVuejsFill, color: "#4FC08D" },
  { name: "React", icon: FaReact, color: "#61DAFB" },
  { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
   { name: "WooCommerce", icon: SiWoocommerce, color: "#96588A" },
   { name: "Magento", icon: FaMagento, color: "#EE672F" },
]

const TechStack = () => {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null
  }

  return (
    <section id="tech" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Tech Stack</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {techStack.map((tech, index) => {
            const IconComponent = tech.icon
            const iconColor =
              typeof tech.color === "string"
                ? tech.color
                : theme === "dark"
                ? tech.color.dark
                : tech.color.light

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center bg-white dark:bg-gray-800 bg-opacity-50 dark:bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg p-4 shadow-lg"
              >
                <IconComponent className="text-6xl mb-2" style={{ color: iconColor }} />
                <span className="text-sm text-center font-medium">{tech.name}</span>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default TechStack
