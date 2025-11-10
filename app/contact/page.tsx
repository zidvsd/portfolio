"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  ChevronDown,
  Linkedin,
  Github,
  Globe,
} from "lucide-react";
import faqs from "@/data/faqs.json";

export default function ContactPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  return (
    <main className=" custom-container px-6 py-12 flex flex-col items-center text-neutral-900 dark:text-white">
      {/* Header */}
      <section className="w-full wmb-12">
        <h1 className="text-2xl font-semibold mb-2">Contact</h1>
        <h3 className="text-neutral-500 dark:text-neutral-400">
          Feel free to reach out for questions, collaborations, or general
          inquiries.
        </h3>
      </section>

      {/* Contact Section */}
      <section className="w-full grid md:grid-cols-2 gap-12 border-t border-neutral-200 dark:border-neutral-800 pt-6 mt-6">
        {/* Contact Form */}
        <form className="p-8 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-sm space-y-5">
          <h2 className="text-2xl font-semibold mb-4 text-neutral-900 dark:text-white">
            Send a Message
          </h2>

          <div>
            <label className="block text-sm font-medium mb-1 text-neutral-700 dark:text-neutral-400">
              Name
            </label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full px-4 py-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 focus:ring-2 focus:ring-green-500 focus:outline-none text-neutral-900 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-neutral-700 dark:text-neutral-400">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 focus:ring-2 focus:ring-green-500 focus:outline-none text-neutral-900 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-neutral-700 dark:text-neutral-400">
              Message
            </label>
            <textarea
              placeholder="Type your message here..."
              rows={5}
              className="w-full px-4 py-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 focus:ring-2 focus:ring-green-500 focus:outline-none text-neutral-900 dark:text-white resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full cursor-pointer bg-accent hover:bg-green-700 text-white py-3 rounded-lg font-medium hover-utility"
          >
            Send
          </button>
        </form>

        {/* Contact Info */}
        <div className="p-8 rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-sm flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-3">
              Get in Touch
            </h2>
            <p className="text-accent dark:text-neutral-400 mb-6">
              I’m always open to talking about new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="text-accent" />
                <a
                  href="mailto:rashidvisda@gmail.com"
                  className="text-neutral-700 dark:text-neutral-300 hover:text-accent dark:hover:text-green-500 transition"
                >
                  rashidvisda@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-accent" />
                <p className="text-neutral-700 dark:text-neutral-300">
                  +63 909 183 1203
                </p>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-accent" />
                <p className="text-neutral-700 dark:text-neutral-300">
                  Calamba City, Philippines
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-5 mt-8">
              <a
                href="https://github.com/zidvsd"
                target="_blank"
                className="p-2 rounded-full bg-neutral-200 dark:bg-neutral-700 hover:bg-accent dark:hover:bg-accent hover-utility"
              >
                <Github className="text-neutral-800 dark:text-white" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                className="p-2 rounded-full bg-neutral-200 dark:bg-neutral-700 hover:bg-accent dark:hover:bg-accent hover-utility"
              >
                <Linkedin className="text-neutral-800 dark:text-white" />
              </a>
              <a
                href="#"
                target="_blank"
                className="p-2 rounded-full bg-neutral-200 dark:bg-neutral-700 hover:bg-accent dark:hover:bg-accent hover-utility"
              >
                <Globe className="text-neutral-800 dark:text-white" />
              </a>
            </div>
          </div>

          {/* Optional map or image placeholder */}
          <div className="relative w-full pb-[56.25%] mt-4 overflow-hidden border border-neutral-200 dark:border-neutral-700 shadow-sm">
            <iframe
              className="absolute top-0 left-0 h-full w-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.597728681223!2d121.1651!3d14.2114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d82f3b1b2f93%3A0xbbe0f30f9a3e3a!2sCalamba%20City%2C%20Laguna!5e0!3m2!1sen!2sph!4v1731345345123!5m2!1sen!2sph"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-3xl w-full mt-16">
        <h2 className="text-2xl font-bold text-center mb-10 text-neutral-900 dark:text-white">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="p-4 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-sm cursor-pointer hover-utility hover:bg-neutral-50 dark:hover:bg-neutral-800/70"
              onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
            >
              <div className="flex justify-between items-center">
                <h3 className="font-medium text-lg text-neutral-900 dark:text-white">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`transition-transform duration-300 ${
                    openFAQ === i
                      ? "rotate-180 text-green-500"
                      : "text-neutral-500 dark:text-neutral-400"
                  }`}
                />
              </div>
              {openFAQ === i && (
                <p className="text-accent dark:text-neutral-400 mt-2">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
