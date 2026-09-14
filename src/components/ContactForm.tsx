"use client";

import { useState, type FormEvent } from "react";

const fieldClass =
  "rounded-[12px] border border-[#333] bg-[#333] px-4 text-[16px] tracking-[-0.32px] text-white placeholder-[#e3e3e3] outline-none transition-colors focus:border-accent";
const inputClass = `h-12 ${fieldClass}`;
const textareaClass = `resize-none py-3 ${fieldClass}`;

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: wire up to an actual submission endpoint.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex h-full min-h-[300px] flex-col items-center justify-center text-center">
        <p className="text-[20px] font-medium tracking-[-0.4px] text-white">
          Thanks, that&apos;s in.
        </p>
        <p className="mt-2 text-[16px] leading-[1.4] tracking-[-0.32px] text-white/60">
          I&apos;ll get back to you within a couple of days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-[16px] font-medium tracking-[-0.32px] text-white">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Enter your name"
          className={inputClass}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-[16px] font-medium tracking-[-0.32px] text-white">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="yourname@gmail.com"
          className={inputClass}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-[16px] font-medium tracking-[-0.32px] text-white">
          Your message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Enter your message"
          className={textareaClass}
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
