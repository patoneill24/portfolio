import { ProjectCard } from "@/components/projects/project-card";

const projects = [
  {
    title: "Take-Off Genie",
    date: "January 2026 - Present",
    description:
      "Collaborating with small team of developers to develop a IOS Application with DotNet on the backend for general aviation pilots. Implementing Machine Learning Model to predict a safe take off distance based on current weather conditions and weight of the aircraft.",
    badges: ["C#", "Python", "Machine Learning"],
  },
  {
    title: "Bracket-IQ",
    date: "December 2025 - January 2026",
    description:
      "Developed a Next.JS application to create a platform for users to create a College Football Playoff Bracket and compete on a global leader board. Integrating a College Football API to pull down results of games and compare it with people's predictions to score and rank their bracket.",
    badges: ["Next.JS", "MongoDB", "Resend"],
  },
  {
    title: "Olin AI-Interviewer (1st Place Hackathon Winner)",
    date: "October 2025",
    description:
      "Developed a Next.JS application utilizing the Gemini API's text-to-speech capabilities to create a live AI interview simulation. Collaborated on a team of three to design and deliver a highly functional product.",
    badges: ["Next.JS", "Gemini API", "Hackathon"],
  },
  {
    title: "M&M and Skittles Color Identifier",
    date: undefined,
    description:
      "An AI-driven computer vision project utilizing a YOLO model. Trained on custom video datasets to accurately identify, track, and annotate the colors of M&Ms and Skittles in real-time.",
    badges: ["Python", "YOLO", "Machine Learning", "Computer Vision"],
  },
] as const;

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Projects</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 max-w-4xl">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
}
