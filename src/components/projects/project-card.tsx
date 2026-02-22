import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ProjectCardProps {
  project: {
    title: string;
    date?: string;
    description: string;
    badges: readonly string[];
  };
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">{project.title}</CardTitle>
        {project.date && (
          <CardDescription>{project.date}</CardDescription>
        )}
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.badges.map((badge) => (
            <span
              key={badge}
              className="inline-flex items-center rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium"
            >
              {badge}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
