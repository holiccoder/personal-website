"use client"
import {motion} from "framer-motion";
import {CiMail} from "react-icons/ci";
import {FaGithub, FaInstagram, FaLine, FaLinkedin} from "react-icons/fa";
import {FaMedium, FaXTwitter} from "react-icons/fa6";

const socialLinks = [
    { name: "Mail", icon: CiMail, url: "mailto:support@tycoon.pro" },
    { name: "Line", icon: FaLine, url: "https://line.me/ti/tycooninc" },
    { name: "GitHub", icon: FaGithub, url: "https://github.com/tycooninc" }
]

const Footer = () => {

  return (
      <footer className="py-6 bg-background text-center">

          <div className="flex justify-center space-x-6 sm:space-x-8 my-4">
              {socialLinks.map((social, index) => (
                  <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{opacity: 0, y: 20}}
                      whileInView={{opacity: 1, y: 0}}
                      transition={{duration: 0.5, delay: index * 0.1}}
                      className="text-3xl sm:text-4xl md:text-3xl text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                  >
                      <social.icon/>
                      <span className="sr-only">{social.name}</span>
                  </motion.a>
              ))}
          </div>
          <div className="container mx-auto flex justify-center items-center">
              <div className="text-sm text-muted-foreground">© {new Date().getFullYear()} Tycoon.Ltd All rights reserved.</div>
              
          </div>
      </footer>
  )
}

export default Footer

