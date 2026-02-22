import { Brain, Mail } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="container mx-auto px-4 pt-12">
      <div className="flex flex-col items-center text-center space-y-6 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Patrick  O&apos;Neill
        </h1>
        <p className="text-xl text-muted-foreground sm:text-2xl">
          Full-Stack Developer
        </p>
        <Link
          href="mailto:patrick_oneill13@outlook.com"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <Mail className="h-5 w-5" />
          <span>patrick_oneill13@outlook.com</span>
        </Link>
        <div className="flex items-center gap-2 text-muted-foreground mt-4">
          <Brain className="h-5 w-5" aria-hidden />
          <span>Currently at DataThink.io</span>
        </div>
      </div>
    </section>
  );
}
