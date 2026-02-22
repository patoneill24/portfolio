import { HeroSection } from "@/components/landing/hero-section";
import { GitHubStatsSection } from "@/components/landing/github-stats-section";
import { SkillsSection } from "@/components/landing/skills-section";

export default function HomePage() {
  return (
    <div className="space-y-24 pb-16">
      <HeroSection />
      <GitHubStatsSection />
      <SkillsSection />
    </div>
  );
}
