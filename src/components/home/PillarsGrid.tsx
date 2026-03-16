import SectionHeading from "@/components/ui/SectionHeading";

const UnityIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="32" height="32">
    <circle cx="9" cy="7" r="3" />
    <circle cx="15" cy="7" r="3" />
    <path d="M3 21v-1a6 6 0 0 1 6-6h6a6 6 0 0 1 6 6v1" />
  </svg>
);

const CulturalIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="32" height="32">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
    <path d="M12 2c0 0-4 4-4 10s4 10 4 10" />
    <path d="M12 2c0 0 4 4 4 10s-4 10-4 10" />
    <path d="M2 12h20" />
  </svg>
);

const HealingIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="32" height="32">
    <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
    <path d="M12 8v8M8 12h8" />
  </svg>
);

const SustainableIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="32" height="32">
    <path d="M2 20h20" />
    <path d="M12 20V8" />
    <path d="M12 8c0 0-2-4 2-6 0 4 4 4 4 8-2 0-4-1-6-2z" />
    <path d="M12 12c0 0-4-2-6 2 2 0 4 2 6 2" />
  </svg>
);

const EqualityIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="32" height="32">
    <path d="M12 3L4 9l8 6 8-6-8-6z" />
    <path d="M4 15l8 6 8-6" />
  </svg>
);

const InnovationIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="32" height="32">
    <circle cx="12" cy="12" r="3" />
    <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" />
  </svg>
);

const pillars = [
  {
    title: "Unity",
    description:
      "Strengthen cooperation between self-governing Countries and Tribal Nations.",
    Icon: UnityIcon,
  },
  {
    title: "Cultural Continuity",
    description: "Preserve language, ceremony, kinship, and Law.",
    Icon: CulturalIcon,
  },
  {
    title: "Healing & Wellbeing",
    description:
      "Support holistic development across Countries/Nations.",
    Icon: HealingIcon,
  },
  {
    title: "Sustainable Development",
    description:
      "Advance responsible land-based economic systems.",
    Icon: SustainableIcon,
  },
  {
    title: "Equality & Fairness",
    description:
      "Ensure inclusive representation and balanced governance.",
    Icon: EqualityIcon,
  },
  {
    title: "Innovation",
    description:
      "Adopt appropriate technologies that support cultural and environmental sustainability.",
    Icon: InnovationIcon,
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
              <div className="text-ochre-600 mb-4">
                <pillar.Icon />
              </div>
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
