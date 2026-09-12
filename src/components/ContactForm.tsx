"use client";

import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: wire up to an actual submission endpoint.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="mx-auto max-w-lg rounded-[24px] border border-white/15 bg-white/5 px-6 py-10 text-center">
        <p className="text-[20px] font-medium tracking-[-0.4px]">Thanks, that&apos;s in.</p>
        <p className="mt-2 text-[16px] leading-[1.4] tracking-[-0.32px] text-white/60">
          I&apos;ll get back to you within a couple of days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto flex max-w-lg flex-col gap-5">
      <div className="flex flex-col gap-2 text-left">
        <label htmlFor="name" className="text-[14px] tracking-[-0.28px] text-white/60">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Enter your name"
          className="h-12 rounded-[14px] border border-white/15 bg-white/5 px-4 text-[16px] tracking-[-0.32px] text-white placeholder-white/30 outline-none transition-colors focus:border-accent"
        />
      </div>

      <div className="flex flex-col gap-2 text-left">
        <label htmlFor="email" className="text-[14px] tracking-[-0.28px] text-white/60">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="youremail@example.com"
          className="h-12 rounded-[14px] border border-white/15 bg-white/5 px-4 text-[16px] tracking-[-0.32px] text-white placeholder-white/30 outline-none transition-colors focus:border-accent"
        />
      </div>

      <div className="flex flex-col gap-2 text-left">
        <label htmlFor="message" className="text-[14px] tracking-[-0.28px] text-white/60">
          Your message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          placeholder="Tell me a bit about your project"
          className="resize-none rounded-[14px] border border-white/15 bg-white/5 px-4 py-3 text-[16px] tracking-[-0.32px] text-white placeholder-white/30 outline-none transition-colors focus:border-accent"
        />
      </div>

      <button
        type="submit"
        className="mt-2 flex h-12 w-full items-center justify-center rounded-full bg-accent px-6 text-[16px] font-medium tracking-[-0.32px] text-ink transition-transform duration-200 hover:scale-[1.03] active:scale-[0.97] motion-reduce:hover:scale-100 motion-reduce:active:scale-100"
      >
        Submit
      </button>
    </form>
  );
}
