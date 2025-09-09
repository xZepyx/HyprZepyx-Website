import { Github, Mail } from "lucide-react";

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function Navigation({ activeTab, onTabChange }: NavigationProps) {
  const tabs = [
    { id: 'home', label: 'Home', icon: 'fas fa-home' },
    { id: 'screenshots', label: 'Screenshots', icon: 'fas fa-images' },
    { id: 'installation', label: 'Installation', icon: 'fas fa-download' },
    { id: 'docs', label: 'Docs', icon: 'fas fa-book' },
    { id: 'about', label: 'About', icon: 'fas fa-user' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3" data-testid="logo-section">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center font-bold text-lg glow-effect">
              HZ
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">HyprZepyx</h1>
              <p className="text-xs text-muted-foreground">Fatal Exception : Elegance</p>
            </div>
          </div>

          {/* Navigation Tabs */}
          <nav className="hidden md:flex space-x-1" data-testid="desktop-navigation">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
                onClick={() => onTabChange(tab.id)}
                data-testid={`tab-${tab.id}`}
              >
                <i className={`${tab.icon} mr-2`}></i>
                {tab.label}
              </button>
            ))}
          </nav>

          {/* GitHub Link */}
          <a
            href="https://github.com/xZepyx/HyprZepyx"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors"
            data-testid="github-link"
          >
            <Github className="w-5 h-5" />
            <span className="hidden sm:block">GitHub</span>
          </a>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden px-4 pb-3" data-testid="mobile-navigation">
          <div className="flex space-x-1 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`flex-shrink-0 px-3 py-2 rounded-lg text-sm transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
                onClick={() => onTabChange(tab.id)}
                data-testid={`mobile-tab-${tab.id}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
