import Button from "@/components/ui/Button";

export default function HeroSection() {
  return (
    <section className="relative bg-charcoal-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal-900 via-earth-900 to-charcoal-900 opacity-90" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--color-ochre-900)_0%,_transparent_50%)] opacity-40" />
      <div className="relative max-w-5xl mx-auto px-6 py-28 md:py-40 text-center">
        <blockquote className="mb-10">
          <p className="font-heading text-2xl md:text-4xl lg:text-5xl font-medium italic leading-snug text-sand-200">
            &ldquo;Our law was given to us by our ancestors and comes from
            nature.&rdquo;
          </p>
          <footer className="mt-6 text-base md:text-lg text-ochre-400 font-body">
            <strong>Djalu Gurruwiwi</strong> — Galpu Leader
          </footer>
        </blockquote>
        <div className="h-px w-24 bg-ochre-500 mx-auto mb-10" />
        <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
          United Tribal Countries
          <br />
          Land Alliance
        </h1>
        <p className="text-lg md:text-xl text-charcoal-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          A voluntary alliance of self-governing Tribal Nations across Terra
          Australis, united under Tjukurpa (Law/Lore).
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/about" variant="primary" size="lg">
            Learn About the Alliance
          </Button>
          <Button href="/about/nations" variant="outline" size="lg" className="border-sand-400 text-sand-200 hover:bg-sand-900/30">
            Our Member Nations
          </Button>
        </div>
      </div>
    </section>
  );
}
