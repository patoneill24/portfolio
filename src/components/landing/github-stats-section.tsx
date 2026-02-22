"use client";

import { useEffect, useState } from "react";
import GitHubCalendar from "react-github-calendar";
import { Skeleton } from "@/components/ui/skeleton";

// GitHub-style contribution colors: more = greener/brighter, less = darker
const githubTheme = {
  level0: "#21262d", // no contributions
  level1: "#0e4429", // 1-9 contributions
  level2: "#006d32",
  level3: "#26a641",
  level4: "#39d353", // 30+ contributions (brightest)
} as const;

interface Language {
  name: string;
  percentage: number;
}

export function GitHubStatsSection() {
  const [languages, setLanguages] = useState<Language[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchLanguages() {
      try {
        const res = await fetch(
          "https://api.github.com/users/patoneill24/repos?per_page=100"
        );
        if (!res.ok) throw new Error("Failed to fetch repos");
        const repos = await res.json();

        const langCounts: Record<string, number> = {};
        for (const repo of repos) {
          if (repo.language) {
            langCounts[repo.language] = (langCounts[repo.language] || 0) + 1;
          }
        }

        const total = Object.values(langCounts).reduce((a, b) => a + b, 0);
        const langs = Object.entries(langCounts)
          .map(([name, count]) => ({
            name,
            percentage: Math.round((count / total) * 100),
          }))
          .sort((a, b) => b.percentage - a.percentage)
          .slice(0, 6);
        setLanguages(langs);
      } catch {
        setLanguages([]);
      } finally {
        setLoading(false);
      }
    }
    fetchLanguages();
  }, []);

  return (
    <section className="container mx-auto px-4">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        GitHub Activity
      </h2>
      <div className="flex flex-col items-center gap-8 max-w-4xl mx-auto">
        <div className="w-full overflow-x-auto rounded-lg border border-border bg-card p-4">
          <GitHubCalendar
            username="patoneill24"
            theme={githubTheme}
            blockSize={12}
            blockMargin={3}
            fontSize={12}
          />
        </div>
        <div className="w-full">
          <h3 className="text-lg font-medium mb-3">Top Languages</h3>
          {loading ? (
            <div className="space-y-2">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="flex items-center gap-3">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-2 flex-1 rounded-full" />
                  <Skeleton className="h-4 w-10" />
                </div>
              ))}
            </div>
          ) : languages.length > 0 ? (
            <div className="space-y-2">
              {languages.map((lang) => (
                <div key={lang.name} className="flex items-center gap-3">
                  <span className="text-sm font-medium w-24">{lang.name}</span>
                  <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full"
                      style={{ width: `${lang.percentage}%` }}
                    />
                  </div>
                  <span className="text-sm text-muted-foreground w-10">
                    {lang.percentage}%
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground text-sm">
              Unable to load language stats.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
