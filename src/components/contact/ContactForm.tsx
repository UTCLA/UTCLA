"use client";

import Button from "@/components/ui/Button";
import { contactFormSchema, type ContactFormValues } from "@/lib/validation";
import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrors({});
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    const data: ContactFormValues = {
      name: formData.get("name") as string,
      organization: (formData.get("organization") as string) || undefined,
      email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    };

    const result = contactFormSchema.safeParse(data);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        const field = issue.path[0] as string;
        fieldErrors[field] = issue.message;
      });
      setErrors(fieldErrors);
      setStatus("idle");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result.data),
      });
      if (!res.ok) throw new Error("Failed to submit");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-sand-50 border border-earth-200 rounded-lg p-8 text-center">
        <h3 className="font-heading text-2xl font-bold text-charcoal-900 mb-3">
          Message Received
        </h3>
        <p className="text-charcoal-600 mb-6">
          Thank you for your correspondence. We will respond through appropriate
          diplomatic channels.
        </p>
        <Button href="/" variant="secondary">
          Return to Home
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-charcoal-700 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={`w-full px-4 py-3 rounded-md border bg-white text-charcoal-800 placeholder:text-charcoal-400 transition-colors focus:outline-none focus:ring-2 focus:ring-ochre-500 focus:border-ochre-500 ${errors.name ? "border-deep-red-600" : "border-earth-400"}`}
          />
          {errors.name && <p id="name-error" role="alert" className="mt-1 text-sm text-deep-red-600">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="organization" className="block text-sm font-medium text-charcoal-700 mb-2">
            Organisation
          </label>
          <input
            type="text"
            id="organization"
            name="organization"
            className="w-full px-4 py-3 rounded-md border border-earth-400 bg-white text-charcoal-800 placeholder:text-charcoal-400 transition-colors focus:outline-none focus:ring-2 focus:ring-ochre-500 focus:border-ochre-500"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-charcoal-700 mb-2">
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
          className={`w-full px-4 py-3 rounded-md border bg-white text-charcoal-800 placeholder:text-charcoal-400 transition-colors focus:outline-none focus:ring-2 focus:ring-ochre-500 focus:border-ochre-500 ${errors.email ? "border-deep-red-600" : "border-earth-400"}`}
        />
        {errors.email && <p id="email-error" role="alert" className="mt-1 text-sm text-deep-red-600">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-charcoal-700 mb-2">
          Subject *
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          aria-invalid={!!errors.subject}
          aria-describedby={errors.subject ? "subject-error" : undefined}
          className={`w-full px-4 py-3 rounded-md border bg-white text-charcoal-800 placeholder:text-charcoal-400 transition-colors focus:outline-none focus:ring-2 focus:ring-ochre-500 focus:border-ochre-500 ${errors.subject ? "border-deep-red-600" : "border-earth-400"}`}
        />
        {errors.subject && <p id="subject-error" role="alert" className="mt-1 text-sm text-deep-red-600">{errors.subject}</p>}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-charcoal-700 mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={`w-full px-4 py-3 rounded-md border bg-white text-charcoal-800 placeholder:text-charcoal-400 transition-colors focus:outline-none focus:ring-2 focus:ring-ochre-500 focus:border-ochre-500 resize-vertical ${errors.message ? "border-deep-red-600" : "border-earth-400"}`}
        />
        {errors.message && <p id="message-error" role="alert" className="mt-1 text-sm text-deep-red-600">{errors.message}</p>}
      </div>

      {status === "error" && (
        <p className="text-deep-red-600 text-sm">
          There was an error submitting your message. Please try again.
        </p>
      )}

      <Button type="submit" variant="primary" size="lg" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending..." : "Send Correspondence"}
      </Button>
    </form>
  );
}
