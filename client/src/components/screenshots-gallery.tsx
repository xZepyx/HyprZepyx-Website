import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function ScreenshotsGallery() {
  const [activeTheme, setActiveTheme] = useState('spectral-horizon');

  const themes = [
    {
      id: 'spectral-horizon',
      name: 'Spectral-Horizon',
      subtitle: '(quickshell)',
      screenshots: [
        {
          title: 'Desktop Overview',
          description: 'Clean workspace with vibrant gradients and minimal widgets',
          image: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
        },
        {
          title: 'App Launcher',
          description: 'Elegant launcher with search and app grid',
          image: 'https://images.unsplash.com/photo-1551033406-611cf9a28f67?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
        },
        {
          title: 'Widgets & Terminal',
          description: 'System monitoring widgets and terminal setup',
          image: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
        }
      ]
    },
    {
      id: 'kernel-fault',
      name: 'Kernel-Fault',
      subtitle: '(ignis)',
      screenshots: [
        {
          title: 'Desktop Layout',
          description: 'Dark theme with neon blue accents and system widgets',
          image: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
        },
        {
          title: 'Control Center',
          description: 'Comprehensive system control panel with quick toggles',
          image: 'https://images.unsplash.com/photo-1551033406-611cf9a28f67?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
        },
        {
          title: 'Terminal Setup',
          description: 'Multi-pane terminal with custom prompt and colors',
          image: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
        }
      ]
    },
    {
      id: 'abyss',
      name: 'Abyss',
      subtitle: '(eww)',
      screenshots: [
        {
          title: 'Minimal Desktop',
          description: 'Ultra-minimal dark theme with subtle accents',
          image: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
        },
        {
          title: 'Code Editor',
          description: 'VSCode integration with theme-matching colors',
          image: 'https://images.unsplash.com/photo-1551033406-611cf9a28f67?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
        },
        {
          title: 'Lock Screen',
          description: 'Elegant lock screen with time and system info',
          image: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
        }
      ]
    },
    {
      id: 'lumen',
      name: 'Lumen',
      subtitle: '(glossy)',
      screenshots: [
        {
          title: 'Glossy Desktop',
          description: 'Light theme with glossy effects and transparency',
          image: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
        },
        {
          title: 'Glass Launcher',
          description: 'Translucent app launcher with blur effects',
          image: 'https://images.unsplash.com/photo-1551033406-611cf9a28f67?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
        },
        {
          title: 'Transparent Terminal',
          description: 'Terminal with glassmorphism and light colors',
          image: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
        }
      ]
    }
  ];

  const activeThemeData = themes.find(theme => theme.id === activeTheme);

  return (
    <section className="py-20 px-4" data-testid="screenshots-section">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">Screenshots Gallery</h2>
        <p className="text-xl text-muted-foreground text-center mb-12">Explore the four stunning themes of HyprZepyx</p>
        
        {/* Theme Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12" data-testid="theme-selector">
          {themes.map((theme) => (
            <Button
              key={theme.id}
              onClick={() => setActiveTheme(theme.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTheme === theme.id
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted bg-transparent'
              }`}
              data-testid={`theme-button-${theme.id}`}
            >
              {theme.name}
            </Button>
          ))}
        </div>

        {/* Active Theme Gallery */}
        {activeThemeData && (
          <div className="fade-in" data-testid={`theme-gallery-${activeTheme}`}>
            <h3 className="text-2xl font-bold mb-6">
              {activeThemeData.name} {activeThemeData.subtitle}
            </h3>
            <div className="screenshot-grid">
              {activeThemeData.screenshots.map((screenshot, index) => (
                <div key={index} className="screenshot-card" data-testid={`screenshot-${index}`}>
                  <img 
                    src={screenshot.image} 
                    alt={screenshot.title}
                    className="rounded-lg mb-4 w-full h-48 object-cover"
                    loading="lazy"
                  />
                  <h4 className="text-lg font-semibold mb-2">{screenshot.title}</h4>
                  <p className="text-muted-foreground text-sm">{screenshot.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
