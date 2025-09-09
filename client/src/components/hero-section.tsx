import { useGitHubStats } from "../hooks/use-github-stats";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onTabChange: (tab: string) => void;
}

export default function HeroSection({ onTabChange }: HeroSectionProps) {
  const { data: githubStats, isLoading } = useGitHubStats();

  return (
    <section className="relative py-20 px-4" data-testid="hero-section">
      <div className="max-w-7xl mx-auto text-center">
        <div className="mb-8">
          <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center font-bold text-4xl mx-auto mb-6 glow-effect pulse-glow">
            HZ
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gradient">HyprZepyx</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">Fatal Exception : Elegance</p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            A powerful, visually stunning Hyprland configuration built for speed, workflow efficiency, and aesthetics. 
            Where minimal design meets maximum functionality.
          </p>
        </div>

        {/* Stats */}
        <div className="flex justify-center space-x-8 mb-12" data-testid="github-stats">
          {isLoading ? (
            <>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary animate-pulse">--</div>
                <div className="text-sm text-muted-foreground">Stars</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary animate-pulse">--</div>
                <div className="text-sm text-muted-foreground">Forks</div>
              </div>
            </>
          ) : (
            <>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary" data-testid="stars-count">
                  {githubStats?.stargazers_count || 43}
                </div>
                <div className="text-sm text-muted-foreground">Stars</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary" data-testid="forks-count">
                  {githubStats?.forks_count || 1}
                </div>
                <div className="text-sm text-muted-foreground">Forks</div>
              </div>
            </>
          )}
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">4</div>
            <div className="text-sm text-muted-foreground">Themes</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center" data-testid="cta-buttons">
          <Button asChild className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 glow-effect">
            <a 
              href="https://github.com/xZepyx/HyprZepyx" 
              target="_blank"
              rel="noopener noreferrer"
              data-testid="button-get-started"
            >
              <i className="fab fa-github mr-2"></i>Get Started
            </a>
          </Button>
          <Button 
            onClick={() => onTabChange('screenshots')}
            variant="secondary"
            className="px-8 py-4 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:bg-secondary/80 transition-all duration-300"
            data-testid="button-view-screenshots"
          >
            <i className="fas fa-images mr-2"></i>View Screenshots
          </Button>
        </div>
      </div>
    </section>
  );
}
