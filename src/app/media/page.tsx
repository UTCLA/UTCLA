import type { Metadata } from "next";
import PageBanner from "@/components/ui/PageBanner";

export const metadata: Metadata = {
  title: "Media",
};

const videos = [
  {
    id: "v3zuqvc",
    title: "Pintupi Proclamation",
    description:
      "The formal proclamation of the Pintupi Wati Tjuta Tjungarinyi, founding member of the United Tribal Countries Land Alliance.",
    rumbleUrl: "https://rumble.com/v3zuqvc-pintupi-proclamation.html",
  },
  {
    id: "v4h3cql",
    title: "UK Monarchy — Gifting of the Sword of Deliverance to Yolngu Royal Tribal People",
    description:
      "Documentation of the ceremonial gifting of the Sword of Deliverance to the Yolngu Royal Tribal People by the UK Monarchy.",
    rumbleUrl: "https://rumble.com/v4h3cql-uk-monarchy-gifting-of-the-sword-of-deliverance-to-yolngu-royal-tribal-peop.html",
  },
  {
    id: "v4gx4yk",
    title: "Uncle Eddie — Massacres on the Land (May 2023)",
    description:
      "Uncle Eddie explains the history of massacres carried out on Aboriginal land in Australia.",
    rumbleUrl: "https://rumble.com/v4gx4yk-uncle-eddie-explains-the-massacres-on-the-land-australia-may-23.html",
  },
  {
    id: "v4gx559",
    title: "Uncle Juma — Presentation at the Russian Embassy (August 2023)",
    description:
      "Uncle Juma's presentation at the Russian Embassy in August 2023, addressing the rights and sovereignty of Aboriginal Nations.",
    rumbleUrl: "https://rumble.com/v4gx559-uncle-juma-presentation-russian-embassy-aug-23.html",
  },
];

export default function MediaPage() {
  return (
    <>
      <PageBanner
        title="Media"
        description="Video recordings of proclamations, testimonies, and significant events from the Alliance and its Member Nations."
      />
      <div className="max-w-5xl mx-auto px-6 py-16 md:py-24 space-y-20">
        {videos.map((video) => (
          <section key={video.id}>
            <h2 className="font-heading text-2xl font-bold text-charcoal-900 mb-2">
              {video.title}
            </h2>
            <p className="text-charcoal-600 mb-6">{video.description}</p>
            <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
              <iframe
                src={`https://rumble.com/embed/${video.id}/`}
                className="absolute inset-0 w-full h-full rounded-lg"
                frameBorder="0"
                allowFullScreen
                title={video.title}
              />
            </div>
            <p className="mt-3 text-sm text-charcoal-500">
              Having trouble viewing?{" "}
              <a
                href={video.rumbleUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ochre-600 hover:underline"
              >
                Watch directly on Rumble →
              </a>
            </p>
          </section>
        ))}
      </div>
    </>
  );
}
