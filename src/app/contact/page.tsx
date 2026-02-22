import { ContactForm } from "@/components/contact/contact-form";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Contact</h1>
        <p className="text-muted-foreground mb-8">
          Get in touch with me. I&apos;ll do my best to respond promptly.
        </p>
        <ContactForm />
      </div>
    </div>
  );
}
