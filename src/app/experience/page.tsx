import { ExperienceCard } from "@/components/experience/experience-card";

const experiences = [
  {
    company: "DataThink.io",
    role: "Full-Stack Web Developer",
    dates: "April 2025 - Present",
    details: [
      "Built and deployed software from the ground up for a local school district, improving communication and student monitoring for over 400 staff and faculty.",
      "Spearheaded full-stack software development efforts for three diverse client applications, leveraging Next.JS and Python (FastAPI) to deliver robust and scalable solutions.",
      "Ensured production readiness by utilizing testing software (Playwright) and maintaining critical systems, consistently resolving user issues within a 24-hour service level agreement (SLA).",
    ],
    badges: ["Next.JS", "Python", "FastAPI", "Playwright"],
  },
  {
    company: "OneHealth",
    role: "Full-Stack Web Developer",
    dates: "January 2025 - April 2025",
    details: [
      "Managed the end-to-end Software Development Life Cycle (SDLC) for a user authentication application, utilizing React, Express.JS, and PostgreSQL for robust database management.",
      "Optimized deployment efficiency by introducing Docker containerization to the development team, streamlining environment setup and reducing potential database hosting costs by up to $20/month.",
      "Architected system designs, including creating UI mockups with Figma and defining RESTful APIs with Swagger, ensuring clear technical documentation and alignment.",
    ],
    badges: ["React", "Express.JS", "PostgreSQL", "Docker", "Figma", "Swagger"],
  },
] as const;

export default function ExperiencePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Experience</h1>
      <div className="space-y-6 max-w-3xl">
        {experiences.map((exp) => (
          <ExperienceCard key={exp.company} experience={exp} />
        ))}
      </div>
    </div>
  );
}
