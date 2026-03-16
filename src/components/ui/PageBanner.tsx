interface PageBannerProps {
  title: string;
  description?: string;
}

export default function PageBanner({ title, description }: PageBannerProps) {
  return (
    <section className="bg-charcoal-900 text-white py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
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
