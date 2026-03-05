import type { Nation } from "@/types";

export default function NationCard({ nation }: { nation: Nation }) {
  return (
    <div className="bg-white rounded-lg border border-earth-200 overflow-hidden shadow-sm">
      <div className="h-2" style={{ backgroundColor: nation.color }} />
      <div className="p-6">
        <h3 className="font-heading text-lg font-bold text-charcoal-900 mb-2">
          {nation.name}
        </h3>
        <p className="text-sm text-ochre-700 font-medium mb-3">
          {nation.region}
        </p>
        <p className="text-charcoal-600 text-sm leading-relaxed">
          {nation.description}
        </p>
      </div>
    </div>
  );
}
