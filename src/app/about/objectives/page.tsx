import type { Metadata } from "next";
import PageBanner from "@/components/ui/PageBanner";
import Divider from "@/components/ui/Divider";

export const metadata: Metadata = {
  title: "Strategic Objectives",
};

const objectives = [
  {
    title: "Unity",
    description: "Strengthen cooperation between self-governing Countries and Tribal Nations.",
  },
  {
    title: "Cultural Continuity",
    description: "Preserve language, ceremony, kinship, and Law.",
  },
  {
    title: "Healing & Community Wellbeing",
    description: "Support holistic development across Countries/Nations.",
  },
  {
    title: "Sustainable Development",
    description: "Advance responsible land-based economic systems.",
  },
  {
    title: "Equality & Fairness",
    description: "Ensure inclusive representation and balanced governance.",
  },
  {
    title: "Innovation",
    description: "Adopt appropriate technologies that support cultural and environmental sustainability.",
  },
];

export default function ObjectivesPage() {
  return (
    <>
      <PageBanner
        title="Strategic Objectives"
        description="Our objectives for economic cooperation, diplomatic engagement, and sustainable development."
      />
      <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        <section>
          <h2 className="font-heading text-3xl font-bold text-charcoal-900 mb-8">
            Strategic Objectives
          </h2>
          <div className="space-y-6">
            {objectives.map((obj, i) => (
              <div
                key={obj.title}
                className="flex gap-4 items-start bg-sand-50 border border-earth-200 rounded-lg p-6"
              >
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-ochre-600 text-white text-sm font-bold shrink-0">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-heading text-lg font-bold text-charcoal-900 mb-1">
                    {obj.title}
                  </h3>
                  <p className="text-charcoal-600">{obj.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <Divider />

        <section>
          <h2 className="font-heading text-3xl font-bold text-charcoal-900 mb-6">
            Economic &amp; Resource Cooperation
          </h2>
          <p className="text-charcoal-700 leading-relaxed mb-6">
            The UTCLA facilitates voluntary collaboration between Member
            Countries/Nations in:
          </p>
          <ul className="list-disc list-inside space-y-2 text-charcoal-700 mb-8 ml-4">
            <li>Joint development initiatives</li>
            <li>Infrastructure partnerships</li>
            <li>Resource sharing agreements</li>
            <li>Strategic investment coordination</li>
          </ul>
          <h3 className="font-heading text-xl font-semibold text-ochre-700 mb-4">
            Guiding Principles
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: "Cultural Protection", desc: "All economic activity respects cultural heritage" },
              { title: "Environmental Responsibility", desc: "Honouring custodial obligations to Country" },
              { title: "Intergenerational Sustainability", desc: "Serving current and future generations" },
              { title: "Transparent Governance", desc: "Open and accountable decision-making" },
            ].map((p) => (
              <div key={p.title} className="bg-sand-50 border border-earth-200 rounded-lg p-5">
                <h4 className="font-heading font-bold text-charcoal-900 mb-1">{p.title}</h4>
                <p className="text-sm text-charcoal-600">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <Divider />

        <section>
          <h2 className="font-heading text-3xl font-bold text-charcoal-900 mb-6">
            Diplomatic Engagement
          </h2>
          <p className="text-charcoal-700 leading-relaxed mb-6">
            The UTCLA engages in:
          </p>
          <ul className="list-disc list-inside space-y-2 text-charcoal-700 mb-8 ml-4">
            <li>Inter-Tribal Treaty partnerships</li>
            <li>Cultural exchange relationships</li>
            <li>Dialogue with domestic institutions</li>
            <li>International Indigenous-to-Indigenous cooperation</li>
          </ul>
          <p className="text-charcoal-700 leading-relaxed mb-4">
            All diplomatic engagement is conducted in accordance with:
          </p>
          <div className="flex flex-wrap gap-3">
            {["Mutual Respect", "Non-interference", "Cultural Recognition", "Lawful Cooperation"].map(
              (principle) => (
                <span
                  key={principle}
                  className="bg-earth-700 text-white text-sm px-4 py-2 rounded-full"
                >
                  {principle}
                </span>
              )
            )}
          </div>
        </section>
      </div>
    </>
  );
}
