"use client";

import { useState } from "react";
import { toast } from "sonner";

export default function Form() {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    // Create fetch promise
    const fetchPromise = fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({ name, email, message }),
      headers: { "Content-Type": "application/json" },
    });

    // Show toast for loading, success, error
    toast.promise(fetchPromise, {
      loading: "Sending message...",
      success: "Email sent successfully!",
      error: "Failed to send email. Please try again.",
    });

    try {
      const res = await fetchPromise;
      if (res.ok) {
        // Clear input fields on success
        setName("");
        setEmail("");
        setMessage("");
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="w-full gap-12 h-full">
      <form
        onSubmit={handleSubmit}
        className="h-full p-8 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-sm space-y-5"
      >
        <h2 className="text-2xl font-semibold mb-4 text-neutral-900 dark:text-white">
          Send a Message
        </h2>

        {/* Name */}
        <div>
          <label className="block text-sm font-medium mb-1 text-neutral-700 dark:text-neutral-400">
            Name
          </label>
          <input
            autoComplete="off"
            name="name"
            type="text"
            placeholder="Your name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 focus:ring-2 focus:ring-green-500 focus:outline-none text-neutral-900 dark:text-white"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium mb-1 text-neutral-700 dark:text-neutral-400">
            Email
          </label>
          <input
            autoComplete="off"
            name="email"
            type="email"
            placeholder="you@example.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 focus:ring-2 focus:ring-green-500 focus:outline-none text-neutral-900 dark:text-white"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium mb-1 text-neutral-700 dark:text-neutral-400">
            Message
          </label>
          <textarea
            name="message"
            placeholder="Type your message here..."
            rows={5}
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 focus:ring-2 focus:ring-green-500 focus:outline-none text-neutral-900 dark:text-white resize-none"
          />
        </div>

        <button
          type="submit"
          className="w-full cursor-pointer bg-accent hover:bg-green-700 text-white py-3 rounded-lg font-medium hover-utility"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send"}
        </button>
      </form>
    </section>
  );
}
