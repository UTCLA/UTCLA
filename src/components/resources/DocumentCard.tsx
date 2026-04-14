import Image from "next/image";
import type { Resource } from "@/types";

const categoryColors: Record<string, string> = {
  governance: "bg-ochre-100 text-ochre-800",
  legal: "bg-deep-red-100 text-deep-red-800",
  cultural: "bg-earth-200 text-earth-800",
  economic: "bg-sand-200 text-sand-800",
};

export default function DocumentCard({ resource }: { resource: Resource }) {
  const href = resource.filePath ?? `/documents/${resource.filename}`;
  const isImage = resource.fileType === "Image";

  return (
    <div className="bg-white rounded-lg border border-earth-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
      {isImage && (
        <div className="relative w-full h-52">
          <Image
            src={href}
            alt={resource.title}
            fill
            className="object-cover"
          />
        </div>
      )}
      <div className="p-6">
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
          href={href}
          download={resource.filename}
          className="text-ochre-600 hover:text-ochre-700 text-sm font-medium transition-colors"
        >
          Download {resource.fileType} &darr;
        </a>
      </div>
    </div>
  );
}
