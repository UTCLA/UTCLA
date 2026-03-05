import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

const nations = [
  {
    name: "Pintupi Wati Tjuta Tjungarinyi",
    region: "Central Western Desert",
    color: "bg-ochre-600",
  },
  {
    name: "Ni'ripono Gwata Tu Sovereign Government",
    region: "Cape York Region",
    color: "bg-deep-red-700",
  },
  {
    name: "Majagi",
    region: "Larrakia, Tiwi Island and Brinkin peoples",
    color: "bg-earth-700",
  },
];

export default function FoundingNationsPreview() {
  return (
    <section className="py-20 md:py-28 bg-sand-100">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          title="Founding Member Nations"
          subtitle="Three sovereign Tribal Nations united in voluntary alliance."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {nations.map((nation) => (
            <div
              key={nation.name}
              className="bg-white rounded-lg border border-earth-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className={`h-2 ${nation.color}`} />
              <div className="p-6">
                <h3 className="font-heading text-lg font-bold text-charcoal-900 mb-2">
                  {nation.name}
                </h3>
                <p className="text-sm text-charcoal-500">{nation.region}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Button href="/about/nations" variant="secondary">
            Explore Member Nations &amp; Map
          </Button>
        </div>
      </div>
    </section>
  );
}
