import type { Metadata } from "next";
import PageBanner from "@/components/ui/PageBanner";
import NationCard from "@/components/nations/NationCard";
import { getNations } from "@/lib/nations";
import NationsMapWrapper from "@/components/nations/NationsMapWrapper";

export const metadata: Metadata = {
  title: "Member Nations",
};

export default function NationsPage() {
  const nations = getNations();

  return (
    <>
      <PageBanner
        title="Member Nations"
        description="The founding Tribal Nations of the Alliance and their territories."
      />
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <section className="mb-16">
          <h2 className="font-heading text-2xl font-bold text-charcoal-900 mb-6">
            Territory Overview
          </h2>
          <NationsMapWrapper nations={nations} />
          <p className="mt-4 text-xs text-charcoal-400 italic text-center">
            Note: Territory boundaries shown are approximate and for
            illustrative purposes only. Actual custodial boundaries are
            determined by the respective Tribal Nations according to their own
            Law and custom.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-bold text-charcoal-900 mb-8">
            Founding Member Countries/Nations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {nations.map((nation) => (
              <NationCard key={nation.id} nation={nation} />
            ))}
          </div>
          <p className="mt-10 text-charcoal-600 leading-relaxed">
            Additional Countries/Tribal Nations across multiple regions have
            entered into formal Treaty partnerships with the Alliance. Each
            member Country/Nation remains autonomous and self-governing.
          </p>
        </section>
      </div>
    </>
  );
}
