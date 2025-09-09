import type { Express } from "express";
import { createServer, type Server } from "http";

export async function registerRoutes(app: Express): Promise<Server> {
  // GitHub API proxy route
  app.get("/api/github-stats", async (req, res) => {
    try {
      const response = await fetch("https://api.github.com/repos/xZepyx/HyprZepyx", {
        headers: {
          'User-Agent': 'HyprZepyx-Website',
          ...(process.env.GITHUB_TOKEN && {
            'Authorization': `token ${process.env.GITHUB_TOKEN}`
          })
        }
      });

      if (!response.ok) {
        throw new Error(`GitHub API responded with status: ${response.status}`);
      }

      const data = await response.json();
      
      // Return only the stats we need
      res.json({
        stargazers_count: data.stargazers_count,
        forks_count: data.forks_count,
        open_issues_count: data.open_issues_count,
        updated_at: data.updated_at,
      });
    } catch (error) {
      console.error("Error fetching GitHub stats:", error);
      // Return fallback data if API fails
      res.json({
        stargazers_count: 43,
        forks_count: 1,
        open_issues_count: 0,
        updated_at: new Date().toISOString(),
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
