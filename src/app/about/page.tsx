import type { Metadata } from "next";
import PageBanner from "@/components/ui/PageBanner";
import Divider from "@/components/ui/Divider";

export const metadata: Metadata = {
  title: "About the Alliance",
};

export default function AboutPage() {
  return (
    <>
      <PageBanner
        title="About the Alliance"
        description="Who we are, our cultural foundation, and our lawful position."
      />
      <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        <section>
          <h2 className="font-heading text-3xl font-bold text-charcoal-900 mb-6">
            Who We Are
          </h2>
          <p className="text-lg text-charcoal-700 leading-relaxed mb-6">
            The United Tribal Countries Land Alliance (UTCLA) is a voluntary
            alliance of self-governing Tribal Nations across Terra Australis.
          </p>
          <p className="text-charcoal-700 leading-relaxed mb-4">
            The Alliance exists to:
          </p>
          <ul className="list-disc list-inside space-y-2 text-charcoal-700 mb-6 ml-4">
            <li>Strengthen cultural governance</li>
            <li>Coordinate collective decision-making</li>
            <li>Protect our collective land, water, airways and cultural authority</li>
            <li>Facilitate responsible economic cooperation</li>
            <li>Support intergenerational sustainability</li>
          </ul>
          <p className="text-charcoal-700 leading-relaxed">
            UTCLA does not replace the sovereignty of any Tribal Nation. Each
            Nation retains full authority over its own Country and internal
            affairs.
          </p>
        </section>

        <Divider />

        <section>
          <h2 className="font-heading text-3xl font-bold text-charcoal-900 mb-4">
            Cultural Foundation
          </h2>
          <h3 className="font-heading text-xl font-semibold text-ochre-700 mb-4">
            Tjukurpa — Supreme Cultural Authority
          </h3>
          <p className="text-charcoal-700 leading-relaxed mb-6">
            The foundation of the Alliance is Tjukurpa (Law/Lore) — the ancient
            governance system derived from nature and upheld through ceremony,
            kinship, songlines, and custodial responsibility.
          </p>
          <p className="text-charcoal-700 leading-relaxed mb-4">
            Tjukurpa governs:
          </p>
          <ul className="list-disc list-inside space-y-2 text-charcoal-700 ml-4">
            <li>Cultural obligations</li>
            <li>Custodial authority</li>
            <li>Inter-Nation relationships</li>
            <li>Responsibilities to Country</li>
            <li>Ethical decision-making</li>
          </ul>
          <p className="mt-6 text-charcoal-700 leading-relaxed">
            Tjukurpa is the unifying cultural framework of the Alliance.
          </p>
        </section>

        <Divider />

        <section>
          <h2 className="font-heading text-3xl font-bold text-charcoal-900 mb-4">
            Lawful Position
          </h2>
          <h3 className="font-heading text-xl font-semibold text-ochre-700 mb-4">
            Autonomous Self-Determination
          </h3>
          <p className="text-charcoal-700 leading-relaxed mb-6">
            Indigenous peoples are recognised under international law as having
            the right to self-determination, including the right to:
          </p>
          <ul className="list-disc list-inside space-y-2 text-charcoal-700 mb-6 ml-4">
            <li>Determine internal governance structures</li>
            <li>Maintain customary law systems</li>
            <li>Manage cultural and community affairs</li>
            <li>Participate in economic development</li>
          </ul>
          <p className="text-charcoal-700 leading-relaxed mb-4">
            These principles are affirmed in:
          </p>
          <ul className="list-disc list-inside space-y-2 text-charcoal-700 mb-6 ml-4">
            <li>International Humanitarian Law (Customary Law)</li>
            <li>United Nations Declaration on the Rights of Indigenous Peoples</li>
            <li>International Covenant on Civil and Political Rights</li>
            <li>International Covenant on Economic, Social and Cultural Rights</li>
          </ul>
          <p className="text-charcoal-700 leading-relaxed mb-4">
            The UTCLA operates within this framework of recognised internal
            self-determination.
          </p>
          <p className="text-charcoal-700 leading-relaxed">
            The Alliance does not assert external statehood, but affirms
            cultural sovereignty, governance legitimacy, and collective
            cooperation consistent with international norms.
          </p>
        </section>
      </div>
    </>
  );
}
