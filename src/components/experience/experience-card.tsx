import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ExperienceCardProps {
  experience: {
    company: string;
    role: string;
    dates: string;
    details: readonly string[];
    badges: readonly string[];
  };
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          {experience.company} - {experience.role}
        </CardTitle>
        <CardDescription>{experience.dates}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          {experience.details.map((detail, i) => (
            <li key={i}>{detail}</li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2 pt-2">
          {experience.badges.map((badge) => (
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
