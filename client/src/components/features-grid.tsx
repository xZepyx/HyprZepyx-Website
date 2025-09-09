export default function FeaturesGrid() {
  const features = [
    {
      icon: "fas fa-bolt",
      title: "Lightning Fast",
      description: "Optimized for speed with minimal resource usage and instant workspace switching.",
      color: "bg-primary"
    },
    {
      icon: "fas fa-palette",
      title: "4 Beautiful Themes",
      description: "Spectral-Horizon, Kernel-Fault, Abyss, and Lumen - each with unique aesthetics.",
      color: "bg-accent"
    },
    {
      icon: "fas fa-cogs",
      title: "Highly Configurable",
      description: "Extensive customization options with Waybar, Eww widgets, and Rofi launchers.",
      color: "bg-primary"
    },
    {
      icon: "fas fa-layer-group",
      title: "Smart Workspaces",
      description: "Persistent workspaces 1-9 with dynamic app icons and workspace-aware modules.",
      color: "bg-accent"
    },
    {
      icon: "fas fa-keyboard",
      title: "Intuitive Keybinds",
      description: "Carefully crafted keybindings for efficient workflow and seamless navigation.",
      color: "bg-primary"
    },
    {
      icon: "fas fa-code",
      title: "Developer Ready",
      description: "Pre-configured for development with terminal themes, app launchers, and productivity scripts.",
      color: "bg-accent"
    }
  ];

  return (
    <section className="py-20 px-4" data-testid="features-section">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="glass-effect rounded-xl p-6 hover:glow-effect transition-all duration-300"
              data-testid={`feature-${index}`}
            >
              <div className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center mb-4`}>
                <i className={`${feature.icon} text-white`}></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
