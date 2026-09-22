"use client";
import { useState } from "react";
import Button from "@/components/atoms/Button";

// Organism: ContactForm — client-side only form (no backend). Shows a success note.
const LABEL = "block text-[13px] text-body font-medium mt-4 mb-[7px] first:mt-0";
const FIELD =
  "w-full bg-bg border border-line2 rounded-[11px] px-[15px] py-[13px] text-ink text-[14.5px] font-sans transition-all duration-200 focus:outline-none focus:border-b1 focus:shadow-[0_0_0_3px_rgba(11,99,229,.13)]";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    e.currentTarget.reset();
  };

  return (
    <form className="bg-card border border-line rounded-[18px] p-[30px] shadow-sh" onSubmit={onSubmit}>
      <label htmlFor="name" className={LABEL}>
        Your name
      </label>
      <input id="name" type="text" required placeholder="Jane Doe" className={FIELD} />

      <label htmlFor="email" className={LABEL}>
        Email
      </label>
      <input id="email" type="email" required placeholder="jane@company.com" className={FIELD} />

      <label htmlFor="msg" className={LABEL}>
        Message
      </label>
      <textarea id="msg" required placeholder="Tell me about your project..." className={`${FIELD} min-h-[120px] resize-y`} />

      <Button type="submit" variant="b" className="w-full justify-center mt-[22px]">
        {sent ? "Sent ✓" : "Send message →"}
      </Button>

      {sent && (
        <div className="mt-4 p-[13px] rounded-[11px] bg-emerald-500/[.12] text-[#0e9f6e] text-center text-sm font-medium">
          ✅ Thanks! I&apos;ll get back to you soon.
        </div>
      )}
    </form>
  );
}
