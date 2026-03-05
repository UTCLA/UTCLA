interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-charcoal-900 mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-charcoal-500 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
      <div
        className={`mt-4 h-1 w-16 bg-ochre-500 rounded ${centered ? "mx-auto" : ""}`}
      />
    </div>
  );
}
