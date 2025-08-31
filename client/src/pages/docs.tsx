import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Monitor, 
  Download, 
  Terminal,
  Settings,
  Copy,
  CheckCircle,
  Github,
  ExternalLink,
  Keyboard,
  Mouse,
  Volume2,
  Sun,
  ArrowLeft,
  Code
} from "lucide-react";
import { Link } from "wouter";

export default function Docs() {
  const themes = [
    {
      name: "kernel-fault",
      tagline: "fatal exception: elegance",
      description: "Widget system with ignis and eww. Features control center, launcher, and terminal integration.",
      image: "https://github.com/xZepyx/HyprZepyx/raw/main/.previews/kernel-fault/widgets.png",
      status: "Active Support",
      features: ["Ignis Widgets", "Control Center", "Custom Launcher", "Terminal Integration"],
      widgets: "ignis and eww",
      support: "Yes (No support for eww)"
    },
    {
      name: "abyss",
      tagline: "stillness devours",
      description: "Minimalist design with eww clock widget. Perfect for focused work sessions.",
      image: "https://github.com/xZepyx/HyprZepyx/raw/main/.previews/Abyss/Code.png",
      status: "Active Support",
      features: ["Eww Clock Widget", "Wallpaper Switcher", "Minimal Design", "Focus Mode"],
      widgets: "eww for clock widget",
      support: "Yes"
    },
    {
      name: "lumen",
      tagline: "shadows made visible",
      description: "Clean desktop environment without widgets. Focuses on pure functionality.",
      image: "https://github.com/xZepyx/HyprZepyx/raw/main/.previews/Lumen/desktop.png",
      status: "Legacy (No Support)",
      features: ["No Widgets", "Pure Desktop", "App Launcher", "Terminal Layout"],
      widgets: "None",
      support: "No (Dead)"
    }
  ];

  const keybindings = [
    { category: "Application Shortcuts", bindings: [
      { combo: "Super + Enter", action: "Launch Kitty Terminal" },
      { combo: "Super + E", action: "Open file manager (Nautilus)" },
      { combo: "Super + D", action: "Open Rofi app launcher" },
      { combo: "Super + W", action: "Launch Firefox" },
      { combo: "Super + F", action: "Launch text editor" },
      { combo: "Super + Q", action: "Open power menu" },
      { combo: "Super + B", action: "Open wallpaper switcher" }
    ]},
    { category: "Window Management", bindings: [
      { combo: "Super + C", action: "Kill focused window" },
      { combo: "Super + V", action: "Toggle floating window" },
      { combo: "Super + P", action: "Toggle pseudotiling" },
      { combo: "Super + J", action: "Toggle split mode" },
      { combo: "Super + Space", action: "Toggle fullscreen" },
      { combo: "Super + Arrow Keys", action: "Move focus" },
      { combo: "Super + Left Click", action: "Move window" },
      { combo: "Super + Right Click", action: "Resize window" }
    ]},
    { category: "Workspace Controls", bindings: [
      { combo: "Super + [1-0]", action: "Switch workspaces" },
      { combo: "Super + Shift + [1-0]", action: "Move window to workspace" },
      { combo: "Super + Mouse Wheel", action: "Cycle workspaces" }
    ]},
    { category: "System Controls", bindings: [
      { combo: "Super + M", action: "Exit Hyprland session" },
      { combo: "Alt + L", action: "Lock screen (Hyprlock)" },
      { combo: "Alt + D", action: "Region screenshot (grim+slurp)" }
    ]},
    { category: "Media & Volume", bindings: [
      { combo: "XF86AudioRaiseVolume", action: "Volume +5%" },
      { combo: "XF86AudioLowerVolume", action: "Volume -5%" },
      { combo: "XF86AudioMute", action: "Toggle mute" },
      { combo: "XF86AudioMicMute", action: "Toggle mic mute" },
      { combo: "XF86MonBrightnessUp/Down", action: "Brightness ±5%" },
      { combo: "XF86AudioNext/Prev/Play/Pause", action: "Media control" }
    ]}
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header Navigation */}
      <header className="border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/">
              <div className="flex items-center space-x-2 cursor-pointer">
                <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                  <Monitor className="text-primary-foreground" size={16} />
                </div>
                <span className="text-xl font-semibold text-foreground" data-testid="brand-name">HyprZepyx</span>
              </div>
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/">
                <a className="text-muted-foreground hover:text-foreground transition-colors duration-200" data-testid="nav-home">Home</a>
              </Link>
              <a href="/#themes" className="text-muted-foreground hover:text-foreground transition-colors duration-200" data-testid="nav-themes">Themes</a>
              <a href="/docs" className="text-foreground font-medium" data-testid="nav-docs">Docs</a>
              <a href="/#install" className="text-muted-foreground hover:text-foreground transition-colors duration-200" data-testid="nav-install">Install</a>
            </nav>
            
            {/* Action Buttons */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="hidden md:inline-flex" asChild data-testid="button-github">
                <a href="https://github.com/xZepyx/HyprZepyx">
                  <Github className="mr-2" size={16} />
                  GitHub
                </a>
              </Button>
              <Button asChild data-testid="button-download">
                <a href="https://github.com/xZepyx/HyprZepyx/archive/refs/heads/main.zip">
                  <Download className="mr-2" size={16} />
                  Download
                </a>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {/* Header Section */}
        <section className="py-12 border-b border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <Link href="/">
                <Button variant="ghost" className="mb-6" data-testid="button-back">
                  <ArrowLeft className="mr-2" size={16} />
                  Back to Home
                </Button>
              </Link>
              <h1 className="text-4xl font-bold tracking-tight mb-4" data-testid="docs-title">
                HyprZepyx Documentation
              </h1>
              <p className="text-xl text-muted-foreground" data-testid="docs-description">
                Complete installation guides and configuration details for all three themes.
              </p>
            </div>
          </div>
        </section>

        {/* Installation Overview */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tight mb-8" data-testid="installation-title">
                Installation Overview
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <Card className="p-6 text-center">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Download className="text-primary" size={24} />
                  </div>
                  <h3 className="font-semibold mb-2">Step 1: Clone Repository</h3>
                  <p className="text-sm text-muted-foreground mb-4">Download the HyprZepyx configuration files</p>
                  <code className="text-xs bg-muted px-2 py-1 rounded block break-all">git clone https://github.com/xZepyx/HyprZepyx.git</code>
                </Card>
                
                <Card className="p-6 text-center">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Terminal className="text-primary" size={24} />
                  </div>
                  <h3 className="font-semibold mb-2">Step 2: Install Dependencies</h3>
                  <p className="text-sm text-muted-foreground mb-4">Run the prerequisites script</p>
                  <code className="text-xs bg-muted px-2 py-1 rounded">chmod +x prerequisites.sh && ./prerequisites.sh</code>
                </Card>
                
                <Card className="p-6 text-center">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Copy className="text-primary" size={24} />
                  </div>
                  <h3 className="font-semibold mb-2">Step 3: Copy Configs</h3>
                  <p className="text-sm text-muted-foreground mb-4">Copy the configs and enjoy your new setup</p>
                  <code className="text-xs bg-muted px-2 py-1 rounded">cp -r config/* ~/.config/</code>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Theme-Specific Installations */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tight mb-8" data-testid="themes-installation-title">
                Theme Installation Guides
              </h2>
              
              <div className="space-y-8">
                {themes.map((theme, index) => (
                  <Card key={index} className="p-8" data-testid={`theme-install-${index}`}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <h3 className="text-2xl font-bold" data-testid={`theme-install-name-${index}`}>{theme.name}</h3>
                          <Badge variant={theme.status.includes('Active') ? 'default' : 'secondary'} data-testid={`theme-install-status-${index}`}>
                            {theme.status}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground italic mb-4" data-testid={`theme-install-tagline-${index}`}>
                          "{theme.tagline}"
                        </p>
                        <p className="text-muted-foreground mb-6" data-testid={`theme-install-description-${index}`}>
                          {theme.description}
                        </p>
                        
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold mb-2">Widget System:</h4>
                            <p className="text-sm text-muted-foreground">{theme.widgets}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">Support Status:</h4>
                            <p className="text-sm text-muted-foreground">{theme.support}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">Features:</h4>
                            <div className="flex flex-wrap gap-2">
                              {theme.features.map((feature, fIndex) => (
                                <Badge key={fIndex} variant="outline" className="text-xs">
                                  {feature}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-6">
                          <h4 className="font-semibold mb-3">Installation Steps:</h4>
                          <div className="space-y-3 text-sm">
                            <div className="flex items-start gap-3">
                              <Badge variant="outline" className="text-xs mt-0.5">1</Badge>
                              <div>
                                <p className="font-medium">Clone the repository</p>
                                <code className="text-xs bg-muted px-2 py-1 rounded mt-1 block">git clone https://github.com/xZepyx/HyprZepyx.git</code>
                              </div>
                            </div>
                            <div className="flex items-start gap-3">
                              <Badge variant="outline" className="text-xs mt-0.5">2</Badge>
                              <div>
                                <p className="font-medium">Install dependencies</p>
                                <code className="text-xs bg-muted px-2 py-1 rounded mt-1 block">chmod +x prerequisites.sh && ./prerequisites.sh</code>
                              </div>
                            </div>
                            <div className="flex items-start gap-3">
                              <Badge variant="outline" className="text-xs mt-0.5">3</Badge>
                              <div>
                                <p className="font-medium">Copy {theme.name} theme configs</p>
                                <code className="text-xs bg-muted px-2 py-1 rounded mt-1 block">cp -r config/{theme.name}/* ~/.config/</code>
                              </div>
                            </div>
                            {theme.name === "kernel-fault" && (
                              <div className="flex items-start gap-3">
                                <Badge variant="outline" className="text-xs mt-0.5">4</Badge>
                                <div>
                                  <p className="font-medium">Additional setup for ignis widgets</p>
                                  <code className="text-xs bg-muted px-2 py-1 rounded mt-1 block">systemctl --user enable ignis</code>
                                </div>
                              </div>
                            )}
                            <div className="flex items-start gap-3">
                              <Badge variant="outline" className="text-xs mt-0.5">{theme.name === "kernel-fault" ? "5" : "4"}</Badge>
                              <div>
                                <p className="font-medium">Restart Hyprland and enjoy!</p>
                                <code className="text-xs bg-muted px-2 py-1 rounded mt-1 block">hyprctl reload</code>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                          <img 
                            src={theme.image} 
                            alt={`${theme.name} theme preview`}
                            className="w-full h-full object-cover"
                            data-testid={`theme-docs-image-${index}`}
                          />
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Keybindings Reference */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tight mb-8" data-testid="keybindings-title">
                Complete Keybindings Reference
              </h2>
              
              <div className="space-y-8">
                {keybindings.map((category, catIndex) => (
                  <Card key={catIndex} className="p-6" data-testid={`keybinding-category-${catIndex}`}>
                    <h3 className="text-xl font-semibold mb-6 flex items-center gap-2" data-testid={`keybinding-category-title-${catIndex}`}>
                      {catIndex === 0 && <Terminal size={20} />}
                      {catIndex === 1 && <Mouse size={20} />}
                      {catIndex === 2 && <Monitor size={20} />}
                      {catIndex === 3 && <Settings size={20} />}
                      {catIndex === 4 && <Volume2 size={20} />}
                      {category.category}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {category.bindings.map((binding, bindIndex) => (
                        <div key={bindIndex} className="flex justify-between items-center py-2" data-testid={`keybinding-${catIndex}-${bindIndex}`}>
                          <span className="text-muted-foreground">{binding.action}:</span>
                          <kbd className="px-3 py-1 bg-muted rounded text-xs font-mono font-semibold">
                            {binding.combo}
                          </kbd>
                        </div>
                      ))}
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Additional Resources */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tight mb-8" data-testid="resources-title">
                Additional Resources
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <Code size={20} />
                    Dependencies & Tools
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="text-primary" size={16} />
                      <span>Hyprland (Window Manager)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="text-primary" size={16} />
                      <span>Waybar (Status Bar)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="text-primary" size={16} />
                      <span>Rofi (App Launcher)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="text-primary" size={16} />
                      <span>Eww (Widgets)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="text-primary" size={16} />
                      <span>Ignis (Advanced Widgets)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="text-primary" size={16} />
                      <span>Kitty (Terminal)</span>
                    </li>
                  </ul>
                </Card>
                
                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <ExternalLink size={20} />
                    Useful Links
                  </h3>
                  <div className="space-y-3 text-sm">
                    <a href="https://github.com/xZepyx/HyprZepyx" className="flex items-center gap-2 text-primary hover:underline">
                      <Github size={16} />
                      HyprZepyx Repository
                    </a>
                    <a href="https://hyprland.org" className="flex items-center gap-2 text-primary hover:underline">
                      <ExternalLink size={16} />
                      Hyprland Documentation
                    </a>
                    <a href="https://github.com/ignis-sh/ignis" className="flex items-center gap-2 text-primary hover:underline">
                      <ExternalLink size={16} />
                      Ignis Project
                    </a>
                    <a href="https://elkowar.github.io/eww/" className="flex items-center gap-2 text-primary hover:underline">
                      <ExternalLink size={16} />
                      Eww Documentation
                    </a>
                    <a href="https://github.com/davatorium/rofi" className="flex items-center gap-2 text-primary hover:underline">
                      <ExternalLink size={16} />
                      Rofi Project
                    </a>
                    <a href="https://github.com/Alexays/Waybar" className="flex items-center gap-2 text-primary hover:underline">
                      <ExternalLink size={16} />
                      Waybar Project
                    </a>
                  </div>
                </Card>
              </div>
              
              <Card className="p-8 mt-8 text-center">
                <h3 className="text-xl font-semibold mb-4">Need Help?</h3>
                <p className="text-muted-foreground mb-6">
                  If you encounter any issues during installation or have questions about the configuration.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button asChild data-testid="button-github-issues">
                    <a href="https://github.com/xZepyx/HyprZepyx/issues">
                      <Github className="mr-2" size={16} />
                      Report Issue
                    </a>
                  </Button>
                  <Button variant="outline" asChild data-testid="button-contact">
                    <a href="mailto:zepyxunderscore@gmail.com">
                      Contact Developer
                    </a>
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}