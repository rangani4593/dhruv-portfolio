import Badge from "@/components/atoms/Badge";
import Button from "@/components/atoms/Button";

// Route: 404 — shown for any unknown path.
export default function NotFound() {
  return (
    <div className="page-in min-h-[40vh]">
      <section className="text-center py-[120px]">
        <Badge>404</Badge>
        <h1 className="text-[clamp(40px,7vw,72px)] font-bold leading-[1.06] tracking-[-0.02em] my-5">
          Page not <span className="gr">found</span>
        </h1>
        <p className="text-body text-[clamp(16px,2vw,18px)] max-w-[600px] mx-auto mb-[30px]">
          This page doesn&apos;t exist or has been moved.
        </p>
        <Button href="/" variant="b">
          Back to home →
        </Button>
      </section>
    </div>
  );
}
