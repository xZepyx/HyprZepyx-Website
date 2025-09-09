import { useGitHubStats } from "../hooks/use-github-stats";
import { Button } from "@/components/ui/button";

export default function AboutSection() {
  const { data: githubStats } = useGitHubStats();

  const acknowledgments = [
    { name: "Hyprland", url: "https://github.com/hyprwm/hyprland" },
    { name: "Ignis Project", url: "https://github.com/ignis-sh/ignis" },
    { name: "Rofi", url: "https://github.com/davatorium/rofi" },
    { name: "Eww", url: "https://elkowar.github.io/eww/" },
    { name: "Waybar", url: "https://github.com/Alexays/Waybar" },
  ];

  return (
    <section className="py-20 px-4" data-testid="about-section">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">About the Project</h2>
        <p className="text-xl text-muted-foreground text-center mb-12">Meet the creator and learn about HyprZepyx's journey</p>

        {/* Developer Profile */}
        <div className="glass-effect rounded-xl p-8 mb-8" data-testid="developer-profile">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Avatar */}
            <div className="w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center font-bold text-4xl glow-effect">
              AY
            </div>
            
            {/* Info */}
            <div className="text-center md:text-left">
              <h3 className="text-3xl font-bold mb-2">Aditya Yadav</h3>
              <p className="text-xl text-primary mb-4">@xZepyx</p>
              <p className="text-muted-foreground mb-6 max-w-2xl">
                Developer and Linux enthusiast passionate about creating beautiful, functional desktop environments. 
                HyprZepyx represents the perfect balance between aesthetics and productivity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild variant="secondary">
                  <a 
                    href="https://github.com/xZepyx" 
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="github-profile-link"
                  >
                    <i className="fab fa-github mr-2"></i>GitHub Profile
                  </a>
                </Button>
                <Button asChild>
                  <a 
                    href="mailto:zepyxunderscore@gmail.com"
                    data-testid="contact-email"
                  >
                    <i className="fas fa-envelope mr-2"></i>Contact
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Project Story */}
        <div className="glass-effect rounded-xl p-8 mb-8" data-testid="project-story">
          <h3 className="text-2xl font-semibold mb-6 flex items-center">
            <i className="fas fa-book-open mr-3 text-primary"></i>Project Story
          </h3>
          <div className="prose prose-invert max-w-none">
            <p className="text-muted-foreground mb-4">
              HyprZepyx was born from a desire to create the perfect desktop environment that doesn't compromise on speed, 
              functionality, or visual appeal. Starting as a personal configuration, it evolved into a comprehensive 
              Hyprland setup that embodies the philosophy of "Fatal Exception : Elegance."
            </p>
            <p className="text-muted-foreground mb-4">
              The project focuses on three core principles: <strong className="text-foreground">Speed</strong> - lightning-fast 
              performance even on older hardware, <strong className="text-foreground">Clarity</strong> - intuitive design 
              that gets out of your way, and <strong className="text-foreground">Aesthetics</strong> - beautiful visuals 
              that inspire productivity.
            </p>
            <p className="text-muted-foreground">
              Each of the four themes represents a different mood and workflow style, from the vibrant gradients of 
              Spectral-Horizon to the minimal elegance of Abyss. The project continues to evolve with community 
              feedback and new Hyprland features.
            </p>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="glass-effect rounded-xl p-8" data-testid="project-stats">
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <i className="fas fa-chart-line mr-3 text-accent"></i>Project Stats
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">GitHub Stars</span>
                <span className="text-2xl font-bold text-primary" data-testid="stats-stars">
                  {githubStats?.stargazers_count || 43}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Forks</span>
                <span className="text-2xl font-bold text-primary" data-testid="stats-forks">
                  {githubStats?.forks_count || 1}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Themes</span>
                <span className="text-2xl font-bold text-primary">4</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">License</span>
                <span className="text-lg font-semibold text-accent">GNU GPLv3</span>
              </div>
            </div>
          </div>

          <div className="glass-effect rounded-xl p-8" data-testid="acknowledgments">
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <i className="fas fa-heart mr-3 text-primary"></i>Acknowledgments
            </h3>
            <div className="space-y-3 text-muted-foreground">
              {acknowledgments.map((ack, index) => (
                <div key={index} className="flex items-center">
                  <i className="fas fa-check text-primary mr-3"></i>
                  <a 
                    href={ack.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-foreground transition-colors"
                    data-testid={`acknowledgment-${index}`}
                  >
                    {ack.name}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* License & Contributing */}
        <div className="glass-effect rounded-xl p-8" data-testid="license-contributing">
          <h3 className="text-2xl font-semibold mb-6 flex items-center">
            <i className="fas fa-code-branch mr-3 text-accent"></i>License & Contributing
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold mb-3 text-primary">Open Source License</h4>
              <p className="text-muted-foreground text-sm mb-4">
                HyprZepyx is licensed under GNU GPLv3, which means you're free to use, modify, 
                and redistribute the code. The project encourages customization and community contributions.
              </p>
              <p className="text-muted-foreground text-sm">
                © 2025–2040 Aditya Yadav - Licensed under GNU GPLv3
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-primary">How to Contribute</h4>
              <ul className="text-muted-foreground text-sm space-y-2">
                <li>• Fork the repository on GitHub</li>
                <li>• Create a feature branch for your changes</li>
                <li>• Submit a pull request with detailed description</li>
                <li>• Join discussions in issues and pull requests</li>
                <li>• Share your custom themes and configurations</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
