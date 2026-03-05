interface PageBannerProps {
  title: string;
  description?: string;
}

export default function PageBanner({ title, description }: PageBannerProps) {
  return (
    <section className="bg-charcoal-900 text-white py-16 md:py-28">
      <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
        <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          {title}
        </h1>
        {description && (
          <p className="text-lg md:text-xl text-charcoal-300 leading-relaxed max-w-2xl mx-auto">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
