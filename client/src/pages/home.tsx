import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import { 
  Monitor, 
  Zap, 
  Shield, 
  Cpu, 
  Palette, 
  Code, 
  Download, 
  Play, 
  CheckCircle, 
  Terminal,
  Settings,
  Sparkles,
  Menu,
  Twitter,
  Github,
  Linkedin,
  MousePointer,
  Keyboard,
  Rocket,
  Phone,
  Box
} from "lucide-react";

export default function Home() {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Minimal configuration focused on speed and efficiency. Experience blazing fast workflows."
    },
    {
      icon: Palette,
      title: "Beautiful Themes", 
      description: "Three stunning themes: kernel-fault, abyss, and lumen. Each with unique aesthetics."
    },
    {
      icon: Settings,
      title: "Highly Customizable",
      description: "Tailored for personal use with extensive customization options and clean visuals."
    },
    {
      icon: Terminal,
      title: "Modern Workflow",
      description: "Built for developers with intuitive keybindings and efficient window management."
    },
    {
      icon: Code,
      title: "Open Source",
      description: "Free to use, modify, and redistribute under GNU GPLv3 license."
    },
    {
      icon: Shield,
      title: "Robust Setup",
      description: "Comprehensive configuration with waybar, rofi, eww widgets, and more."
    }
  ];

  const themes = [
    {
      name: "kernel-fault",
      tagline: "fatal exception: elegance",
      description: "Widget system with ignis and eww. Features control center, launcher, and terminal integration.",
      image: "https://github.com/xZepyx/HyprZepyx/raw/main/.previews/kernel-fault/widgets.png",
      status: "Active Support",
      features: ["Ignis Widgets", "Control Center", "Custom Launcher", "Terminal Integration"],
      screenshots: [
        {
          url: "https://github.com/xZepyx/HyprZepyx/raw/main/.previews/kernel-fault/widgets.png",
          title: "Widgets",
          description: "Desktop widgets and system monitoring"
        },
        {
          url: "https://github.com/xZepyx/HyprZepyx/raw/main/.previews/kernel-fault/launcher.png",
          title: "Launcher",
          description: "Ignis-powered application launcher"
        },
        {
          url: "https://github.com/xZepyx/HyprZepyx/raw/main/.previews/kernel-fault/control-center.png",
          title: "Control Center",
          description: "System control and settings panel"
        },
        {
          url: "https://github.com/xZepyx/HyprZepyx/raw/main/.previews/kernel-fault/kitty.png",
          title: "Terminal",
          description: "Kitty terminal with custom theme"
        }
      ]
    },
    {
      name: "abyss",
      tagline: "stillness devours",
      description: "Minimalist design with eww clock widget. Perfect for focused work sessions.",
      image: "https://github.com/xZepyx/HyprZepyx/raw/main/.previews/Abyss/Code.png",
      status: "Active Support",
      features: ["Eww Clock Widget", "Wallpaper Switcher", "Minimal Design", "Focus Mode"],
      screenshots: [
        {
          url: "https://github.com/xZepyx/HyprZepyx/raw/main/.previews/Abyss/Code.png",
          title: "Code Environment",
          description: "Development workspace with dark theme"
        },
        {
          url: "https://github.com/xZepyx/HyprZepyx/raw/main/.previews/Abyss/hyprlock.png",
          title: "Lock Screen",
          description: "Hyprlock with abyss styling"
        },
        {
          url: "https://github.com/xZepyx/HyprZepyx/raw/main/.previews/Abyss/rofi-wayland-wall.png",
          title: "Wallpaper Switcher",
          description: "Rofi-powered wallpaper selection"
        },
        {
          url: "https://github.com/xZepyx/HyprZepyx/raw/main/.previews/Abyss/eww-minimal.png",
          title: "Eww Widget",
          description: "Minimal eww clock widget"
        }
      ]
    },
    {
      name: "lumen",
      tagline: "shadows made visible",
      description: "Clean desktop environment without widgets. Focuses on pure functionality.",
      image: "https://github.com/xZepyx/HyprZepyx/raw/main/.previews/Lumen/desktop.png",
      status: "Legacy (No Support)",
      features: ["No Widgets", "Pure Desktop", "App Launcher", "Terminal Layout"],
      screenshots: [
        {
          url: "https://github.com/xZepyx/HyprZepyx/raw/main/.previews/Lumen/desktop.png",
          title: "Desktop",
          description: "Clean idle desktop environment"
        },
        {
          url: "https://github.com/xZepyx/HyprZepyx/raw/main/.previews/Lumen/hyprlock.png",
          title: "Lock Screen",
          description: "Hyprlock with lumen styling"
        },
        {
          url: "https://github.com/xZepyx/HyprZepyx/raw/main/.previews/Lumen/rofi-op.png",
          title: "App Launcher",
          description: "Rofi application launcher"
        },
        {
          url: "https://github.com/xZepyx/HyprZepyx/raw/main/.previews/Lumen/Terminal.png",
          title: "Terminal",
          description: "Terminal with custom layout"
        }
      ]
    }
  ];

  const [selectedTheme, setSelectedTheme] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      {/* Header Navigation */}
      <header className="border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <Monitor className="text-primary-foreground" size={16} />
              </div>
              <span className="text-xl font-semibold text-foreground" data-testid="brand-name">HyprZepyx</span>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-foreground font-medium" data-testid="nav-home">Home</a>
              <a href="#themes" className="text-muted-foreground hover:text-foreground transition-colors duration-200" data-testid="nav-themes">Themes</a>
              <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors duration-200" data-testid="nav-features">Features</a>
              <a href="/docs" className="text-muted-foreground hover:text-foreground transition-colors duration-200" data-testid="nav-docs">Docs</a>
            </nav>
            
            {/* Action Buttons */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="hidden md:inline-flex" asChild data-testid="button-docs">
                <a href="/docs">
                  <Code className="mr-2" size={16} />
                  Docs
                </a>
              </Button>
              <Button asChild data-testid="button-download">
                <a href="https://github.com/xZepyx/HyprZepyx/archive/refs/heads/main.zip">
                  <Download className="mr-2" size={16} />
                  Download
                </a>
              </Button>
              {/* Mobile menu button */}
              <Button variant="ghost" size="icon" className="md:hidden" data-testid="button-mobile-menu">
                <Menu size={20} />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 sm:py-28 lg:py-36">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-8">
                <Badge variant="secondary" className="mb-6" data-testid="welcome-badge">
                  <Sparkles className="mr-2 text-primary" size={16} />
                  Fatal Exception : Elegance
                </Badge>
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6" data-testid="hero-title">
                  <span className="text-primary">HyprZepyx</span>{" "}
                  Configuration
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8" data-testid="hero-description">
                  A minimal yet functional Hyprland configuration focused on speed, clarity, and aesthetics.
                  Designed for clean visuals and fast workflows.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                <Button size="lg" className="shadow-sm" asChild data-testid="button-download-config">
                  <a href="https://github.com/xZepyx/HyprZepyx/archive/refs/heads/main.zip">
                    <Download className="mr-2" size={20} />
                    Download Config
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild data-testid="button-view-github">
                  <a href="https://github.com/xZepyx/HyprZepyx">
                    <Github className="mr-2" size={20} />
                    View on GitHub
                  </a>
                </Button>
              </div>
              
              <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground" data-testid="feature-highlights">
                <div className="flex items-center">
                  <CheckCircle className="text-primary mr-2" size={16} />
                  Open Source (GPLv3)
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-primary mr-2" size={16} />
                  3 Beautiful Themes
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-primary mr-2" size={16} />
                  Minimal & Fast
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Themes Section */}
        <section id="themes" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight mb-4" data-testid="themes-title">Choose Your Theme</h2>
              <p className="text-lg text-muted-foreground" data-testid="themes-description">
                Three distinct themes, each with unique aesthetics and functionality.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {themes.map((theme, index) => (
                <Card key={index} className="p-6 shadow-sm hover:shadow-md transition-all duration-200" data-testid={`theme-card-${index}`}>
                  <div className="aspect-video bg-muted rounded-lg mb-6 overflow-hidden">
                    <img 
                      src={theme.image} 
                      alt={`${theme.name} theme preview`}
                      className="w-full h-full object-cover"
                      data-testid={`theme-image-${index}`}
                    />
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-1" data-testid={`theme-name-${index}`}>{theme.name}</h3>
                      <p className="text-sm text-muted-foreground italic" data-testid={`theme-tagline-${index}`}>"{theme.tagline}"</p>
                    </div>
                    <p className="text-muted-foreground" data-testid={`theme-description-${index}`}>{theme.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {theme.features.map((feature, fIndex) => (
                        <Badge key={fIndex} variant="secondary" className="text-xs" data-testid={`theme-feature-${index}-${fIndex}`}>
                          {feature}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-between pt-2">
                      <Badge 
                        variant={theme.status.includes('Active') ? 'default' : 'secondary'} 
                        className="text-xs"
                        data-testid={`theme-status-${index}`}
                      >
                        {theme.status}
                      </Badge>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="ghost" size="sm" data-testid={`button-view-theme-${index}`}>
                            <Play className="mr-2" size={14} />
                            View Screenshots
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                          <DialogHeader>
                            <DialogTitle className="text-2xl">{theme.name}</DialogTitle>
                            <p className="text-muted-foreground italic">"{theme.tagline}"</p>
                          </DialogHeader>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                            {theme.screenshots.map((screenshot, sIndex) => (
                              <div key={sIndex} className="space-y-2">
                                <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                                  <img 
                                    src={screenshot.url} 
                                    alt={`${theme.name} ${screenshot.title}`}
                                    className="w-full h-full object-cover"
                                    data-testid={`screenshot-${index}-${sIndex}`}
                                  />
                                </div>
                                <div>
                                  <h4 className="font-semibold text-sm">{screenshot.title}</h4>
                                  <p className="text-xs text-muted-foreground">{screenshot.description}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section id="features" className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight mb-4" data-testid="features-title">Why Choose HyprZepyx?</h2>
              <p className="text-lg text-muted-foreground" data-testid="features-description">
                A thoughtfully crafted Hyprland setup with everything you need.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <Card key={index} className="p-8 shadow-sm hover:shadow-md transition-shadow duration-200" data-testid={`feature-card-${index}`}>
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                      <IconComponent className="text-primary" size={24} />
                    </div>
                    <h3 className="text-xl font-semibold mb-3" data-testid={`feature-title-${index}`}>{feature.title}</h3>
                    <p className="text-muted-foreground" data-testid={`feature-description-${index}`}>{feature.description}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
        
        {/* Installation Section */}
        <section id="install" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight mb-4" data-testid="install-title">
                  Quick Installation
                </h2>
                <p className="text-lg text-muted-foreground" data-testid="install-description">
                  Get up and running with HyprZepyx in just a few steps.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <Card className="p-6 text-center">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Download className="text-primary" size={24} />
                  </div>
                  <h3 className="font-semibold mb-2" data-testid="step-1-title">Step 1</h3>
                  <p className="text-sm text-muted-foreground" data-testid="step-1-desc">Clone the repository from GitHub</p>
                </Card>
                
                <Card className="p-6 text-center">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Terminal className="text-primary" size={24} />
                  </div>
                  <h3 className="font-semibold mb-2" data-testid="step-2-title">Step 2</h3>
                  <p className="text-sm text-muted-foreground" data-testid="step-2-desc">Run prerequisites.sh to install dependencies</p>
                </Card>
                
                <Card className="p-6 text-center">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Settings className="text-primary" size={24} />
                  </div>
                  <h3 className="font-semibold mb-2" data-testid="step-3-title">Step 3</h3>
                  <p className="text-sm text-muted-foreground" data-testid="step-3-desc">Copy the configs and enjoy your new setup</p>
                </Card>
              </div>
              
              <Card className="p-8 bg-card border">
                <h3 className="text-lg font-semibold mb-4" data-testid="keybindings-title">Key Bindings</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Terminal:</span>
                      <kbd className="px-2 py-1 bg-muted rounded text-xs font-mono">Super + Enter</kbd>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">App Launcher:</span>
                      <kbd className="px-2 py-1 bg-muted rounded text-xs font-mono">Super + D</kbd>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">File Manager:</span>
                      <kbd className="px-2 py-1 bg-muted rounded text-xs font-mono">Super + E</kbd>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Close Window:</span>
                      <kbd className="px-2 py-1 bg-muted rounded text-xs font-mono">Super + C</kbd>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Lock Screen:</span>
                      <kbd className="px-2 py-1 bg-muted rounded text-xs font-mono">Alt + L</kbd>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Screenshot:</span>
                      <kbd className="px-2 py-1 bg-muted rounded text-xs font-mono">Alt + D</kbd>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Toggle Float:</span>
                      <kbd className="px-2 py-1 bg-muted rounded text-xs font-mono">Super + V</kbd>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Fullscreen:</span>
                      <kbd className="px-2 py-1 bg-muted rounded text-xs font-mono">Super + Space</kbd>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Wallpaper:</span>
                      <kbd className="px-2 py-1 bg-muted rounded text-xs font-mono">Super + B</kbd>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="p-8 sm:p-12 lg:p-16 text-center shadow-sm">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4" data-testid="cta-title">
                Ready to Transform Your Desktop?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto" data-testid="cta-description">
                Join the community of users who have elevated their Hyprland experience with HyprZepyx.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" className="shadow-sm" asChild data-testid="button-get-started">
                  <a href="https://github.com/xZepyx/HyprZepyx/archive/refs/heads/main.zip">
                    <Download className="mr-2" size={20} />
                    Get Started Now
                  </a>
                </Button>
                <Button variant="ghost" size="lg" asChild data-testid="button-view-docs">
                  <a href="/docs">
                    <Code className="mr-2" size={20} />
                    View Documentation
                  </a>
                </Button>
              </div>
            </Card>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="border-t border-border bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Footer Brand */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                  <Monitor className="text-primary-foreground" size={16} />
                </div>
                <span className="text-xl font-semibold text-foreground" data-testid="footer-brand">HyprZepyx</span>
              </div>
              <p className="text-muted-foreground text-sm" data-testid="footer-tagline">
                Fatal Exception : Elegance. Clean visuals and fast workflows.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-200" data-testid="social-twitter">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-200" data-testid="social-github">
                  <Github size={20} />
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-200" data-testid="social-linkedin">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
            
            {/* Footer Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground" data-testid="footer-config-title">Configuration</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#themes" className="text-muted-foreground hover:text-foreground transition-colors duration-200" data-testid="footer-themes">Themes</a></li>
                <li><a href="#features" className="text-muted-foreground hover:text-foreground transition-colors duration-200" data-testid="footer-features">Features</a></li>
                <li><a href="#install" className="text-muted-foreground hover:text-foreground transition-colors duration-200" data-testid="footer-install">Installation</a></li>
                <li><a href="https://github.com/xZepyx/HyprZepyx" className="text-muted-foreground hover:text-foreground transition-colors duration-200" data-testid="footer-github">GitHub Repo</a></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground" data-testid="footer-components-title">Components</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-200" data-testid="footer-waybar">Waybar</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-200" data-testid="footer-rofi">Rofi</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-200" data-testid="footer-eww">Eww Widgets</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-200" data-testid="footer-ignis">Ignis</a></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground" data-testid="footer-resources-title">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="https://hyprland.org" className="text-muted-foreground hover:text-foreground transition-colors duration-200" data-testid="footer-hyprland">Hyprland</a></li>
                <li><a href="https://github.com/davatorium/rofi" className="text-muted-foreground hover:text-foreground transition-colors duration-200" data-testid="footer-rofi-github">Rofi Project</a></li>
                <li><a href="https://elkowar.github.io/eww/" className="text-muted-foreground hover:text-foreground transition-colors duration-200" data-testid="footer-eww-docs">Eww Documentation</a></li>
                <li><a href="https://github.com/ignis-sh/ignis" className="text-muted-foreground hover:text-foreground transition-colors duration-200" data-testid="footer-ignis-github">Ignis Project</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between">
            <p className="text-sm text-muted-foreground" data-testid="footer-copyright">
              © 2025–2040 Aditya Yadav (xZepyx). Licensed under GNU GPLv3.
            </p>
            <div className="flex items-center space-x-6 mt-4 sm:mt-0">
              <a href="https://github.com/xZepyx/HyprZepyx/blob/main/LICENSE" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200" data-testid="footer-license">License</a>
              <a href="https://github.com/xZepyx/HyprZepyx/issues" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200" data-testid="footer-issues">Issues</a>
              <a href="mailto:zepyxunderscore@gmail.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200" data-testid="footer-contact">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
