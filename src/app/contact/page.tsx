import type { Metadata } from "next";
import PageBanner from "@/components/ui/PageBanner";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <>
      <PageBanner
        title="Diplomatic Correspondence"
        description="For formal enquiries, partnership discussions, and diplomatic communications."
      />
      <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
        <div className="mb-10">
          <p className="text-charcoal-700 leading-relaxed">
            The UTCLA welcomes respectful correspondence from Tribal Nations,
            organisations, and institutions seeking to engage with the Alliance.
            All communications are handled in accordance with our diplomacy
            protocols.
          </p>
        </div>
        <ContactForm />
      </div>
    </>
  );
}
