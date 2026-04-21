interface PageBannerProps {
  title: string;
  description?: string;
}

export default function PageBanner({ title, description }: PageBannerProps) {
  return (
    <section className="relative bg-charcoal-900 text-white overflow-hidden py-16 md:py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal-900 via-earth-900 to-charcoal-900 opacity-90" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--color-ochre-900)_0%,_transparent_50%)] opacity-40" />
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
          {title}
        </h1>
        <div className="h-px w-16 bg-ochre-500 mx-auto mb-4" />
        {description && (
          <p className="text-lg md:text-xl text-charcoal-300 leading-relaxed max-w-2xl mx-auto">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
