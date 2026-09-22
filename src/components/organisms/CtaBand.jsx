import Reveal from "@/components/atoms/Reveal";
import Badge from "@/components/atoms/Badge";
import Button from "@/components/atoms/Button";

// Organism: CtaBand — dark call-to-action band near the bottom of the home page.
export default function CtaBand() {
  return (
    <section className="py-12 md:py-[70px]">
      <Reveal variant="scale">
        <div className="relative overflow-hidden mt-5 rounded-3xl bg-navy text-white text-center px-6 py-10 sm:p-[60px] before:content-[''] before:absolute before:w-[400px] before:h-[400px] before:rounded-full before:bg-b2/30 before:blur-[80px] before:-top-[140px] before:-right-[60px]">
          <div className="relative">
            <Badge light>Open to work</Badge>
            <h2 className="text-[clamp(28px,4.4vw,44px)] font-bold leading-[1.1] tracking-[-0.02em] my-4">Let&apos;s build something dependable.</h2>
            <p className="text-[#b7c4d8] text-[clamp(16px,2vw,18px)] max-w-[600px] mx-auto mb-[30px]">
              Have an AI product, a Shopify app or a full-stack build in mind? Let&apos;s talk.
            </p>
            <Button href="/contact" variant="b">
              Start a conversation →
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
