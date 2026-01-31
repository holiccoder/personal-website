"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import {useTranslations} from "next-intl";

const Contact = () => {

  const t = useTranslations('home');

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [status, setStatus] = useState<{ type: "success" | "error" | ""; message: string }>({
    type: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault()
    setStatus({ type: "", message: "" })
    try {
      const response = await fetch("/api/route", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      
      if (response.ok) {
        setStatus({ type: "success", message: "Message sent successfully!" })
        setFormData({ name: "", email: "", message: "" })
      } else {
        setStatus({ type: "error", message: "Failed to send message. Please try again later." })
      }
    } catch {
      setStatus({ type: "error", message: "Something went wrong. Please try again." })
    }
  }


  return (
    <section id="contact" className="py-20 bg-muted dark:bg-black dark:text-white">

      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">{t("contact.title")}</h2>

        <motion.form
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.5}}
            onSubmit={handleSubmit}
            className="max-w-lg mx-auto bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg"
        >

          <div className="mb-4">

            <div className="mb-4">
              Email: <a href="mailto:support@tycoon.pro">contact@sachu.techu</a>
            </div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              {t("contact.contact_form.name")}
            </label>
            <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-md bg-gray-100 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              {t("contact.contact_form.email")}
            </label>
            <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-md bg-gray-100 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              {t("contact.contact_form.message")}
            </label>
            <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-3 py-2 border rounded-md bg-gray-100 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
            ></textarea>
          </div>
          <button
              type="submit"
              className="w-full bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors dark:bg-black dark:text-white dark:border dark:border-white dark:hover:bg-white dark:hover:text-black"
          >
            {t("contact.contact_form.send")}
          </button>
          {status.message && (
              <p className={`mt-4 text-center ${status.type === "success" ? "text-green-500" : "text-red-500"}`}>
                {status.message}
              </p>
          )}
        </motion.form>
      </div>
    </section>
  )
}

export default Contact
