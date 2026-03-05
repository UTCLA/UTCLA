import SectionHeading from "@/components/ui/SectionHeading";

const pillars = [
  {
    title: "Unity",
    description:
      "Strengthen cooperation between self-governing Countries and Tribal Nations.",
    icon: "🤝",
  },
  {
    title: "Cultural Continuity",
    description: "Preserve language, ceremony, kinship, and Law.",
    icon: "🔥",
  },
  {
    title: "Healing & Wellbeing",
    description:
      "Support holistic development across Countries/Nations.",
    icon: "🌿",
  },
  {
    title: "Sustainable Development",
    description:
      "Advance responsible land-based economic systems.",
    icon: "🌱",
  },
  {
    title: "Equality & Fairness",
    description:
      "Ensure inclusive representation and balanced governance.",
    icon: "⚖️",
  },
  {
    title: "Innovation",
    description:
      "Adopt appropriate technologies that support cultural and environmental sustainability.",
    icon: "💡",
  },
];

export default function PillarsGrid() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          title="Strategic Objectives"
          subtitle="Six pillars guiding the Alliance's collective vision for self-determination and sustainable governance."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="p-6 rounded-lg border border-earth-200 bg-sand-50 hover:shadow-md transition-shadow"
            >
              <div className="text-3xl mb-4">{pillar.icon}</div>
              <h3 className="font-heading text-xl font-bold text-charcoal-900 mb-2">
                {pillar.title}
              </h3>
              <p className="text-charcoal-600 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
