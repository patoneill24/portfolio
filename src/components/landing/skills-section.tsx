"use client";

import Image from "next/image";
import GcpLogo from "./icons8-google-cloud.svg";

const skills = [
  { name: "Python", icon: "🐍" },
  { name: "FastAPI", icon: "⚡" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "Next.JS", icon: "▲" },
  { name: "React", icon: "⚛️" },
  { name: "TypeScript", icon: "📘" },
  { name: "Docker", icon: "🐳" },
  { name: "GCP", icon: undefined, iconSrc: GcpLogo },
] as const;

type Skill = (typeof skills)[number];

function isImageSkill(skill: Skill): skill is Skill & { iconSrc: typeof GcpLogo } {
  return "iconSrc" in skill && skill.iconSrc != null;
}

export function SkillsSection() {
  return (
    <section className="container mx-auto px-4">
      <h2 className="text-2xl font-semibold mb-6 text-center">Skills & Tools</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
        {skills.map((skill, i) => (
          <div
            key={skill.name}
            className="flex flex-col items-center justify-center p-6 rounded-xl border border-border bg-card hover:bg-accent/50 transition-colors duration-300 hover:scale-105"
            style={{
              animationDelay: `${i * 50}ms`,
            }}
          >
            {isImageSkill(skill) ? (
              <Image
                src={skill.iconSrc}
                alt=""
                className="mb-2 w-12 h-12 object-contain"
                aria-hidden
              />
            ) : (
              <span className="text-3xl mb-2" aria-hidden>
                {skill.icon}
              </span>
            )}
            <span className="text-sm font-medium">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
