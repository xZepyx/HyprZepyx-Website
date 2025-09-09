import { useQuery } from "@tanstack/react-query";

interface GitHubRepo {
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  updated_at: string;
}

export function useGitHubStats() {
  return useQuery<GitHubRepo>({
    queryKey: ['/api/github-stats'],
    staleTime: 5 * 60 * 1000, // 5 minutes
    refetchInterval: 5 * 60 * 1000, // Refetch every 5 minutes
  });
}
