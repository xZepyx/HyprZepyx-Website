import express, { type Request, Response, NextFunction } from "express";
import { createServer } from "http";
import path from "path";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

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

// Serve static files from root directory
app.use(express.static('.'));

// Serve index.html for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(process.cwd(), 'index.html'));
});

app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  const status = err.status || err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(status).json({ message });
  console.error(err);
});

const server = createServer(app);

// ALWAYS serve the app on the port specified in the environment variable PORT
// Other ports are firewalled. Default to 5000 if not specified.
const port = parseInt(process.env.PORT || '5000', 10);
server.listen({
  port,
  host: "0.0.0.0",
  reusePort: true,
}, () => {
  console.log(`serving on port ${port}`);
});
