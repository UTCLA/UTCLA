"use client";

import dynamic from "next/dynamic";
import type { Nation } from "@/types";

const NationsMap = dynamic(() => import("./NationsMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[320px] md:h-[500px] bg-earth-100 rounded-lg flex items-center justify-center text-charcoal-500">
      Loading map...
    </div>
  ),
});

export default function NationsMapWrapper({ nations }: { nations: Nation[] }) {
  return <NationsMap nations={nations} />;
}
