import type { Resource } from "@/types";

const categoryColors: Record<string, string> = {
  governance: "bg-ochre-100 text-ochre-800",
  legal: "bg-deep-red-100 text-deep-red-800",
  cultural: "bg-earth-200 text-earth-800",
  economic: "bg-sand-200 text-sand-800",
};

export default function DocumentCard({ resource }: { resource: Resource }) {
  return (
    <div className="bg-white rounded-lg border border-earth-200 shadow-sm p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between gap-4 mb-3">
        <span
          className={`text-xs font-medium px-2.5 py-1 rounded-full ${categoryColors[resource.category] || "bg-charcoal-100 text-charcoal-700"}`}
        >
          {resource.category}
        </span>
        <span className="text-xs text-charcoal-400">
          {resource.fileType} &middot; {resource.fileSize}
        </span>
      </div>
      <h3 className="font-heading text-lg font-bold text-charcoal-900 mb-2">
        {resource.title}
      </h3>
      <p className="text-sm text-charcoal-600 leading-relaxed mb-4">
        {resource.description}
      </p>
      <a
        href={`/documents/${resource.filename}`}
        className="text-ochre-600 hover:text-ochre-700 text-sm font-medium transition-colors"
      >
        Download {resource.fileType} &darr;
      </a>
    </div>
  );
}
