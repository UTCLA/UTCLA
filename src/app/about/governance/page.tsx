import type { Metadata } from "next";
import PageBanner from "@/components/ui/PageBanner";
import Divider from "@/components/ui/Divider";

export const metadata: Metadata = {
  title: "Governance & Law",
};

export default function GovernancePage() {
  return (
    <>
      <PageBanner
        title="Governance & Law"
        description="Our governance structure, law and policy framework, and relationship to member constitutions."
      />
      <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        <section>
          <h2 className="font-heading text-3xl font-bold text-charcoal-900 mb-6">
            Governance Structure
          </h2>
          <h3 className="font-heading text-xl font-semibold text-ochre-700 mb-4">
            Representation
          </h3>
          <p className="text-charcoal-700 leading-relaxed mb-4">
            Each Member Country/Nation appoints:
          </p>
          <ul className="list-disc list-inside space-y-2 text-charcoal-700 mb-6 ml-4">
            <li>One Male Representative</li>
            <li>One Female Representative</li>
          </ul>
          <p className="text-charcoal-700 leading-relaxed mb-4">
            Representatives speak exclusively for their own Country/Nation. No
            Country/Nation may make decisions for another Country/Nation or its
            internal affairs.
          </p>

          <h3 className="font-heading text-xl font-semibold text-ochre-700 mt-8 mb-4">
            Decision-Making Levels
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-sand-50 border border-earth-200 rounded-lg p-6">
              <h4 className="font-heading text-lg font-bold text-charcoal-900 mb-3">
                Local Authority
              </h4>
              <p className="text-sm text-charcoal-600 mb-3">Each Tribal Council governs:</p>
              <ul className="list-disc list-inside space-y-1 text-sm text-charcoal-700">
                <li>Community wellbeing</li>
                <li>Cultural matters</li>
                <li>Land stewardship</li>
                <li>Internal governance</li>
              </ul>
            </div>
            <div className="bg-sand-50 border border-earth-200 rounded-lg p-6">
              <h4 className="font-heading text-lg font-bold text-charcoal-900 mb-3">
                Collective Authority
              </h4>
              <p className="text-sm text-charcoal-600 mb-3">All collective decisions:</p>
              <ul className="list-disc list-inside space-y-1 text-sm text-charcoal-700">
                <li>Require consultation</li>
                <li>Are transparently tabled</li>
                <li>Respect equal representation</li>
                <li>Uphold cultural authority</li>
              </ul>
            </div>
          </div>
        </section>

        <Divider />

        <section>
          <h2 className="font-heading text-3xl font-bold text-charcoal-900 mb-6">
            Law &amp; Policy Framework
          </h2>
          <p className="text-charcoal-700 leading-relaxed mb-4">
            Alliance policies are grounded in:
          </p>
          <ul className="list-disc list-inside space-y-2 text-charcoal-700 mb-6 ml-4">
            <li>Tjukurpa (Cultural Law)</li>
            <li>Applicable domestic legal frameworks</li>
            <li>Relevant principles of international and trade law where appropriate</li>
          </ul>
          <p className="text-charcoal-700 leading-relaxed mb-6">
            The Alliance is progressively formalising policies relating to:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "Cultural Protection",
              "Land and Resource Stewardship",
              "Economic Cooperation",
              "Infrastructure Collaboration",
              "Diplomacy Protocols",
              "Strategic Investment",
            ].map((policy) => (
              <div
                key={policy}
                className="flex items-center gap-3 bg-sand-50 border border-earth-200 rounded px-4 py-3"
              >
                <div className="w-2 h-2 rounded-full bg-ochre-500 shrink-0" />
                <span className="text-sm text-charcoal-700">{policy}</span>
              </div>
            ))}
          </div>
        </section>

        <Divider />

        <section>
          <h2 className="font-heading text-3xl font-bold text-charcoal-900 mb-6">
            Cultural Authority &amp; Integrity
          </h2>
          <p className="text-charcoal-700 leading-relaxed mb-6">
            Cultural legitimacy is the foundation of governance. Authority flows
            from cultural custodianship — not from imposed structures.
          </p>
          <p className="text-charcoal-700 leading-relaxed mb-4">
            The Alliance governance process:
          </p>
          <ul className="list-disc list-inside space-y-2 text-charcoal-700 ml-4">
            <li>Requires matters to be tabled before representatives</li>
            <li>Encourages open deliberation</li>
            <li>Prioritises consensus</li>
            <li>Reduces corruption risk</li>
            <li>Ensures collective transparency</li>
          </ul>
        </section>

        <Divider />

        <section>
          <h2 className="font-heading text-3xl font-bold text-charcoal-900 mb-6">
            Relationship to Member Constitutions
          </h2>
          <p className="text-charcoal-700 leading-relaxed mb-6">
            The UTCLA is a collective private members alliance. Each Member
            Country/Nation maintains its own:
          </p>
          <ul className="list-disc list-inside space-y-2 text-charcoal-700 mb-6 ml-4">
            <li>Constitution</li>
            <li>Governance framework</li>
            <li>Cultural authority structures</li>
          </ul>
          <p className="text-charcoal-700 leading-relaxed">
            The Alliance does not replace individual Nation constitutions but
            coordinates collective matters between them.
          </p>
        </section>
      </div>
    </>
  );
}
